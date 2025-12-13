import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Enterprise Firewall Migration',
    description: 'Upgraded legacy firewall infrastructure to a next-generation solution for a Fortune 500 company, improving threat detection by 40%.',
    image: PlaceHolderImages.find(p => p.id === 'project-1'),
    tags: ['Firewall', 'Migration', 'Security'],
    category: 'Network Security',
  },
  {
    title: 'Zero Trust Implementation',
    description: 'Designed and deployed a Zero Trust network architecture, reducing lateral movement and enforcing strict access controls.',
    image: PlaceHolderImages.find(p => p.id === 'project-2'),
    tags: ['Zero Trust', 'Architecture', 'IAM'],
    category: 'Architecture',
  },
  {
    title: 'Financial Sector Pentest',
    description: 'Conducted a comprehensive penetration test for a major bank, identifying critical vulnerabilities in their online banking platform.',
    image: PlaceHolderImages.find(p => p.id === 'project-3'),
    tags: ['Pentesting', 'Finance', 'WebApp'],
    category: 'Offensive Security',
  },
  {
    title: 'Cloud Security Orchestrator',
    description: 'Automated security auditing and compliance checks for multi-cloud environments (AWS, GCP).',
    image: PlaceHolderImages.find(p => p.id === 'project-4'),
    tags: ['Cloud', 'Automation', 'Compliance'],
    category: 'Cloud Security',
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-start justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-primary mr-3">02.</span>Recent Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of projects demonstrating expertise in offensive and defensive security domains.
            </p>
          </div>
        </div>
        <div className="py-12">
          <Carousel 
            opts={{ align: "start", loop: true }} 
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <Card className="h-full flex flex-col overflow-hidden bg-card border-border/50 transition-all hover:border-primary/50">
                       <CardHeader>
                        <CardDescription className="text-primary font-code uppercase tracking-widest">{project.category}</CardDescription>
                      </CardHeader>
                      {project.image && (
                          <Image
                            src={project.image.imageUrl}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="object-cover aspect-video w-full"
                            data-ai-hint={project.image.imageHint}
                          />
                        )}
                      <CardContent className="flex-grow pt-6">
                        <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
                      </CardContent>
                       <CardFooter className="flex flex-wrap gap-2">
                        {project.tags.map(tag => <Badge key={tag} variant="secondary" className="font-code">{tag}</Badge>)}
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -top-16 right-16" />
              <CarouselNext className="absolute -top-16 right-4" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
