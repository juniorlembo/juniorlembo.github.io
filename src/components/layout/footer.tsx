import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-transparent mt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 md:px-6">
        <div className='text-center md:text-left'>
          <p className="font-headline text-lg font-bold">Ilem LEMBO</p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-6">
          {/* Make it open in new tab with about and aria-label for accessibility */}
          <Link href="https://github.com/IlemLembo" about='Ilem LEMBO GitHub Profile'  aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          {/* <Link href="#" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link> */}
          <Link href="https://www.linkedin.com/in/ilemjuniorlembo/" about='Ilem LEMBO LinkedIn Profile' aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
