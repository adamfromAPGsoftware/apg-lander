import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'

function WhyDifferent() {
    return (
        <section className="py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-5xl font-bold mb-4">Why This Tool Is Different</h2>
                    <p className="mt-4 text-xl text-gray-300">Not just software — this is the last internal system your business will ever need.</p>
                </div>
                <div className="mx-auto mt-8 flex flex-col md:flex-row gap-10 md:mt-16 max-w-5xl justify-center items-stretch">
                    <Card className="flex-1 group border-0 bg-[#222] shadow-none flex flex-col items-center rounded-2xl p-8">
                        <CardHeader className="pb-3 flex flex-col items-center">
                            <div className="mb-8">
                                <CardDecorator>
                                    <Sparkles className="h-10 w-10 text-brand-green" />
                                </CardDecorator>
                            </div>
                            <h3 className="mt-2 font-bold text-2xl md:text-3xl text-center">Built for AI from Day One</h3>
                        </CardHeader>
                        <CardContent />
                    </Card>
                    <Card className="flex-1 group border-0 bg-[#222] shadow-none flex flex-col items-center rounded-2xl p-8">
                        <CardHeader className="pb-3 flex flex-col items-center">
                            <div className="mb-8">
                                <CardDecorator>
                                    <Settings2 className="h-10 w-10 text-brand-green" />
                                </CardDecorator>
                            </div>
                            <h3 className="mt-2 font-bold text-2xl md:text-3xl text-center">Replaces $3,000+/Month in SaaS Tools</h3>
                        </CardHeader>
                        <CardContent />
                    </Card>
                    <Card className="flex-1 group border-0 bg-[#222] shadow-none flex flex-col items-center rounded-2xl p-8">
                        <CardHeader className="pb-3 flex flex-col items-center">
                            <div className="mb-8">
                                <CardDecorator>
                                    <Zap className="h-10 w-10 text-brand-green" />
                                </CardDecorator>
                            </div>
                            <h3 className="mt-2 font-bold text-2xl md:text-3xl text-center">Live in 2 Weeks — Yours Forever</h3>
                        </CardHeader>
                        <CardContent />
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 [--border:rgba(255,255,255,0.15)] dark:[--border:rgba(255,255,255,0.25)] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"/>
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l">{children}</div>
    </div>
)

export default WhyDifferent; 