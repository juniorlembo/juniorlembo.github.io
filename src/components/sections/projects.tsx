import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Open Source Projects
const openSourceProjects = [
  {
    icon: <Code size={20} className="text-green-400" />,
    title: 'loki_middleware',
    description: 'Un outil pour faciliter la collecte et l\'agrégation des logs pour les développeurs ou les administrateurs système.',
    tags: ['Python', 'FastAPI', 'Loki'],
    links: [
      { type: 'github', url: 'https://github.com/IlemLembo/loki-middleware' },
    ]
  },
  {
    icon: <Code size={20} className="text-blue-400" />,
    title: 'Automatisation de la Sauvegarde de VMware ESXI',
    description: 'Script Bash/Python pour automatiser les snapshots et les restaurations à chaud pour les hyperviseurs VMware ESXi.',
    tags: ['Bash', 'Python', 'VMware'],
    links: [
      { type: 'github', url: '#' },
    ]
  },
];

// Image imports for Featured Projects
import azure from "@/public/azure.png";
import datadog from "@/public/datadog.png";
import grafana from "@/public/grafana.png";
import safeticket from "@/public/safeticket.png";
import great from "@/public/great.png";
import takaz from "@/public/takaz.png";
import tesma from "@/public/tesma.png";
import cetak from "@/public/cetak.png";

const featuredProjects = [
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
        url: "https://www.safeticket.app",
        image: safeticket,
        tags: ['Cloud', 'Automation', 'Conformité', 'DevSecOps', 'Infrastructure as Code', 'CI/CD'],
        category: 'Sécurité Cloud et DevSecOps',
      },
      {
        title: 'Site Web Great Tech Lab',
        url : "https://greattechlab.tech",
        description: 'Un site web présentant l\'ambition, les objectifs et les projets de l\'entreprise.',
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
        image: cetak,
        tags: ['Pentesting', 'WebApp', 'Sécurité', 'Services Mail'],
        category: 'Développement Web et Durcissement Système',
      },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">

        {/* Open Source Contributions */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mt-16">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">
              Open Source
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Contributions
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Une sélection de mes projets open-source.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2">
          {openSourceProjects.map((project, index) => (
            <Card key={index} className="h-full bg-[#1a202c] border-gray-800 flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  {project.icon}
                  <div className="flex items-center gap-2">
                    {project.links.map((link, linkIndex) => {
                      if (link.type === 'github') {
                        return <Link key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer"><Github size={28} className="text-gray-400 hover:text-white" /></Link>
                      }
                      return null;
                    })}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-xl font-bold hover:text-primary transition-colors">
                    <Link href={project.links[0].url} target="_blank" rel="noopener noreferrer">{project.title}</Link>
                </CardTitle>
                <CardDescription className="mt-2 text-gray-400">
                  {project.description}
                </CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="outline" className="border-green-400/50 text-green-400 font-mono">{tag}</Badge>)}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Featured Projects */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">
              Projets Principaux
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Mes réalisations
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Voici une sélection de mes projets les plus représentatifs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="h-full bg-[#1a202c] border-gray-800 flex flex-col">
              <CardHeader>
                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                  <Image src={project.image} alt={project.title} className="rounded-t-lg" />
                </Link>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-xl font-bold hover:text-primary transition-colors">
                  <Link href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</Link>
                </CardTitle>
                <p className="text-sm text-gray-400 mt-1">{project.category}</p>
                <CardDescription className="mt-2 text-gray-400">
                  {project.description}
                </CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="outline" className="border-blue-400/50 text-blue-400 font-mono">{tag}</Badge>)}
                </div>
              </div>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
}
