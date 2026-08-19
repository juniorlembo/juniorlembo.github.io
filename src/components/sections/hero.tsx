import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="w-full pt-24 md:pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <Badge variant="outline" className="py-2 px-4 rounded-full border-primary/50 text-primary font-code text-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Disponible pour freelance & nouvelles opportunités
            </Badge>
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Ilem Isaiah Nelson Junior LEMBO
            </h1>
            <p className="text-2xl text-muted-foreground">
              — Spécialiste Support Système & Cloud
            </p>
            <p className="max-w-[600px] text-muted-foreground">
            Spécialiste Système & Cloud certifié (LFCSA, KCNA, Security+), je fiabilise les infrastructures hybrides (VMware, Azure/AWS) et automatise leur exploitation dans le respect de SLA exigeants (99,8% de disponibilité). Auteur d'outils Open Source sur PyPI et lauréat du CTF Togo 2024, j'associe rigueur opérationnelle, optimisation des coûts et accompagnement des équipes vers la sécurité continue.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="#projects">
                  Voir les projets
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#contact">
                  Me contacter
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#1a202c] rounded-lg shadow-lg p-4 font-mono text-sm text-white overflow-x-auto">
              <div className="flex items-center mb-2">
                <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></span>
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
              </div>
              <pre>
                <code>
                  <span className="text-green-400"># kubectl get cluster-info architect-os</span>
                  <br />
                  ---
                  <br />
                  <span className="text-cyan-400">apiVersion:</span> v1
                  <br />
                  <span className="text-cyan-400">kind:</span> DevSecOpsEngineer
                  <br />
                  <span className="text-cyan-400">metadata:</span>
                  <br />
                  {"  "}<span className="text-cyan-400">name:</span> "ilem-lembo"
                  <br />
                  {"  "}<span className="text-cyan-400">location:</span> "Lomé, Togo (Remote / Mobility)"
                  <br />
                  <span className="text-cyan-400">spec:</span>
                  <br />
                  {"  "}<span className="text-cyan-400">languages:</span>
                  <br />
                  {"    "}- "Python (FastAPI, Django)"
                  <br />
                  {"    "}- "JavaScript / TypeScript (React, Next.js)"
                  <br />
                  {"    "}- "Bash / Shell Scripting"
                  <br />
                  {"    "}- "C / C++"
                  <br />
                  {"  "}<span className="text-cyan-400">orchestration:</span> ["Kubernetes (k3s)", "Docker", "Terraform"]
                  <br />
                  {"  "}<span className="text-cyan-400">cloud:</span> ["AWS", "Azure"]
                  <br />
                  {"  "}<span className="text-cyan-400">observability:</span> ["Grafana", "Loki", "Prometheus", "OpenTelemetry"]
                  <br />
                  <span className="text-green-400"># exit</span>
                  <br />
                  Cluster Status: <span className="text-emerald-400">HEALTHY ✓</span>
                  <br />
                  Uptime: <span className="text-cyan-400">99.9%</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
