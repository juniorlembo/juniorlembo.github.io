const stats = [
    { value: '3+', label: 'Years of Experience' },
    { value: '10+', 'label': 'Projects Finished' },
    { value: '99.9%', 'label': 'Uptime' }
];


export function Stats() {
    return (
        <section id="stats" className="w-full">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border/50 border border-border/50 rounded-lg overflow-hidden">
                    {stats.map((stat) => (
                        <div key={stat.label} className="p-8 bg-card text-center">
                            <p className="text-4xl md:text-5xl font-bold font-headline text-primary">{stat.value}</p>
                            <p className="text-sm font-code text-muted-foreground uppercase tracking-widest mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}