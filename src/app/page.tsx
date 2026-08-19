import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';
import { Certifications } from '@/components/sections/certifications';
import { Timeline } from '@/components/sections/timeline';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Hero />
      <Certifications />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
}
