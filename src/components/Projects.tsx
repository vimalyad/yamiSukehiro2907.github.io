import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef, useState} from "react";
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
    const nodePositions = [
        "lg:left-[8%] lg:top-[12%]",
        "lg:left-[6%] lg:bottom-[16%]",
        "lg:left-1/2 lg:top-[6%] lg:-translate-x-1/2",
        "lg:right-[8%] lg:top-[12%]",
        "lg:right-[6%] lg:bottom-[16%]",
    ];

    return (
        <section id="projects" className="py-24 overflow-hidden">
            <div className="px-6 lg:px-10">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>

                    <div className="mb-8 flex max-w-5xl flex-col gap-3">
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                            Interactive System Map
                        </p>
                        <h3 className="text-2xl font-bold md:text-3xl">
                            A centered view of the systems behind the work
                        </h3>
                    </div>

                    <div className="relative -mx-6 border-y border-border bg-card/35 px-6 py-8 lg:-mx-10 lg:px-10">
                        <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[1fr_0.78fr]">
                            <div className="relative min-h-[34rem] overflow-hidden rounded-lg border border-border bg-background/70 p-5">
                                <div className="pointer-events-none absolute inset-0 hidden lg:block">
                                    <svg className="h-full w-full" viewBox="0 0 1000 560" preserveAspectRatio="none">
                                        <path d="M500 280 L190 130" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="8 10" opacity="0.45"/>
                                        <path d="M500 280 L170 420" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="8 10" opacity="0.45"/>
                                        <path d="M500 280 L500 95" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="8 10" opacity="0.45"/>
                                        <path d="M500 280 L810 130" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="8 10" opacity="0.45"/>
                                        <path d="M500 280 L830 420" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="8 10" opacity="0.45"/>
                                    </svg>
                                </div>

                                <div className="relative z-10 flex flex-col gap-4 lg:block lg:h-[30rem]">
                                    <div className="mx-auto flex min-h-44 w-full max-w-sm items-center justify-center rounded-lg border border-primary/40 bg-primary/10 p-6 text-center shadow-2xl shadow-primary/10 lg:absolute lg:left-1/2 lg:top-1/2 lg:min-h-52 lg:-translate-x-1/2 lg:-translate-y-1/2">
                                        <div>
                                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                                <Network size={26}/>
                                            </div>
                                            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                                                Systems Lab
                                            </p>
                                            <p className="mt-2 text-2xl font-bold">Backend-heavy product engineering</p>
                                        </div>
                                    </div>

                                    {projects.map((project, index) => {
                                        const Icon = project.icon;
                                        const isSelected = selectedProjectId === project.id;

                                        return (
                                            <button
                                                key={project.id}
                                                type="button"
                                                onClick={() => setSelectedProjectId(project.id)}
                                                className={`group rounded-lg border p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:absolute lg:w-56 ${nodePositions[index]} ${
                                                    isSelected
                                                        ? "border-primary bg-primary text-primary-foreground shadow-xl shadow-primary/20"
                                                        : "border-border bg-card/95 hover:border-primary/70 hover:bg-secondary"
                                                }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md ${
                                                        isSelected ? "bg-background/20" : "bg-primary/10 text-primary"
                                                    }`}>
                                                        <Icon size={20}/>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold">{project.shortTitle}</h4>
                                                        <p className={`mt-1 text-xs ${
                                                            isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
                                                        }`}>
                                                            {project.signal}
                                                        </p>
                                                    </div>
                                                </div>
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
                                className="rounded-lg border border-primary/20 bg-background/80 p-6 xl:self-center"
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

                                <p className="mb-2 text-sm font-semibold text-primary">
                                    {selectedProject.period}
                                </p>
                                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
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
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
