import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import safeticket from '@/public/safeticket.png'
import takaz from '@/public/takaz.png'
import cetak from '@/public/cetak.png'
import tesma from '@/public/tesma.png'

const projects = [
  {
    title: 'TAKAZ-Eng Website and Mail Security',
    description: 'Upgraded legacy firewall infrastructure to a next-generation solution for a Fortune 500 company, improving threat detection by 40%.',
    image: takaz,
    tags: ['Firewall', 'Migration', 'Security', 'Pentesting', 'Mail services'],
    category: 'Web Development and System hardening',
  },
  {
    title: 'TESMA Solar Website and Mail Security',
    description: 'Developed a secure website and email infrastructure for TESMA Solar, implementing best practices in web and mail security.',
    image: tesma,
    tags: ['Site Vitrine', 'Architecture', 'Security', 'Mail services', 'Pentesting'],
    category: 'Architecture',
  },
  {
    title: 'CETAK-Services Website and Mail Security',
    description: 'Developed a secure website and email infrastructure for CETAK-Services, implementing best practices in web and mail security, while showcasing their service offerings effectively.',
    //image: PlaceHolderImages.find(p => p.id === 'project-3'),
    image: cetak,
    tags: ['Pentesting', 'WebApp', 'Security', 'Mail services'],
    category: 'Web Development and System hardening',
  },
  {
    title: 'SafeTicket Backend and Infrastructure Security : DevSecOps Automation',
    description: 'Automated security auditing and compliance checks for multi-cloud environments (AWS, GCP).',
    // image: PlaceHolderImages.find(p => p.id === 'project-4'),
    image: safeticket,
    tags: ['Cloud', 'Automation', 'Compliance', 'DevSecOps', 'Infrastructure as Code', 'CI/CD'],
    category: 'Cloud Security and DevSecOps',
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
                            src={project.image}
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
