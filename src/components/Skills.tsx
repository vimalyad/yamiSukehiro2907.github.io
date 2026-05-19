import {motion, useMotionValue, useTransform} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";
import {BrainCircuit, Cloud, Code2, Database, GitBranch, MonitorSmartphone, Server, ShieldCheck} from "lucide-react";

const mapWidth = 640;
const mapHeight = 360;
const centerX = mapWidth / 2;
const centerY = mapHeight / 2;
const skillNodeWidth = 132;
const skillNodeHeight = 42;

const getCirclePositions = (count: number, radius: number) =>
    Array.from({length: count}, (_, index) => {
        const angle = -Math.PI / 2 + (index * 2 * Math.PI) / count;

        return {
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
        };
    });

const useNodeMotion = () => ({
    x: useMotionValue(0),
    y: useMotionValue(0),
});

type NodeMotion = ReturnType<typeof useNodeMotion>;

const useNodePoint = (
    node: NodeMotion,
    position: {x: number; y: number},
    width: number,
    height: number,
) => ({
    x: useTransform(node.x, (value) => position.x + width / 2 + value),
    y: useTransform(node.y, (value) => position.y + height / 2 + value),
});

type SkillCategory = {
    title: string;
    icon: typeof Code2;
    skills: string[];
};

const SkillNetwork = ({category}: {category: SkillCategory}) => {
    const Icon = category.icon;
    const constraintsRef = useRef<HTMLDivElement>(null);
    const positions = getCirclePositions(category.skills.length, 134).map((position) => ({
        x: position.x - skillNodeWidth / 2,
        y: position.y - skillNodeHeight / 2,
    }));
    const nodes = [
        useNodeMotion(),
        useNodeMotion(),
        useNodeMotion(),
        useNodeMotion(),
        useNodeMotion(),
        useNodeMotion(),
        useNodeMotion(),
        useNodeMotion(),
    ];
    const fallbackPosition = {x: centerX - skillNodeWidth / 2, y: centerY - skillNodeHeight / 2};
    const edgePoints = [
        useNodePoint(nodes[0], positions[0] ?? fallbackPosition, skillNodeWidth, skillNodeHeight),
        useNodePoint(nodes[1], positions[1] ?? fallbackPosition, skillNodeWidth, skillNodeHeight),
        useNodePoint(nodes[2], positions[2] ?? fallbackPosition, skillNodeWidth, skillNodeHeight),
        useNodePoint(nodes[3], positions[3] ?? fallbackPosition, skillNodeWidth, skillNodeHeight),
        useNodePoint(nodes[4], positions[4] ?? fallbackPosition, skillNodeWidth, skillNodeHeight),
        useNodePoint(nodes[5], positions[5] ?? fallbackPosition, skillNodeWidth, skillNodeHeight),
        useNodePoint(nodes[6], positions[6] ?? fallbackPosition, skillNodeWidth, skillNodeHeight),
        useNodePoint(nodes[7], positions[7] ?? fallbackPosition, skillNodeWidth, skillNodeHeight),
    ];

    return (
        <div ref={constraintsRef} className="relative z-10 flex flex-col gap-4 lg:block lg:h-[21rem]">
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
                <motion.svg className="h-full w-full overflow-visible" viewBox={`0 0 ${mapWidth} ${mapHeight}`} preserveAspectRatio="none">
                    <circle cx={centerX} cy={centerY} r="134" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="7 12" fill="none" opacity="0.26"/>
                    {category.skills.map((skill, skillIndex) => (
                        <motion.line
                            key={skill}
                            x1={centerX}
                            y1={centerY}
                            x2={edgePoints[skillIndex].x}
                            y2={edgePoints[skillIndex].y}
                            stroke="hsl(var(--primary))"
                            strokeWidth="1.6"
                            strokeDasharray="6 10"
                            opacity="0.42"
                        />
                    ))}
                </motion.svg>
            </div>

            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-center shadow-xl shadow-primary/10 lg:absolute lg:left-1/2 lg:top-1/2 lg:z-10 lg:-translate-x-1/2 lg:-translate-y-1/2">
                <div>
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Icon size={22}/>
                    </div>
                    <p className="px-3 text-lg font-bold leading-tight">{category.title}</p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 lg:block">
                {category.skills.map((skill, skillIndex) => (
                    <motion.div
                        key={skill}
                        drag
                        dragMomentum={false}
                        dragElastic={0.08}
                        dragConstraints={constraintsRef}
                        style={{
                            x: nodes[skillIndex].x,
                            y: nodes[skillIndex].y,
                            left: positions[skillIndex].x,
                            top: positions[skillIndex].y,
                            width: skillNodeWidth,
                            height: skillNodeHeight,
                        }}
                        whileDrag={{scale: 1.05, zIndex: 20}}
                        className="cursor-grab rounded-full border border-border bg-card px-3 py-2 text-center text-xs font-semibold text-muted-foreground shadow-sm transition-colors hover:border-primary/70 hover:text-foreground active:cursor-grabbing lg:absolute lg:flex lg:items-center lg:justify-center"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const skillCategories: SkillCategory[] = [
        {
            title: "Programming",
            icon: Code2,
            skills: ["Java", "TypeScript", "JavaScript", "Python", "Rust", "C++"],
        },
        {
            title: "Backend",
            icon: Server,
            skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Node.js", "Express.js", "REST APIs"],
        },
        {
            title: "Frontend",
            icon: MonitorSmartphone,
            skills: ["React", "Next.js", "Redux Toolkit", "React Router", "Tailwind CSS", "HTML", "CSS"],
        },
        {
            title: "Databases",
            icon: Database,
            skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Redis GEO"],
        },
        {
            title: "Distributed Systems",
            icon: GitBranch,
            skills: ["Kafka", "Socket.IO", "WebSocket", "JWT Auth", "Refresh Tokens", "Microservices"],
        },
        {
            title: "Testing",
            icon: ShieldCheck,
            skills: ["Playwright", "TS Automation", "JMeter", "Postman", "CI/CD", "GitHub Actions"],
        },
        {
            title: "Cloud",
            icon: Cloud,
            skills: ["Docker", "GCP", "Render", "Netlify", "MongoDB Atlas", "Git", "Maven"],
        },
        {
            title: "Concepts",
            icon: BrainCircuit,
            skills: ["System Design", "OOP", "DSA", "DBMS", "Operating Systems", "Networks", "RAG"],
        },
    ];

    return (
        <section id="skills" className="relative overflow-hidden py-24 bg-card/50">
            <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
                <svg className="h-full w-full" viewBox="0 0 1400 900" preserveAspectRatio="none">
                    <path d="M110 170 H370 V300 H620 V210 H890 V340 H1250" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="10 16"/>
                    <path d="M160 710 C340 530 485 760 680 570 S980 440 1240 620" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="9 15"/>
                    <circle cx="370" cy="300" r="10" fill="hsl(var(--primary))"/>
                    <circle cx="620" cy="210" r="10" fill="hsl(var(--primary))"/>
                    <circle cx="890" cy="340" r="10" fill="hsl(var(--primary))"/>
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
                        Technical <span className="text-gradient">Skills</span>
                    </h2>

                    <div className="grid gap-8 xl:grid-cols-2">
                        {skillCategories.map((category, index) => {
                            return (
                                <motion.div
                                    key={category.title}
                                    initial={{opacity: 0, y: 30}}
                                    animate={isInView ? {opacity: 1, y: 0} : {}}
                                    transition={{duration: 0.6, delay: index * 0.07}}
                                    className="relative min-h-[24rem] overflow-hidden rounded-lg border border-border bg-background/70 p-5"
                                >
                                    <SkillNetwork category={category}/>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
