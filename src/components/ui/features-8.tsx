import { Card, CardContent } from '@/components/ui/card'
import { ClipboardList, Handshake, Megaphone, FileText, PiggyBank, Search } from 'lucide-react'

export function AIAgents() {
    return (
        <section id="ai-agents" className="bg-black py-16 md:py-32">
            <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">AI Agents</h2>
                    <p className="text-zinc-300 text-lg max-w-2xl mx-auto">Having all your data in one simple system enables easy creation of agents.</p>
                </div>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Project Manager Agent */}
                    <Card className="bg-zinc-900 border-zinc-800 flex flex-col items-center text-center">
                        <CardContent className="flex flex-col items-center pt-8 pb-6">
                            <ClipboardList className="size-12 mb-4 text-blue-400" strokeWidth={1.5} />
                            <h2 className="text-xl font-semibold mb-2">Project Manager Agent</h2>
                            <p className="text-zinc-300">Uses knowledge stored from client communications to create tasks, summarise meetings and perform actions in a workspace.</p>
                        </CardContent>
                    </Card>
                    {/* Sales Agent */}
                    <Card className="bg-zinc-900 border-zinc-800 flex flex-col items-center text-center">
                        <CardContent className="flex flex-col items-center pt-8 pb-6">
                            <Handshake className="size-12 mb-4 text-green-400" strokeWidth={1.5} />
                            <h2 className="text-xl font-semibold mb-2">Sales Agent</h2>
                            <p className="text-zinc-300">Uses provided sales training and communications data to assess lead quality, manage and track client sentiment and provide sales feedback to human sales reps.</p>
                        </CardContent>
                    </Card>
                    {/* Social Media Agent */}
                    <Card className="bg-zinc-900 border-zinc-800 flex flex-col items-center text-center">
                        <CardContent className="flex flex-col items-center pt-8 pb-6">
                            <Megaphone className="size-12 mb-4 text-pink-400" strokeWidth={1.5} />
                            <h2 className="text-xl font-semibold mb-2">Social Media Agent</h2>
                            <p className="text-zinc-300">Schedules social media posts based on company operations and provided data.</p>
                        </CardContent>
                    </Card>
                    {/* Estimator Agent */}
                    <Card className="bg-zinc-900 border-zinc-800 flex flex-col items-center text-center">
                        <CardContent className="flex flex-col items-center pt-8 pb-6">
                            <FileText className="size-12 mb-4 text-yellow-400" strokeWidth={1.5} />
                            <h2 className="text-xl font-semibold mb-2">Estimator Agent</h2>
                            <p className="text-zinc-300">Uses client communications and previous quoting data to generate project scope and proposal documents in minutes.</p>
                        </CardContent>
                    </Card>
                    {/* Financial Advisor Agent */}
                    <Card className="bg-zinc-900 border-zinc-800 flex flex-col items-center text-center">
                        <CardContent className="flex flex-col items-center pt-8 pb-6">
                            <PiggyBank className="size-12 mb-4 text-purple-400" strokeWidth={1.5} />
                            <h2 className="text-xl font-semibold mb-2">Financial Advisor Agent</h2>
                            <p className="text-zinc-300">Assesses transaction data and payroll information to make educated financial decisions, attach descriptions to transactions, and more.</p>
                        </CardContent>
                    </Card>
                    {/* Research Agent */}
                    <Card className="bg-zinc-900 border-zinc-800 flex flex-col items-center text-center">
                        <CardContent className="flex flex-col items-center pt-8 pb-6">
                            <Search className="size-12 mb-4 text-cyan-400" strokeWidth={1.5} />
                            <h2 className="text-xl font-semibold mb-2">Research Agent</h2>
                            <p className="text-zinc-300">Research prospects or projects to get deep research data at your fingertips in seconds.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
} 