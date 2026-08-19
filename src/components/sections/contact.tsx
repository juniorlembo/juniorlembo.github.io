import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Globe } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#1a202c]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 items-start">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Me Contacter
            </h2>
            <p className="max-w-[600px] text-gray-400">
              Je suis toujours ouvert à la discussion de nouveaux projets, d'idées créatives ou d'opportunités de faire partie d'une vision ambitieuse.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-400" />
                <a href="mailto:devlembojunior@gmail.com" className="text-gray-300 hover:text-white">
                  devlembojunior@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+228 92419080</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-green-400" />
                <Link href="https://ilemlembo.me" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  ilemlembo.me
                </Link>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/IlemLembo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-7 w-7 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://www.linkedin.com/in/ilemjuniorlembo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-7 w-7 text-gray-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-gray-400">Prénom</Label>
                      <Input id="first-name" placeholder="John" className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-gray-400">Nom</Label>
                      <Input id="last-name" placeholder="Doe" className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-400">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" className="bg-gray-800 border-gray-700 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-400">Message</Label>
                    <Textarea id="message" placeholder="Votre message..." rows={4} className="bg-gray-800 border-gray-700 text-white" />
                  </div>
                  <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">Envoyer le Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
