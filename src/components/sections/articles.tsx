import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { articles } from '@/lib/articles';

export function Articles() {
  return (
    <section id="articles" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-primary mr-3">03.</span>Latest Articles
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/articles">View All</Link>
          </Button>
        </div>
        <div className="mx-auto grid max-w-7xl gap-8 py-12 lg:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <Card key={article.slug} className="flex flex-col bg-transparent border-none shadow-none">
              <CardHeader>
                <CardDescription className="text-primary font-code uppercase tracking-widest">{article.category}</CardDescription>
                <CardTitle className="font-headline text-2xl pt-2">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{article.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-primary/90 font-code">
                  <Link href={`/articles/${article.slug}`}>
                    Read More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}