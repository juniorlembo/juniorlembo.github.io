import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
// import from public assets
import picture from '@/public/picture.jpg';

export function Hero() {
  return (
    <section id="home" className="w-full pt-24 md:pt-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className='w-100 h-50 rounded-full overflow-hidden shadow-lg border-4 border-primary'>
             <Image
                src={picture}
                alt="Ilem LEMBO"
                width={250}
                height={250}
                className="object-cover"
                data-ai-hint="man portrait"
              />
          </div>
          <div className="space-y-4">
            <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none">
              Ilem LEMBO
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto">
              Network Security Officer & Cybersecurity Analyst
            </p>
          </div>
          <Badge variant="outline" className="py-2 px-4 rounded-full border-primary/50 text-primary font-code text-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            AVAILABLE FOR HIRE
          </Badge>
          <p className="max-w-[600px] text-muted-foreground">
            Safeguarding digital infrastructures through proactive threat hunting and robust architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
