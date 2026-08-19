import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Image imports
import fortinet from "@/public/fortinet-fortigate-7-4-administrator.png";
import lfcs from "@/public/lfcs-linux-foundation-certified-systems-administrator.2.png";
import kcna from "@/public/kcna-kubernetes-and-cloud-native-associate.png";
import securityPlus from "@/public/comptia-security-ce-certification.png";
import cct from "@/public/cyber-threat-management.png"; // Re-using image for CCT

interface Certification {
  title: string;
  image: any;
  link: string;
}

const certifications: Certification[] = [
  {
    title: "Administrateur Système Certifié Linux Foundation (LFCSA)",
    image: lfcs,
    link: "#",
  },
  {
    title: "CompTIA Security+",
    image: securityPlus,
    link: "#",
  },
  {
    title: "Administrateur Certifié Fortigate",
    image: fortinet,
    link: "#",
  },
  {
    title: "Associé Kubernetes et Cloud Native (KCNA)",
    image: kcna,
    link: "#",
  },
  {
    title: "Technicien en Cybersécurité Certifié (CCT) par EC-Council",
    image: cct,
    link: "#",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Certifications
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Expertise Vérifiée
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Une vitrine de mes certifications professionnelles et de mon engagement envers l'apprentissage continu.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl justify-items-center gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          {certifications.map((cert, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full w-full max-w-[200px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-gray-900 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-50"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={100}
                      height={100}
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{cert.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  );
}
