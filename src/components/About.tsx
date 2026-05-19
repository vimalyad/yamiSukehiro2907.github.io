import image from "@/assets/photo.jpg";
import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";
import {GitBranch, Rocket, ShieldCheck, Workflow} from "lucide-react";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const highlights = [
        {
            label: "Product Backend",
            value: "0 to 1",
            detail: "APIs, auth, workflows, and iteration loops for real users",
            icon: Rocket,
        },
        {
            label: "System Architecture",
            value: "8 services",
            detail: "Kafka events, Redis GEO, gateway routing, and discovery",
            icon: GitBranch,
        },
        {
            label: "Reliability",
            value: "CI + QA",
            detail: "Playwright automation, sharded runs, and release discipline",
            icon: ShieldCheck,
        },
    ];

    const flow = [
        "Problem",
        "API Boundary",
        "Data Model",
        "Async Flow",
        "Observability",
        "Ship",
    ];

    return (
        <section id="about" className="relative overflow-hidden py-24">
            <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
                <svg className="h-full w-full" viewBox="0 0 1200 520" preserveAspectRatio="none">
                    <path d="M72 420 C260 250 360 455 520 270 S820 120 1110 280" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="10 14"/>
                    <path d="M120 120 H380 V210 H610 V130 H1040" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="8 12"/>
                    <circle cx="380" cy="210" r="12" fill="hsl(var(--primary))"/>
                    <circle cx="610" cy="130" r="12" fill="hsl(var(--primary))"/>
                    <circle cx="880" cy="312" r="12" fill="hsl(var(--primary))"/>
                </svg>
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}
                >
                    <h2 className="mb-12 text-4xl font-bold md:text-5xl">
                        About <span className="text-gradient">Me</span>
                    </h2>

                    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <motion.div
                            initial={{opacity: 0, x: -40}}
                            animate={isInView ? {opacity: 1, x: 0} : {}}
                            transition={{duration: 0.6}}
                            className="relative"
                        >
                            <div className="relative mx-auto max-w-sm rounded-lg border border-primary/20 bg-card/70 p-5 shadow-2xl shadow-primary/10">
                                <div className="absolute -right-4 -top-4 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold text-primary">
                                    backend-first
                                </div>
                                <img
                                    src={image}
                                    alt="Vimal Kumar Yadav"
                                    className="aspect-square w-full rounded-lg border border-border object-cover"
                                />
                                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                                    <div className="rounded-md bg-secondary p-3">
                                        <p className="text-muted-foreground">Focus</p>
                                        <p className="mt-1 font-semibold">Systems</p>
                                    </div>
                                    <div className="rounded-md bg-secondary p-3">
                                        <p className="text-muted-foreground">Mode</p>
                                        <p className="mt-1 font-semibold">Build + Ship</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, x: 40}}
                            animate={isInView ? {opacity: 1, x: 0} : {}}
                            transition={{duration: 0.6, delay: 0.1}}
                        >
                            <div className="mb-8 max-w-3xl space-y-5">
                                <p className="text-xl font-medium leading-relaxed text-muted-foreground">
                                    I build backend-heavy products that move from rough idea to production systems:
                                    secure APIs, service boundaries, event-driven workflows, real-time collaboration,
                                    and automation that removes operational drag.
                                </p>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Recent work spans school-facing platforms, SaaS QA automation at Neeto, Kafka and
                                    Redis-backed delivery architecture, document-grounded AI workflows, and Rust/Linux
                                    systems tooling. I care about clear interfaces, measurable performance, and code
                                    that stays maintainable after launch.
                                </p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-3">
                                {highlights.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <motion.div
                                            key={item.label}
                                            initial={{opacity: 0, y: 20}}
                                            animate={isInView ? {opacity: 1, y: 0} : {}}
                                            transition={{duration: 0.45, delay: 0.15 + index * 0.08}}
                                            className="rounded-lg border border-border bg-card/80 p-4"
                                        >
                                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                                                <Icon size={20}/>
                                            </div>
                                            <p className="text-sm font-semibold text-primary">{item.label}</p>
                                            <p className="mt-2 text-2xl font-bold">{item.value}</p>
                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <div className="mt-6 rounded-lg border border-primary/20 bg-background/70 p-5">
                                <div className="mb-5 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                                        <Workflow size={20}/>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-primary">Build Flow</p>
                                        <p className="text-sm text-muted-foreground">How I usually turn ambiguity into shipped systems</p>
                                    </div>
                                </div>
                                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
                                    {flow.map((step, index) => (
                                        <div key={step} className="relative rounded-md border border-border bg-card px-3 py-3 text-sm font-semibold">
                                            <span className="mr-2 text-primary">{String(index + 1).padStart(2, "0")}</span>
                                            {step}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
