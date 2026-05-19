import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";
import {Card} from "@/components/ui/card";
import {Briefcase} from "lucide-react";

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const experiences = [
        {
            period: "Feb 2026 – Apr 2026",
            title: "SDE Intern",
            company: "Neeto (BigBinary)",
            location: "Remote",
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
            responsibilities: [
                "Owned backend development through 3 product pivots: LMS, social platform, and school curriculum platform",
                "Shipped course delivery, assignment submission, and student-interaction APIs from scratch in Spring Boot",
                "Supported onboarding for 2 schools in Pilani and iterated directly from live user feedback",
            ],
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

                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, x: -50}}
                                animate={isInView ? {opacity: 1, x: 0} : {}}
                                transition={{duration: 0.6, delay: index * 0.2}}
                            >
                                <Card className="p-6 hover:border-primary transition-colors">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div
                                                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                                <Briefcase className="text-primary" size={24}/>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-primary text-sm font-semibold mb-2">
                                                {exp.period} | {exp.location}
                                            </p>
                                            <h3 className="text-xl font-bold mb-1">
                                                {exp.title} | {exp.company}
                                            </h3>
                                            <ul className="space-y-2 mt-4">
                                                {exp.responsibilities.map((item, i) => (
                                                    <li key={i}
                                                        className="text-muted-foreground text-sm flex items-start">
                                                        <span className="text-primary mr-2">•</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
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

export default Experience;
