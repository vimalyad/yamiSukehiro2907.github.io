import {motion} from "framer-motion";
import {useState} from "react";
import {Activity, Github, Linkedin, Server, Terminal, Zap} from "lucide-react";
import {Button} from "@/components/ui/button";

const Hero = () => {
    const [activeCommand, setActiveCommand] = useState("whoami");

    const socialLinks = [
        {icon: Github, href: "https://github.com/vimalyad", label: "GitHub"},
        {icon: Linkedin, href: "https://www.linkedin.com/in/vimal-kumar-yadav-58a7a5316/", label: "LinkedIn"},
    ];

    const terminalCommands = [
        {
            command: "whoami",
            label: "Profile",
            output: [
                "Vimal Kumar Yadav",
                "Backend engineer building production systems from 0 to 1.",
                "Focus: microservices, real-time systems, automation, and clean product delivery.",
            ],
        },
        {
            command: "stack --top",
            label: "Stack",
            output: [
                "Java · Spring Boot · Kafka · Redis · PostgreSQL",
                "TypeScript · React · Socket.IO · Playwright",
                "Rust · Linux systems · Docker · GCP · CI/CD",
            ],
        },
        {
            command: "projects --featured",
            label: "Projects",
            output: [
                "NitroSense: Rust/Linux fan and thermal control app.",
                "Namora: 8-service Spring Boot food-delivery platform.",
                "DocBuddy: full-stack RAG document chat workflow.",
            ],
        },
    ];

    const systemSignals = [
        {label: "Microservices", value: "Spring Boot + Kafka", icon: Server},
        {label: "Automation", value: "Playwright + CI", icon: Zap},
        {label: "Systems", value: "Rust + Linux", icon: Activity},
    ];

    const activeTerminal = terminalCommands.find((item) => item.command === activeCommand) ?? terminalCommands[0];

    return (
        <section id="home" className="min-h-screen relative overflow-hidden">
            <div className="container mx-auto flex min-h-screen items-center px-6 py-28">
                <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.72fr_0.28fr]">
                    <motion.div
                        initial={{opacity: 0, y: 32}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="rounded-lg border border-primary/25 bg-card/85 shadow-2xl shadow-primary/10 backdrop-blur"
                    >
                        <div className="flex items-center justify-between border-b border-border px-4 py-3">
                            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                <Terminal size={16} className="text-primary"/>
                                vimal.dev
                            </div>
                            <div className="flex gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80"/>
                                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"/>
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"/>
                            </div>
                        </div>

                        <div className="p-5 md:p-7">
                            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                                        Backend Engineer • Systems Builder • Full Stack Developer
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3 lg:justify-end">
                                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                                        <a href="#projects">View Projects</a>
                                    </Button>
                                </div>
                            </div>

                            <div className="mb-4 flex flex-wrap gap-2">
                                {terminalCommands.map((item) => (
                                    <button
                                        key={item.command}
                                        type="button"
                                        onClick={() => setActiveCommand(item.command)}
                                        className={`rounded-md border px-3 py-2 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                                            activeCommand === item.command
                                                ? "border-primary bg-primary text-primary-foreground"
                                                : "border-border bg-secondary/70 text-muted-foreground hover:border-primary/70 hover:text-foreground"
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>

                            <div className="rounded-md bg-background/80 p-4 font-mono text-sm md:p-5">
                                <div className="mb-3 flex items-center gap-2 text-primary">
                                    <span>$</span>
                                    <motion.span
                                        key={activeTerminal.command}
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{duration: 0.2}}
                                    >
                                        {activeTerminal.command}
                                    </motion.span>
                                    <span className="h-4 w-2 animate-pulse bg-primary"/>
                                </div>
                                <motion.div
                                    key={`${activeTerminal.command}-output`}
                                    initial={{opacity: 0, y: 8}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.25}}
                                    className="space-y-2 text-left"
                                >
                                    {activeTerminal.output.map((line) => (
                                        <p key={line} className="text-muted-foreground">
                                            <span className="mr-2 text-primary/80">&gt;</span>
                                            {line}
                                        </p>
                                    ))}
                                </motion.div>
                            </div>

                            <div className="mt-5 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-xs text-muted-foreground">
                                    Press <span className="text-primary">/</span> or <span className="text-primary">Ctrl K</span> for quick navigation.
                                </p>
                                <div className="flex gap-3">
                                    {socialLinks.map((link) => (
                                        <motion.a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.label}
                                            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                            whileHover={{scale: 1.08}}
                                            whileTap={{scale: 0.95}}
                                        >
                                            <link.icon size={20}/>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 32}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.15}}
                        className="grid gap-4"
                    >
                        {systemSignals.map((signal) => {
                            const Icon = signal.icon;

                            return (
                                <div key={signal.label} className="rounded-lg border border-border bg-card/75 p-5">
                                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                                        <Icon size={22}/>
                                    </div>
                                    <p className="text-sm font-semibold text-primary">{signal.label}</p>
                                    <p className="mt-2 text-xl font-bold">{signal.value}</p>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
