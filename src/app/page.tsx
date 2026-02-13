import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Articles } from '@/components/sections/articles';
import { Contact } from '@/components/sections/contact';
import { SecureChannel } from '@/components/sections/secure-channel';
import { Certifications } from '@/components/sections/certifications';

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32">
      <Hero />
      <Projects />
      <SecureChannel />
      <Stats />
      <Skills />
      <Certifications />
      <Articles />
      <Contact />
    </div>
  );
}