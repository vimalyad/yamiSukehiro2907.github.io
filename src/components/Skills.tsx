import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";
import {skillCategories, type SkillCategory} from "@/data/skills";
import {buildCircularNodeLayout} from "@/lib/graph-layout";

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

const buildSkillLayout = (skills: string[]) => {
    const nodes = skills.map((skill) => ({
        id: skill,
        width: getSkillNodeWidth(skill),
        height: skillNodeHeight,
    }));

    return buildCircularNodeLayout(nodes, {
        width: mapWidth,
        height: mapHeight,
        centerX,
        centerY,
        minRadius: 150,
        maxRadius: 238,
        radiusStep: 4,
        margin: graphMargin,
        gap: nodeGap,
    });
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
                            key={node.id}
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
                        key={node.id}
                        style={{
                            left: `${(node.x / mapWidth) * 100}%`,
                            top: `${(node.y / mapHeight) * 100}%`,
                            width: node.width,
                            height: node.height,
                            transform: "translate(-50%, -50%)",
                        }}
                        className="overflow-hidden rounded-full border border-border bg-card px-3 py-2 text-center text-xs font-semibold leading-tight text-muted-foreground shadow-sm transition-colors hover:border-primary/70 hover:text-foreground lg:absolute lg:flex lg:items-center lg:justify-center"
                    >
                        <span className="max-w-full whitespace-normal break-words">{node.id}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

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
