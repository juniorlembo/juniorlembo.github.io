import { notFound } from 'next/navigation';
import { articles } from '@/lib/articles';
import { promises as fs } from 'fs';
import path from 'path';
import { marked } from 'marked';

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

async function getArticle(slug: string) {
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return null;
  }

  const filePath = path.join(process.cwd(), 'src', 'articles', `${slug}.md`);
  try {
    const markdown = await fs.readFile(filePath, 'utf-8');
    const content = marked(markdown.split('---').slice(2).join('---').trim());
    return { ...article, content };
  } catch (error) {
    return null;
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <div className="space-y-2 not-prose">
            <p className="text-primary font-code uppercase tracking-widest">{article.category}</p>
            <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
              {article.title}
            </h1>
            <p className="text-muted-foreground text-lg">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
      </div>
    </div>
  );
}