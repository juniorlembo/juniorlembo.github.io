import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { articles } from '@/lib/articles';

export function Articles() {
  return (
    <section id="articles" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-primary mr-3">03.</span>Articles
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-2xl space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-xl"></div>
              <Card className="relative bg-card/50 backdrop-blur-sm border border-primary/20 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="space-y-4">
                    <div className="text-6xl md:text-8xl font-bold font-headline text-primary/30 select-none">
                      Bientôt Disponible
                    </div>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      Je travaille actuellement sur des articles passionnants concernant les pratiques DevSecOps, la surveillance, les réseaux et la technologie.
                      Restez à l'écoute pour des analyses approfondies et des guides pratiques.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span>En Développement</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* 
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
      </div> */}
    </section>
  );
}