import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import safeticket from '@/public/safeticket.png'
import takaz from '@/public/takaz.png'
import cetak from '@/public/cetak.png'
import tesma from '@/public/tesma.png'
import great from '@/public/great.png'
import grafana from '@/public/grafana.png'
import datadog from '@/public/datadog.png'
import azure from '@/public/azure.png'

const projects = [
  {
    title: 'Optimisation des Coûts Cloud Azure & Implémentation FinOps',
    description: 'Stratégie complète d\'optimisation des coûts cloud Azure permettant jusqu\'à 70% de réduction des factures d\'infrastructure grâce au dimensionnement des ressources, aux instances réservées, aux instances spot et aux politiques automatisées de gouvernance des coûts.',
    url: "https://azure.microsoft.com",
    image: azure,
    tags: ['Azure', 'FinOps', 'Optimisation Coûts', 'Gestion Ressources', 'Gouvernance Cloud', 'Analyse Facturation'],
    category: 'Gestion des Coûts Cloud',
  },
  {
    title: 'Plateforme de Surveillance & Observabilité d\'Entreprise : Datadog',
    description: 'Implémentation de Datadog, une plateforme SaaS de surveillance commerciale, offrant une observabilité unifiée de l\'infrastructure, des applications et des logs avec des insights alimentés par l\'IA et des alertes automatisées.',
    url: "https://www.safeticket.app",
    image: datadog,
    tags: ['Datadog', 'SaaS', 'APM', 'Surveillance Infrastructure', 'Gestion Logs', 'Insights IA'],
    category: 'Surveillance & Conformité',
  },
  {
    title: 'Plateforme de Surveillance & Observabilité d\'Entreprise : Grafana pour optimiser les coûts',
    description: 'Solution de surveillance complète utilisant Grafana, Prometheus, Loki et Mimir pour l\'observabilité en temps réel des serveurs et applications avec sanitisation des logs conforme RGPD et protection des données personnelles.',
    url: "https://www.safeticket.app",
    image: grafana,
    tags: ['Grafana', 'Prometheus', 'Loki', 'Mimir', 'RGPD', 'Protection DCP', 'Observabilité'],
    category: 'Surveillance & Conformité',
  },
  {
    title: 'Sécurité Backend et Infrastructure SafeTicket : Automation DevSecOps',
    description: 'Audit de sécurité automatisé et vérifications de conformité pour environnements multi-cloud (AWS, GCP).',
    // image: PlaceHolderImages.find(p => p.id === 'project-4'),
    url: "https://www.safeticket.app",
    image: safeticket,
    tags: ['Cloud', 'Automation', 'Conformité', 'DevSecOps', 'Infrastructure as Code', 'CI/CD'],
    category: 'Sécurité Cloud et DevSecOps',
  },
  {
    title: 'Site Web Great Tech Lab',
    url : "https://greattechlab.tech",
    description: 'Un site web présentant l\'ambition, les objectifs et les projets de l\'entreprise.',
    // image: PlaceHolderImages.find(p => p.id === 'project-4'),
    image: great,
    tags: ['Cloud', 'Automation', 'Conformité', 'DevSecOps', 'Infrastructure as Code', 'CI/CD'],
    category: 'Sécurité Cloud et DevSecOps',
  },
  
  {
    title: 'Site Web TAKAZ-Eng et Sécurité Mail',
    url: "https://www.takaz-eng.com",
    description: 'Mise à niveau de l\'infrastructure pare-feu legacy vers une solution de nouvelle génération pour une entreprise Fortune 500, améliorant la détection des menaces de 40%.',
    image: takaz,
    tags: ['Pare-feu', 'Migration', 'Sécurité', 'Pentesting', 'Services Mail'],
    category: 'Développement Web et Durcissement Système',
  },
  {
    title: 'Site Web TESMA Solar et Sécurité Mail',
    url: "https://www.tesma-solar.com",
    description: 'Développement d\'un site web sécurisé et d\'une infrastructure email pour TESMA Solar, implémentant les meilleures pratiques en sécurité web et mail.',
    image: tesma,
    tags: ['Site Vitrine', 'Architecture', 'Sécurité', 'Services Mail', 'Pentesting'],
    category: 'Architecture',
  },
  {
    title: 'Site Web CETAK-Services et Sécurité Mail',
    url: "https://www.cetak.services",
    description: 'Développement d\'un site web sécurisé et d\'une infrastructure email pour CETAK-Services, implémentant les meilleures pratiques en sécurité web et mail, tout en présentant efficacement leurs offres de services.',
    //image: PlaceHolderImages.find(p => p.id === 'project-3'),
    image: cetak,
    tags: ['Pentesting', 'WebApp', 'Sécurité', 'Services Mail'],
    category: 'Développement Web et Durcissement Système',
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-start justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-primary mr-3">02.</span>Projets Récents
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Une sélection de projets démontrant une expertise en sécurité offensive et défensive.
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
                        <CardTitle className="font-headline text-2xl">
                          <a target='_blank' href={project.url}>
                            {project.title}
                          </a>
                          </CardTitle>
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
