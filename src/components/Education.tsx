import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";
import {Card} from "@/components/ui/card";
import {BookOpen, GraduationCap, MapPin} from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const education = [
    {
      period: "2024 – 2027",
      institution: "BITS Pilani",
      degree: "Bachelor of Science in Computer Science",
      details: "CGPA 8.7/10",
      coursework: "Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, OOP, Distributed Systems",
      signal: "Computer science foundation for backend and systems work",
    },
    {
      period: "May 2022",
      institution: "MPVM Ganga Gurukulam",
      degree: "12th Grade",
      details: "85.40% | Prayagraj, Uttar Pradesh",
      signal: "Academic base before moving into product engineering",
    },
  ];

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{opacity: 0, y: 50}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6}}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <span className="text-gradient">Education</span>
          </h2>

          <div className="relative">
            <div className="absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-primary/30 md:block"/>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, x: -50}}
                animate={isInView ? {opacity: 1, x: 0} : {}}
                transition={{duration: 0.6, delay: index * 0.18}}
                className="relative mb-6 last:mb-0 md:pl-16"
              >
                <div
                  className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-background text-primary md:flex">
                  <GraduationCap size={22}/>
                </div>

                <Card className="p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-primary">{edu.period}</p>
                      <h3 className="mt-2 text-xl font-bold">{edu.institution}</h3>
                      <p className="mt-2 text-foreground">{edu.degree}</p>
                      <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-2 rounded-md bg-secondary px-3 py-1.5">
                          <BookOpen size={14}/>
                          {edu.details}
                        </span>
                        {edu.details.includes("Prayagraj") && (
                          <span className="inline-flex items-center gap-2 rounded-md bg-secondary px-3 py-1.5">
                            <MapPin size={14}/>
                            Prayagraj
                          </span>
                        )}
                      </div>
                      {edu.coursework && (
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                          <span className="font-semibold">Coursework:</span> {edu.coursework}
                        </p>
                      )}
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {edu.signal}
                    </p>
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
