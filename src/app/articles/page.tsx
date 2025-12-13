import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { articles } from '@/lib/articles';

export default function ArticlesPage() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="space-y-2 mb-12">
            <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
              All Articles
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Here are all the articles I've written.
            </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link href={`/articles/${article.slug}`} key={article.slug} className="group">
              <Card className="flex flex-col h-full bg-card border-border/50 transition-all group-hover:border-primary/50">
                <CardHeader>
                  <CardDescription className="text-primary font-code uppercase tracking-widest">{article.category}</CardDescription>
                  <CardTitle className="font-headline text-2xl pt-2 group-hover:text-primary">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{article.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}