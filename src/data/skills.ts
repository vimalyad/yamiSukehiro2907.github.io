import {
    BrainCircuit,
    Cloud,
    Code2,
    Database,
    GitBranch,
    MonitorSmartphone,
    Server,
    ShieldCheck,
    type LucideIcon,
} from "lucide-react";

export type SkillCategory = {
    title: string;
    icon: LucideIcon;
    skills: string[];
};

export const skillCategories: SkillCategory[] = [
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
