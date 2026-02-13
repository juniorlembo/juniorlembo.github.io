'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères.' }),
  email: z.string().email({ message: 'Veuillez entrer un email valide.' }),
  message: z.string().min(10, { message: 'Le message doit contenir au moins 10 caractères.' }),
});

export function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message Envoyé!',
      description: 'Merci de m\'avoir contacté. Je vous répondrai dans les plus brefs délais.',
    });
    form.reset();
  }

  return (
    <section id="contact" className="w-full pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
                    <span className="text-primary mr-3">04.</span>Initier la Communication
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Actuellement à la recherche de nouvelles opportunités freelance dans le Développement Web, le DevSecOps, la Sécurité Réseau et Cloud, les Tests d'Intrusion.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-base/relaxed">
                Que vous ayez une question, une proposition de projet, ou que vous souhaitiez simplement échanger, n'hésitez pas à m'envoyer un message. Je suis toujours ouvert à discuter de nouveaux défis et collaborations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="font-code text-sm">
                      <a href="mailto:devlembojunior@gmail.com" className="hover:underline">
                      devlembojunior@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-code text-sm">
                      <a href="tel:+22892419080" className="hover:underline">
                      + (228) 92 41 90 80</a>
                    </span>
                  </div>
                </div>
            </div>
          <div className="mx-auto w-full max-w-md">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" netlify="true">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-code uppercase text-xs">Nom</FormLabel>
                    <FormControl>
                      <Input placeholder="Votre Nom" {...field} className="bg-input border-border/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-code uppercase text-xs">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Votre Email" {...field} className="bg-input border-border/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-code uppercase text-xs">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Votre message..." className="min-h-[120px] bg-input border-border/50" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90">Envoyer Message Crypté</Button>
            </form>
          </Form>
        </div>
        </div>
      </div>
    </section>
  );
}
