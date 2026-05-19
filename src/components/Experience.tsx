import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";
import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Briefcase, Flame, Medal, PackageCheck, Rocket, School, Trophy, Workflow} from "lucide-react";

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const milestones = [
        {
            period: "Feb 2026 – Apr 2026",
            title: "SDE Intern",
            company: "Neeto (BigBinary)",
            location: "Remote",
            type: "Automation Milestone",
            icon: Briefcase,
            responsibilities: [
                "Expanded automated test coverage across 4 SaaS products using Playwright and TypeScript",
                "Replaced manual QA on critical user journeys with reliable, repeatable browser automation",
                "Built NeetoCI pipelines with 4-shard parallel Playwright runs, PR-label triggers, and GitHub/Slack notifications",
            ],
        },
        {
            period: "Apr 2025 – Sept 2025",
            title: "Founding Backend Engineer",
            company: "Bricks Education",
            location: "Pilani / Remote",
            type: "0 to 1 Product Milestone",
            icon: Rocket,
            responsibilities: [
                "Owned backend development through 3 product pivots: LMS, social platform, and school curriculum platform",
                "Shipped course delivery, assignment submission, and student-interaction APIs from scratch in Spring Boot",
                "Supported onboarding for 2 schools in Pilani and iterated directly from live user feedback",
            ],
        },
    ];

    const achievements = [
        {
            label: "Meta x HuggingFace RL Hackathon",
            value: "Rank 158",
            detail: "Placed among 15,000+ teams",
            icon: Trophy,
        },
        {
            label: "LeetCode Consistency",
            value: "500+ day streak",
            detail: "Long-running DSA practice habit",
            icon: Flame,
        },
        {
            label: "Namora Architecture",
            value: "8 services",
            detail: "Spring Boot, Kafka, Redis GEO, gateway, discovery",
            icon: Workflow,
        },
        {
            label: "Bricks Education",
            value: "2 schools",
            detail: "Shipped and iterated from live school feedback",
            icon: School,
        },
        {
            label: "NitroSense Linux",
            value: "Published release",
            detail: "Desktop app artifacts, checksums, and docs",
            icon: PackageCheck,
        },
    ];

    return (
        <section id="experience" className="py-24 bg-card/50">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">
                        <span className="text-gradient">Experience</span>
                    </h2>

                    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="relative">
                            <div className="absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-primary/30 md:block"/>

                            {milestones.map((exp, index) => {
                                const Icon = exp.icon;

                                return (
                                    <motion.div
                                        key={`${exp.company}-${exp.title}`}
                                        initial={{opacity: 0, x: -50}}
                                        animate={isInView ? {opacity: 1, x: 0} : {}}
                                        transition={{duration: 0.6, delay: index * 0.2}}
                                        className="relative mb-6 last:mb-0 md:pl-16"
                                    >
                                        <div
                                            className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-background text-primary md:flex">
                                            <Icon size={22}/>
                                        </div>

                                        <Card
                                            className="p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                                            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                                <div>
                                                    <p className="text-sm font-semibold text-primary">
                                                        {exp.period} | {exp.location}
                                                    </p>
                                                    <h3 className="mt-2 text-xl font-bold">{exp.title}</h3>
                                                    <p className="text-muted-foreground">{exp.company}</p>
                                                </div>
                                                <Badge
                                                    variant="secondary"
                                                    className="w-fit bg-primary/10 px-3 py-1.5 text-primary hover:bg-primary/10"
                                                >
                                                    {exp.type}
                                                </Badge>
                                            </div>

                                            <ul className="space-y-3">
                                                {exp.responsibilities.map((item) => (
                                                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                                                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"/>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.div
                            initial={{opacity: 0, x: 50}}
                            animate={isInView ? {opacity: 1, x: 0} : {}}
                            transition={{duration: 0.6, delay: 0.15}}
                        >
                            <Card className="h-full border-primary/20 bg-background/70 p-6">
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Medal size={24}/>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                                            Achievement Badges
                                        </p>
                                        <h3 className="text-2xl font-bold">Specific proof points</h3>
                                    </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                                    {achievements.map((achievement, index) => {
                                        const Icon = achievement.icon;

                                        return (
                                            <motion.div
                                                key={achievement.label}
                                                initial={{opacity: 0, y: 18}}
                                                animate={isInView ? {opacity: 1, y: 0} : {}}
                                                transition={{duration: 0.45, delay: 0.25 + index * 0.08}}
                                                className="rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/70"
                                            >
                                                <div className="flex gap-3">
                                                    <div
                                                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                                                        <Icon size={20}/>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-muted-foreground">
                                                            {achievement.label}
                                                        </p>
                                                        <p className="mt-1 text-lg font-bold">{achievement.value}</p>
                                                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                                            {achievement.detail}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
