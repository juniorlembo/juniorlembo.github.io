const timelineEvents = [
  {
    date: "Fév 2025 - Présent",
    title: "Architecte DevSecOps | SOLIMI CO",
    description: "Sécurisation des interconnexions partenaires avec des VPN Fortigate/pfSense. Architecture et administration d'environnements cloud multi-sites Azure/AWS (Terraform, Ansible), réalisant une réduction des coûts de 60 %. Déploiement d'une stack d'observabilité complète (Datadog, Grafana, etc.) assurant 99,8 % de disponibilité et mise en œuvre de pipelines CI/CD automatisés avec analyse de sécurité intégrée (Trivy, Snyk).",
  },
  {
    date: "Oct 2023 - Jan 2025",
    title: "Administrateur Réseau & Système | KYA-Energy Group",
    description: "Administration de l'infrastructure réseau pour plus de 70 postes de travail. Déploiement de serveurs VMware vSphere, configuration de routeurs MikroTik (QoS, filtrage, durcissement) et refonte de la politique de sécurité pour les applications internes.",
  },
  {
    date: "Déc 2024 - Sep 2025",
    title: "Administrateur Système & Service de Messagerie | Freelance",
    description: "Gestion, sécurisation et administration des infrastructures web et des serveurs de messagerie pour plusieurs entreprises partenaires au Togo et au Bénin.",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">
              Parcours Professionnel
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Chronologie de Carrière
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Un résumé de mon expérience professionnelle et de mes principaux rôles.
            </p>
          </div>
        </div>
        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-gray-600"></div>
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative mb-8 flex w-full items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
              <div className={`w-1/2 px-4 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-green-400"></div>
                <div className="rounded-lg bg-[#1a202c] p-4 shadow-md">
                  <p className="text-sm font-semibold text-green-400">{event.date}</p>
                  <h3 className="text-lg font-bold text-white">{event.title}</h3>
                  <p className="mt-1 text-gray-400">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
