import {motion} from "framer-motion";
import {Github, Linkedin, Mail, Phone, ChevronDown} from "lucide-react";
import {Button} from "@/components/ui/button";
import developerHero from "@/assets/developer-hero.png";

const Hero = () => {
    const socialLinks = [
        {icon: Github, href: "https://github.com/vimalyad", label: "GitHub"},
        {icon: Linkedin, href: "https://www.linkedin.com/in/vimal-kumar-yadav-58a7a5316/", label: "LinkedIn"},
        {icon: Mail, href: "mailto:vimalyadavkr001@gmail.com", label: "Email"},
        {icon: Phone, href: "tel:+918604732097", label: "Phone"},
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="container mx-auto px-6 py-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                    >
                        <p className="text-primary text-sm uppercase tracking-wider mb-4 font-semibold">
                            Backend Engineer • Systems Builder • Full Stack Developer
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Vimal Kumar Yadav
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Backend engineer building production systems from 0 to 1 across microservices,
                            real-time collaboration, event-driven workflows, and automation-heavy product teams.
                        </p>

                        <div className="flex gap-4 mb-8">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                <a href="#projects">View Projects</a>
                            </Button>
                            <Button size="lg" variant="outline"
                                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                                <a href="tel:+918604732097">Contact Me</a>
                            </Button>
                        </div>

                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.95}}
                                >
                                    <link.icon size={20}/>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                        className="relative"
                    >
                        <img
                            src={developerHero}
                            alt="Developer workstation with code, architecture diagrams, and backend systems"
                            className="w-full h-auto rounded-lg"
                        />
                    </motion.div>
                </div>
            </div>

            <motion.a
                href="#about"
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-primary cursor-pointer"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 1, duration: 0.6, repeat: Infinity, repeatType: "reverse"}}
            >
                <span className="text-sm mb-2">Scroll</span>
                <ChevronDown size={24}/>
            </motion.a>
        </section>
    );
};

export default Hero;
