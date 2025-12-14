import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, ShieldCheck, Bug, CloudCog, GitBranch, Shield, Server, MonitorCheck } from 'lucide-react';

const skillsData = {
  languages: ['Python', 'Go', 'JavaScript', 'TypeScript', 'SQL', 'Bash', 'Powershell',],
  pentesting: ['Metasploit', 'Burp Suite', 'Nmap', 'Wireshark', 'Kali Linux', 'Ligolo-ng'],
  frameworks: ['React', 'Next.js', 'Node.js', 'Django', 'FastAPI'],
  'cloud & devops': ['AWS', 'GCP', 'Azure', 'Docker', 'Digital Ocean', 'Contabo', 'Kubernetes', 'Terraform', 'Ansible', 'Git'],
  'threat modeling': ['STRIDE', 'DREAD', 'PASTA', 'Attack Trees'],
  'av & security': ['CrowdStrike', 'Splunk', 'Suricata', 'OSSEC', 'Wazuh'],
  'monitoring': ['Datadog', 'New Relic', 'Sentry', 'Grafana'],
  'networking': ['TCP/IP', 'DNS', 'HTTP/S', 'BGP', 'VPNs', 'Firewalls', 'Fortinet', 'Cisco', 'Mikrotik'],
};

const skillCategories = [
  { name: 'Languages', key: 'languages', icon: <Code /> },
  { name: 'Pentesting', key: 'pentesting', icon: <Bug /> },
  { name: 'Frameworks', key: 'frameworks', icon: <GitBranch /> },
  { name: 'Cloud & DevOps', key: 'cloud & devops', icon: <CloudCog /> },
  { name: 'Threat Modeling', key: 'threat modeling', icon: <ShieldCheck /> },
  { name: 'AV & Security', key: 'av & security', icon: <Shield /> },
  { name: 'Monitoring', key: 'monitoring', icon: <MonitorCheck /> },
  { name: 'Networking', key: 'networking', icon: <Server /> },
];

export function Skills() {
  return (
    <section id="arsenal" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            <span className="text-primary mr-3">01.</span>Technical Arsenal
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Technologies, languages, and tools I use to build and secure systems.
          </p>
        </div>
        
        <div className="py-12">
           <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 bg-transparent p-0 gap-2">
              {skillCategories.map(category => (
                <TabsTrigger key={category.key} value={category.key} className="bg-card border-border/50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2">
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map(category => (
               <TabsContent key={category.key} value={category.key}>
                <Card className="bg-card mt-4 border-border/50">
                  <CardContent className="flex flex-wrap gap-2 p-6">
                    {(skillsData[category.key as keyof typeof skillsData] || []).map((skill) => <Badge key={skill} variant="secondary" className="font-code text-base py-1 px-3">{skill}</Badge>)}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
