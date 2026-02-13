import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter, // Import CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"; // Import Button

// Placeholder image imports - Replace these with your actual certification images
import ckaBadge from '@/public/images/cka.png'; // Example CKA badge
import awsBadge from '@/public/images/aws-saa.png'; // Example AWS SAA badge
// Add more image imports here as needed, e.g.:
// import azureBadge from '@/public/images/azure-cert.png';
import fortinet from "@/public/fortinet-fortigate-7-4-administrator.png";
import lfcs from "@/public/lfcs-linux-foundation-certified-systems-administrator.2.png";
import git from "@/public/git-and-github-essentials.1.png";
import kcna from "@/public/kcna-kubernetes-and-cloud-native-associate.png";
import securityPlus from "@/public/comptia-security-ce-certification.png";
import ctm from "@/public/cyber-threat-management.png";
import react from "@/public/react.png";

interface Certification {
  title: string;
  image: any ;
  link: string;
  description: string;
  issuer: string;
  date: string;
  tags: string[];
}


const certifications = [
  {
    title: "LFCS: Administrateur Système Certifié Linux Foundation",
    image: lfcs,
    link: "https://www.credly.com/badges/c79f6134-8ad0-4286-a5ad-1974020026e6/public_url",
    description: "Démonstration d'expertise dans la conception de systèmes distribués et le durcissement de serveurs.",
    issuer: "Amazon Web Services (AWS)",
    date: "Février 2024",
    tags: ["Cloud", "AWS", "Architecture", "Linux"]
  },
  {
    title: "CompTIA Security+",
    image: securityPlus,
    link: "https://www.credly.com/badges/a1f211f1-ac16-4141-af4e-ec1b53ed13bd/public_url",
    description: "Cybersécurité appliquée aux applications, réseaux et cloud.",
    issuer: "COMPTIA",
    date: "Décembre 2025",
    tags: ["Cloud", "Cybersécurité", "DevOps", "Linux", "Windows"]
  },
  {
    title: "Fortinet FortiGate 7.4 Administrateur",
    image: fortinet,
    link: "https://www.credly.com/badges/beb6b26a-855f-46bf-b768-34e37cdbab8c/public_url",
    description: "Validation des connaissances du FortiGate 7",
    issuer: "Fortinet",
    date: "Octobre 2024",
    tags: ["Cybersécurité", "Réseaux", "VPN"]
  },
  {
    title: "KCNA : Associé Kubernetes et Cloud Native",
    image: kcna,
    link: "https://www.credly.com/badges/7da0c9bf-a908-4c7b-8619-f05a545009a8/public_url",
    description: "Connaissance de Kubernetes, Cloud Native et DevOps",
    issuer: "Linux Foundation, CNCF",
    date: "Septembre 2025",
    tags: ["Cloud", "Déploiement", "HA", "CI/CD", "DevOps", "Linux"]
  },
  {
    title: "Gestion des Menaces Cyber",
    image: ctm,
    link: "https://www.credly.com/badges/7f30415b-37d4-4096-beec-5f1c2808a7bd/public_url",
    description: "Comment gérer les menaces cyber, mise en place d'un SOC",
    issuer: "Coursera",
    date: "Mars 2025",
    tags: ["Cloud", "Programmation", "DevOps", "Linux"]
  },
  {
    title: "Essentiels Git et GitHub",
    image: git,
    link: "https://www.credly.com/badges/6a867a37-dfda-4b04-b264-54a1b8a24598/public_url",
    description: "Utilisation de Git et GitHub pour le contrôle de version et la collaboration",
    issuer: "Coursera",
    date: "Mars 2025",
    tags: ["Cloud", "Programmation", "DevOps", "Linux"]
  },
  {
    title: "Reactjs Avancé",
    image: react,
    link: "https://v1.scrimba.com/certificate/uMGg44CK/greact",
    description: "Construction et conception de sites web dynamiques avec Reactjs",
    issuer: "Scrimba",
    date: "Avril 2023",
    tags: ["Cloud", "Programmation", "DevOps", "Développement Web"]
  },
];

// interface CertificationsProps {}


export function Certifications() {
  return (
    <section id="certifications" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
              Certifications Professionnelles
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Certifications</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Démonstration de mon engagement envers l'apprentissage continu et mon expertise dans divers domaines techniques.
            </p>
          </div>
        </div>

        {/* Filtering Section - UI only, no logic yet */}
        <div className="flex justify-center mt-8">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="cursor-pointer">Tous</Badge>
            <Badge variant="secondary" className="cursor-pointer">Cybersécurité</Badge>
            <Badge variant="secondary" className="cursor-pointer">Cloud</Badge>
            <Badge variant="secondary" className="cursor-pointer">Réseaux</Badge>
            {/* Add more filter badges as needed based on certification tags */}
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          {certifications.map((cert, index) => {
            const certImage = cert.image;
            return (
              <Card
                key={index}
                className="group relative flex flex-col h-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl" // Added 'relative' and 'group'
              >
                <CardHeader className="flex flex-col items-center p-6 pb-0 flex-grow">
                  {certImage && (
                    <div className="relative w-24 h-24 mb-4">
                      <Image
                        src={certImage} // Use the directly imported image
                        alt={cert.title}
                        width={100}
                        height={100}
                        className="rounded-md object-contain"
                      />
                    </div>
                  )}
                  <CardTitle className="text-lg font-semibold text-center mt-2 group-hover:text-primary">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-between p-6 pt-4 flex-grow">
                  <CardDescription className="text-sm text-gray-500 text-center mb-4 dark:text-gray-400">
                    {cert.description}
                  </CardDescription>
                  {cert.tags && cert.tags.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {cert.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-900 transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                  <Link href={cert.link} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full">
                      Voir en détail
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}