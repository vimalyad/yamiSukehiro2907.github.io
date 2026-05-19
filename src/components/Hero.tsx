import {motion} from "framer-motion";
import {useState} from "react";
import {Github, Linkedin, Mail, Phone, ChevronDown, Terminal} from "lucide-react";
import {Button} from "@/components/ui/button";
import developerHero from "@/assets/developer-hero.png";

const Hero = () => {
    const [activeCommand, setActiveCommand] = useState("whoami");

    const socialLinks = [
        {icon: Github, href: "https://github.com/vimalyad", label: "GitHub"},
        {icon: Linkedin, href: "https://www.linkedin.com/in/vimal-kumar-yadav-58a7a5316/", label: "LinkedIn"},
        {icon: Mail, href: "mailto:vimalyadavkr001@gmail.com", label: "Email"},
        {icon: Phone, href: "tel:+918604732097", label: "Phone"},
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
        {
            command: "contact --open",
            label: "Contact",
            output: [
                "Email: vimalyadavkr001@gmail.com",
                "GitHub: github.com/vimalyad",
                "Location: Bengaluru, Karnataka",
            ],
        },
    ];

    const activeTerminal = terminalCommands.find((item) => item.command === activeCommand) ?? terminalCommands[0];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="container mx-auto px-6 py-32">
                <div className="grid lg:grid-cols-[1fr_0.95fr] gap-12 items-center">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                    >
                        <p className="text-primary text-sm uppercase tracking-wider mb-4 font-semibold">
                            Backend Engineer • Systems Builder • Full Stack Developer
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Vimal Kumar Yadav
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Backend engineer building production systems from 0 to 1 across microservices,
                            real-time collaboration, event-driven workflows, and automation-heavy product teams.
                        </p>

                        <div className="flex gap-4 mb-8">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                <a href="#projects">View Projects</a>
                            </Button>
                            <Button size="lg" variant="outline"
                                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                                <a href="tel:+918604732097">Contact Me</a>
                            </Button>
                        </div>

                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.95}}
                                >
                                    <link.icon size={20}/>
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            initial={{opacity: 0, y: 24}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.25}}
                            className="mt-10 max-w-2xl rounded-lg border border-primary/25 bg-card/80 shadow-2xl shadow-primary/10 backdrop-blur"
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

                            <div className="p-4">
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {terminalCommands.map((item) => (
                                        <button
                                            key={item.command}
                                            type="button"
                                            onClick={() => setActiveCommand(item.command)}
                                            className={`rounded-md border px-3 py-2 text-xs font-semibold transition-all ${
                                                activeCommand === item.command
                                                    ? "border-primary bg-primary text-primary-foreground"
                                                    : "border-border bg-secondary/70 text-muted-foreground hover:border-primary/70 hover:text-foreground"
                                            }`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>

                                <div className="rounded-md bg-background/80 p-4 font-mono text-sm">
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
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                        className="relative"
                    >
                        <img
                            src={developerHero}
                            alt="Developer workstation with code, architecture diagrams, and backend systems"
                            className="w-full h-auto rounded-lg"
                        />
                    </motion.div>
                </div>
            </div>

            <motion.a
                href="#about"
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-primary cursor-pointer"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 1, duration: 0.6, repeat: Infinity, repeatType: "reverse"}}
            >
                <span className="text-sm mb-2">Scroll</span>
                <ChevronDown size={24}/>
            </motion.a>
        </section>
    );
};

export default Hero;
