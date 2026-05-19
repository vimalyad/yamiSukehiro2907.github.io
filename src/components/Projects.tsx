import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef, useState} from "react";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {BrainCircuit, Cpu, DatabaseZap, ExternalLink, Github, Network, RadioTower} from "lucide-react";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const [selectedProjectId, setSelectedProjectId] = useState("namora");

    const projects = [
        {
            id: "nitrosense",
            period: "May 2026",
            title: "NitroSense Linux",
            shortTitle: "NitroSense",
            role: "Linux Systems Node",
            icon: Cpu,
            tech: "Rust • Linux hwmon • GTK • Polkit • GitHub Releases",
            signal: "Rust + hardware control",
            description: [
                "Built a Linux desktop app for monitoring temperatures and controlling fan and power behavior",
                "Integrated hardware-aware flows for Acer Nitro systems with thermal graphs, notifications, and desktop packaging",
                "Published versioned release artifacts with checksums and contributor-facing documentation",
            ],
            links: {
                github: "https://github.com/vimalyad/nitrosense",
            },
        },
        {
            id: "namora",
            period: "Resume Project",
            title: "Namora Food Delivery Platform",
            shortTitle: "Namora",
            role: "Microservices Core",
            icon: Network,
            tech: "Spring Boot • Kafka • Redis GEO • Eureka • API Gateway • JWT",
            signal: "8 services + Kafka events",
            description: [
                "Architected 8 Spring Boot microservices with service discovery and centralized gateway routing",
                "Moved order dispatch to Kafka events so rider assignment failures do not block order confirmation",
                "Modelled rider locations with Redis GEO and load-tested 40 endpoints with JMeter",
            ],
            links: {
                github: "https://github.com/vimalyad/namora-monolith",
            },
        },
        {
            id: "studiio",
            period: "Oct 2025 – Nov 2025",
            title: "Studi.io - Real-Time Collaborative Study Platform",
            shortTitle: "Studi.io",
            role: "Real-Time Collaboration",
            icon: RadioTower,
            tech: "TypeScript • React • Spring Boot • Socket.IO • MongoDB • Cloudinary",
            signal: "Rooms + presence + live chat",
            description: [
                "Built live study rooms with room-scoped broadcasting, chat, presence, and resource sharing",
                "Secured sessions with JWT access/refresh rotation, HTTP-only cookies, OTP, and Socket.IO middleware",
                "Added paginated messaging, upload workflows, Redux Toolkit state, and production deployments",
            ],
            links: {
                github: "https://github.com/vimalyad/studi.io",
                demo: "https://studiio.netlify.app/",
            },
        },
        {
            id: "docbuddy",
            period: "May 2026",
            title: "DocBuddy",
            shortTitle: "DocBuddy",
            role: "AI Workflow",
            icon: BrainCircuit,
            tech: "TypeScript • RAG • Document Uploads • Full Stack AI",
            signal: "Document-grounded answers",
            description: [
                "Created a production-ready document chat application inspired by NotebookLM",
                "Enabled users to upload PDFs, TXTs, and CSVs for grounded, context-aware conversations",
                "Designed the product as a full-stack AI workflow with a polished frontend and API-backed retrieval flow",
            ],
            links: {
                github: "https://github.com/vimalyad/doc-buddy",
                demo: "https://doc-buddy-frontend.vercel.app",
            },
        },
        {
            id: "anvil",
            period: "May 2026",
            title: "Anvil - Multi-Writer Relational Database Prototype",
            shortTitle: "Anvil",
            role: "Distributed Data Layer",
            icon: DatabaseZap,
            tech: "Rust • CRDTs • SQL Engine • Distributed Storage",
            signal: "CRDT sync + SQL surface",
            description: [
                "Built an embedded relational database prototype where peers write locally and converge through CRDT deltas",
                "Designed SQLite-like SQL behavior with cell-level merge metadata, tombstones, uniqueness claims, and FK policy handling",
                "Explored distributed data modelling, conflict resolution, and database internals in Rust",
            ],
            links: {
                github: "https://github.com/vimalyad/udaan-relational-database",
            },
        },
    ];

    const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? projects[0];
    const SelectedIcon = selectedProject.icon;

    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>

                    <div className="mb-12 rounded-lg border border-primary/20 bg-card/70 p-5 shadow-2xl shadow-primary/5 md:p-6">
                        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                                    Interactive System Map
                                </p>
                                <h3 className="mt-2 text-2xl font-bold">
                                    Explore the architecture behind the work
                                </h3>
                            </div>
                            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                                Select a node to inspect how each project maps to backend systems, real-time flows,
                                AI workflows, Linux tooling, or distributed data design.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                            <div className="relative rounded-lg border border-border bg-background/70 p-4">
                                <div className="pointer-events-none absolute inset-0 hidden opacity-50 lg:block">
                                    <svg className="h-full w-full" viewBox="0 0 760 340" preserveAspectRatio="none">
                                        <path d="M380 170 C270 60 180 72 112 92" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="6 8"/>
                                        <path d="M380 170 C255 220 180 245 100 260" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="6 8"/>
                                        <path d="M380 170 C500 70 585 72 648 92" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="6 8"/>
                                        <path d="M380 170 C505 230 595 245 660 260" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="6 8"/>
                                    </svg>
                                </div>

                                <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    <div className="flex min-h-32 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 p-4 text-center sm:col-span-2 lg:col-start-2 lg:row-span-2">
                                        <div>
                                            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                                <Network size={24}/>
                                            </div>
                                            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                                                Systems Lab
                                            </p>
                                            <p className="mt-2 text-lg font-bold">Backend-heavy product engineering</p>
                                            <p className="mt-2 text-xs text-muted-foreground">
                                                APIs, events, rooms, databases, automation, and release-ready tools.
                                            </p>
                                        </div>
                                    </div>

                                    {projects.map((project) => {
                                        const Icon = project.icon;
                                        const isSelected = selectedProjectId === project.id;

                                        return (
                                            <button
                                                key={project.id}
                                                type="button"
                                                onClick={() => setSelectedProjectId(project.id)}
                                                className={`group min-h-32 rounded-lg border p-4 text-left transition-all ${
                                                    isSelected
                                                        ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                                        : "border-border bg-card hover:border-primary/70 hover:bg-secondary/80"
                                                }`}
                                            >
                                                <div className="mb-3 flex items-center justify-between gap-3">
                                                    <div className={`flex h-10 w-10 items-center justify-center rounded-md ${
                                                        isSelected ? "bg-background/20" : "bg-primary/10 text-primary"
                                                    }`}>
                                                        <Icon size={20}/>
                                                    </div>
                                                    <span className={`text-xs font-semibold ${
                                                        isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
                                                    }`}>
                                                        {project.role}
                                                    </span>
                                                </div>
                                                <h4 className="font-bold">{project.shortTitle}</h4>
                                                <p className={`mt-2 text-xs leading-relaxed ${
                                                    isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
                                                }`}>
                                                    {project.signal}
                                                </p>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <motion.div
                                key={selectedProject.id}
                                initial={{opacity: 0, y: 12}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.25}}
                                className="rounded-lg border border-border bg-background/80 p-5"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <SelectedIcon size={24}/>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-primary">{selectedProject.role}</p>
                                        <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                                    </div>
                                </div>

                                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                                    {selectedProject.tech}
                                </p>

                                <ul className="space-y-3">
                                    {selectedProject.description.map((item) => (
                                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"/>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    {selectedProject.links.github && (
                                        <Button variant="outline" size="sm" asChild>
                                            <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer">
                                                <Github size={16} className="mr-2"/>
                                                GitHub
                                            </a>
                                        </Button>
                                    )}
                                    {selectedProject.links.demo && (
                                        <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                                            <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={16} className="mr-2"/>
                                                Demo
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{opacity: 0, y: 50}}
                                animate={isInView ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.6, delay: index * 0.2}}
                            >
                                <Card
                                    className={`p-6 h-full flex flex-col transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20 ${
                                        selectedProjectId === project.id ? "border-primary shadow-lg shadow-primary/10" : ""
                                    }`}
                                >
                                    <p className="text-primary text-sm font-semibold mb-3">{project.period}</p>
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{project.tech}</p>
                                    <ul className="space-y-2 mb-6 flex-1">
                                        {project.description.map((item, i) => (
                                            <li key={i} className="text-muted-foreground text-sm flex items-start">
                                                <span className="text-primary mr-2">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex gap-3">
                                        {project.links.github && (
                                            <Button variant="outline" size="sm" className="flex-1" asChild>
                                                <a href={project.links.github} target="_blank"
                                                   rel="noopener noreferrer">
                                                    <Github size={16} className="mr-2"/>
                                                    GitHub
                                                </a>
                                            </Button>
                                        )}
                                        {project.links.demo && (
                                            <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90" asChild>
                                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink size={16} className="mr-2"/>
                                                    Demo
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
