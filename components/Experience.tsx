"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  const experiences = [
    {
      date: "2020 - Present",
      title: "Senior Consultant",
      description: "Leading strategic initiatives and providing expert advice in technology and engineering sectors.",
    },
    {
      date: "2018 - 2020",
      title: "Research Scientist",
      description: "Conducted groundbreaking research in applied mathematics and published multiple papers.",
    },
    {
      date: "2015 - 2018",
      title: "University Educator",
      description: "Taught advanced courses in physics and engineering, mentoring the next generation of scientists.",
    },
    {
      date: "2012 - 2015",
      title: "PhD Candidate",
      description: "Completed doctoral studies with a focus on computational modeling and simulation.",
    },
  ];

  return (
    <section className="section-light section-xp" id="vitae">
      <div className="section-content">
        <div className="section-title">Experience</div>
        <ScrollReveal animation="fadeUp">
          <h3 className="section-heading">My Journey</h3>
        </ScrollReveal>

        <div className="journey-grid">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} animation="fadeUp" delay={index * 0.15}>
              <div className="journey-card">
                <div className="journey-card-header">
                  <span className="journey-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="journey-date">{exp.date}</span>
                </div>
                <h4 className="journey-title">{exp.title}</h4>
                <p className="journey-description">{exp.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fadeUp" delay={0.4}>
          <Link href="/vitae" className="btn" style={{ marginTop: "3rem" }}>
            View Full Resume
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
