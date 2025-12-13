'use client';

import Link from 'next/link';
import { Download, Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '/articles', label: 'Articles' },
  { href: '#arsenal', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];
import logo from '@/public/logo.gif';
import Image from 'next/image';

function CVPDFView() {
    const pdfUrl = "/cv.pdf";
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm">Download CV</Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-5/6 flex flex-col">
                <DialogHeader>
                    <DialogTitle>Curriculum Vitae</DialogTitle>
                    <DialogDescription>
                        Aperçu de mon CV. Vous pouvez le télécharger en cliquant sur le bouton ci-dessous.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex-grow border rounded-md overflow-hidden">
                    <iframe src={pdfUrl} width="100%" height="100%" />
                </div>
                <DialogFooter>
                    <Button asChild>
                        <Link href={pdfUrl} download="AlexMercer-CV.pdf">
                            <Download className="mr-2 h-4 w-4" />
                            Télécharger
                        </Link>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const Logo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#FF7A00" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 font-semibold">
          {/* <Logo /> */}
          <Image src={logo} alt="Ilem LEMBO" width={40} height={40} className='border-r-2 border-primary pr-2' />
          <span className="font-headline text-xl font-bold tracking-wider">Ilem_LEMBO</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-code uppercase tracking-widest transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <CVPDFView />
          <ThemeSwitcher />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeSwitcher />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 font-semibold" onClick={() => setIsOpen(false)}>
                   <Logo />
                  <span className="font-headline text-lg">ALEX_MERCER</span>
                </Link>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                   <Dialog>
                      <DialogTrigger asChild>
                          <Button size="lg" className="mt-4">Download CV</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl h-5/6 flex flex-col">
                          <DialogHeader>
                              <DialogTitle>Curriculum Vitae</DialogTitle>
                              <DialogDescription>
                                  Aperçu de mon CV. Vous pouvez le télécharger en cliquant sur le bouton ci-dessous.
                              </DialogDescription>
                          </DialogHeader>
                          <div className="flex-grow border rounded-md overflow-hidden">
                              <iframe src="/cv.pdf" width="100%" height="100%" />
                          </div>
                          <DialogFooter>
                              <Button asChild>
                                  <Link href="/cv.pdf" download="AlexMercer-CV.pdf">
                                      <Download className="mr-2 h-4 w-4" />
                                      Télécharger
                                  </Link>
                              </Button>
                          </DialogFooter>
                      </DialogContent>
                  </Dialog>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
