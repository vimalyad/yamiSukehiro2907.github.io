import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";
import {BrainCircuit, Cloud, Code2, Database, GitBranch, MonitorSmartphone, Server, ShieldCheck} from "lucide-react";

const mapWidth = 640;
const mapHeight = 520;
const centerX = mapWidth / 2;
const centerY = mapHeight / 2;
const skillNodeHeight = 48;
const graphMargin = 18;
const nodeGap = 14;

const getSkillNodeWidth = (skill: string) => {
    const baseWidth = skill.length * 7.8 + 42;
    return Math.min(Math.max(baseWidth, 104), 176);
};

type SkillCategory = {
    title: string;
    icon: typeof Code2;
    skills: string[];
};

type SkillNodeLayout = {
    skill: string;
    width: number;
    height: number;
    x: number;
    y: number;
};

const getPositions = (count: number, radius: number, startAngle: number) =>
    Array.from({length: count}, (_, index) => {
        const angle = startAngle + (index * 2 * Math.PI) / count;
        return {
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
        };
    });

const isInsideBounds = (nodes: SkillNodeLayout[]) =>
    nodes.every((node) => (
        node.x - node.width / 2 >= graphMargin &&
        node.x + node.width / 2 <= mapWidth - graphMargin &&
        node.y - node.height / 2 >= graphMargin &&
        node.y + node.height / 2 <= mapHeight - graphMargin
    ));

const hasOverlap = (nodes: SkillNodeLayout[]) => {
    for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
            const first = nodes[i];
            const second = nodes[j];
            const overlapsX = Math.abs(first.x - second.x) < (first.width + second.width) / 2 + nodeGap;
            const overlapsY = Math.abs(first.y - second.y) < (first.height + second.height) / 2 + nodeGap;

            if (overlapsX && overlapsY) {
                return true;
            }
        }
    }

    return false;
};

const getLayoutPenalty = (nodes: SkillNodeLayout[]) => {
    const overlapPenalty = nodes.reduce((penalty, first, firstIndex) => {
        const pairPenalty = nodes.slice(firstIndex + 1).reduce((total, second) => {
            const overlapX = Math.max(0, (first.width + second.width) / 2 + nodeGap - Math.abs(first.x - second.x));
            const overlapY = Math.max(0, (first.height + second.height) / 2 + nodeGap - Math.abs(first.y - second.y));
            return total + overlapX * overlapY;
        }, 0);

        return penalty + pairPenalty;
    }, 0);

    const boundsPenalty = nodes.reduce((penalty, node) => (
        penalty +
        Math.max(0, graphMargin - (node.x - node.width / 2)) +
        Math.max(0, node.x + node.width / 2 - (mapWidth - graphMargin)) +
        Math.max(0, graphMargin - (node.y - node.height / 2)) +
        Math.max(0, node.y + node.height / 2 - (mapHeight - graphMargin))
    ), 0);

    return overlapPenalty + boundsPenalty * 1000;
};

const buildSkillLayout = (skills: string[]) => {
    const nodeSizes = skills.map((skill) => ({
        skill,
        width: getSkillNodeWidth(skill),
        height: skillNodeHeight,
    }));
    const step = (2 * Math.PI) / skills.length;
    const rotations = Array.from({length: 16}, (_, index) => -Math.PI / 2 + (index * step) / 16);
    let bestLayout: SkillNodeLayout[] | null = null;
    let bestPenalty = Number.POSITIVE_INFINITY;

    for (let radius = 150; radius <= 238; radius += 4) {
        for (const rotation of rotations) {
            const positions = getPositions(skills.length, radius, rotation);
            const layout = nodeSizes.map((node, index) => ({
                ...node,
                x: positions[index].x,
                y: positions[index].y,
            }));

            if (isInsideBounds(layout) && !hasOverlap(layout)) {
                return layout;
            }

            const penalty = getLayoutPenalty(layout);
            if (penalty < bestPenalty) {
                bestLayout = layout;
                bestPenalty = penalty;
            }
        }
    }

    return bestLayout ?? [];
};

const SkillNetwork = ({category}: {category: SkillCategory}) => {
    const Icon = category.icon;
    const nodes = buildSkillLayout(category.skills);

    return (
        <div className="relative z-10 flex flex-col gap-4 lg:block lg:h-[30rem]">
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
                <svg className="h-full w-full overflow-visible" viewBox={`0 0 ${mapWidth} ${mapHeight}`} preserveAspectRatio="none">
                    {nodes.map((node) => (
                        <line
                            key={node.skill}
                            x1={centerX}
                            y1={centerY}
                            x2={node.x}
                            y2={node.y}
                            stroke="hsl(var(--primary))"
                            strokeWidth="1.6"
                            strokeDasharray="6 10"
                            opacity="0.42"
                        />
                    ))}
                </svg>
            </div>

            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-primary bg-primary text-center text-primary-foreground shadow-2xl shadow-primary/30 lg:absolute lg:left-1/2 lg:top-1/2 lg:z-10 lg:-translate-x-1/2 lg:-translate-y-1/2">
                <div>
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-background/20 text-primary-foreground">
                        <Icon size={22}/>
                    </div>
                    <p className="px-3 text-lg font-bold leading-tight">{category.title}</p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 lg:block">
                {nodes.map((node) => (
                    <div
                        key={node.skill}
                        style={{
                            left: `${(node.x / mapWidth) * 100}%`,
                            top: `${(node.y / mapHeight) * 100}%`,
                            width: node.width,
                            height: node.height,
                            transform: "translate(-50%, -50%)",
                        }}
                        className="overflow-hidden rounded-full border border-border bg-card px-3 py-2 text-center text-xs font-semibold leading-tight text-muted-foreground shadow-sm transition-colors hover:border-primary/70 hover:text-foreground lg:absolute lg:flex lg:items-center lg:justify-center"
                    >
                        <span className="max-w-full whitespace-normal break-words">{node.skill}</span>
                    </div>
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
                                    className="relative min-h-[34rem] overflow-hidden rounded-lg border border-border bg-background/70 p-5"
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
