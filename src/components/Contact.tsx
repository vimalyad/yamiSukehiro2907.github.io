import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, FileText } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    { icon: Mail, text: "vimalyadavkr001@gmail.com", href: "mailto:vimalyadavkr001@gmail.com" },
    { icon: Phone, text: "+91 8604732097", href: "tel:+918604732097" },
    { icon: MapPin, text: "Bengaluru, Karnataka" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/vimalyad", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vimal-kumar-yadav-58a7a5316/", label: "LinkedIn" },
    { icon: FileText, href: "/resume.pdf", label: "Resume" },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <Input placeholder="Your Name" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <Textarea placeholder="Your message..." rows={5} className="bg-background resize-none" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.text}</p>
                  )}
                </div>
              ))}

              <div className="pt-8">
                <h3 className="text-xl font-bold mb-6">Connect with me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <link.icon size={20} />
                    </a>
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

export default Contact;
