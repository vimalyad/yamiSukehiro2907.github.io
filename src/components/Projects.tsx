import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ExternalLink, Github} from "lucide-react";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const projects = [
        {
            period: "May 2026",
            title: "NitroSense Linux",
            tech: "Rust • Linux hwmon • GTK • Polkit • GitHub Releases",
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
            period: "Resume Project",
            title: "Namora Food Delivery Platform",
            tech: "Spring Boot • Kafka • Redis GEO • Eureka • API Gateway • JWT",
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
            period: "Oct 2025 – Nov 2025",
            title: "Studi.io - Real-Time Collaborative Study Platform",
            tech: "TypeScript • React • Spring Boot • Socket.IO • MongoDB • Cloudinary",
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
            period: "May 2026",
            title: "DocBuddy",
            tech: "TypeScript • RAG • Document Uploads • Full Stack AI",
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
            period: "May 2026",
            title: "Anvil - Multi-Writer Relational Database Prototype",
            tech: "Rust • CRDTs • SQL Engine • Distributed Storage",
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

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 50}}
                                animate={isInView ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.6, delay: index * 0.2}}
                            >
                                <Card
                                    className="p-6 h-full flex flex-col hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
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
