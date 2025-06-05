import { Card, CardContent } from '@/components/ui/card'
import { Settings2, Sparkles, Zap } from 'lucide-react'

function WhyDifferent() {
    const features = [
        {
            icon: Sparkles,
            iconColor: "text-yellow-600",
            title: "Built for AI from Day One",
            description: "Vector database, structured data, and AI-ready architecture built in. No retrofitting required."
        },
        {
            icon: Settings2,
            iconColor: "text-slate-600",
            title: "Replaces $3,000+/Month in SaaS Tools",
            description: "One system replaces your CRM, project management, invoicing, communication, and reporting tools."
        },
        {
            icon: Zap,
            iconColor: "text-orange-600",
            title: "Live in 2 Weeks — Yours Forever",
            description: "Fast delivery, no monthly per-user fees, and you own the system outright. Built to evolve with your business."
        }
    ];

    return (
        <section className="py-16 md:py-24 max-width">
            <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why This Tool Is Different</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Not just software — this is the last internal system your business will ever need.
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        <Card 
                            key={index}
                            className="bg-card border border-border text-center p-6 animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="flex flex-col items-center pt-6">
                                <div className="bg-brand-green bg-opacity-20 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                                    <IconComponent className={`h-8 w-8 ${feature.iconColor}`} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </section>
    )
}

export default WhyDifferent; 