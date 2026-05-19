import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      period: "2024 – 2027",
      institution: "BITS Pilani",
      degree: "Bachelor of Science in Computer Science",
      details: "CGPA: 8.7/10",
      coursework: "Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, OOP, Distributed Systems",
    },
    {
      period: "May 2022",
      institution: "MPVM Ganga Gurukulam",
      degree: "12th Grade",
      details: "85.40% | Prayagraj, Uttar Pradesh",
    },
  ];

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <span className="text-gradient">Education</span>
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-6 hover:border-primary transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="text-primary" size={24} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-primary text-sm font-semibold mb-2">{edu.period}</p>
                      <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                      <p className="text-foreground mb-2">{edu.degree}</p>
                      <p className="text-muted-foreground text-sm mb-2">{edu.details}</p>
                      {edu.coursework && (
                        <p className="text-muted-foreground text-sm">
                          <span className="font-semibold">Coursework:</span> {edu.coursework}
                        </p>
                      )}
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

export default Education;
