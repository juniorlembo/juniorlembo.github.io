import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FolderKanban, FileText, Wrench, MessageSquare } from 'lucide-react';

const channels = [
  {
    title: 'Projects',
    description: 'Explore my portfolio of security projects.',
    link: '#projects',
    icon: <FolderKanban className="w-8 h-8 text-primary" />,
    cta: 'View Projects'
  },
  {
    title: 'Articles',
    description: 'Read my latest insights and analysis.',
    link: '#articles',
    icon: <FileText className="w-8 h-8 text-primary" />,
    cta: 'Read Articles'
  },
  {
    title: 'Skills',
    description: 'Discover my technical capabilities.',
    link: '#arsenal',
    icon: <Wrench className="w-8 h-8 text-primary" />,
    cta: 'Explore Arsenal'
  },
  {
    title: 'Contact',
    description: 'Get in touch for collaborations or inquiries.',
    link: '#contact',
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    cta: 'Initiate Contact'
  },
];

export function SecureChannel() {
  return (
    <section id="secure-channel" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <p className="font-code text-primary uppercase tracking-widest">Navigation Matrix</p>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
              Select a secure channel to proceed
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-4 md:grid-cols-2">
          {channels.map((channel, index) => (
            <Card key={index} className="flex flex-col bg-card border-border/50 text-center items-center p-6 transition-all hover:border-primary/50 hover:-translate-y-2">
              <CardHeader className="p-2">
                {channel.icon}
              </CardHeader>
              <CardContent className="flex-grow p-2">
                <CardTitle className="font-headline text-xl">{channel.title}</CardTitle>
                <CardDescription className="mt-2 text-sm">{channel.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-2">
                <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-primary/90 font-code">
                  <Link href={channel.link}>
                    {channel.cta} <ArrowRight className="ml-2 h-4 w-4" />
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
