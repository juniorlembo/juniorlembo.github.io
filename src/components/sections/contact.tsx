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
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
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
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I will get back to you shortly.',
    });
    form.reset();
  }

  return (
    <section id="contact" className="w-full pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
                    <span className="text-primary mr-3">04.</span>Initiate Handshake
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Currently looking for new opportunities in Network Security Architecture and Penetration Testing.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-base/relaxed">
                Whether you have a question, a project proposal, or just want to connect, feel free to send a message. I'm always open to discussing new challenges and collaborations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="font-code text-sm">alex.mercer@email.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-code text-sm">+1 (555) 123-4567</span>
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
                    <FormLabel className="font-code uppercase text-xs">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-input border-border/50" />
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
                      <Input type="email" placeholder="Your Email" {...field} className="bg-input border-border/50" />
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
                      <Textarea placeholder="Your message..." className="min-h-[120px] bg-input border-border/50" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90">Send Encrypted Message</Button>
            </form>
          </Form>
        </div>
        </div>
      </div>
    </section>
  );
}
