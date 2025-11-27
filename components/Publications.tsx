"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const publications = [
  {
    title: "Quantum Computing Algorithms",
    excerpt: "Published in Journal of Modern Physics, 2023. Analysis of error correction methods.",
  },
  {
    title: "Sustainable Energy Systems",
    excerpt: "Published in Energy & Environment, 2022. A review of renewable integration strategies.",
  },
  {
    title: "Machine Learning in Medicine",
    excerpt: "Published in Digital Health, 2021. Predictive modeling for patient outcomes.",
  },
];

export default function Publications() {
  return (
    <section className="section-light section-pub" id="publications">
      <div className="section-content">
        <div className="section-title">Research</div>
        <ScrollReveal animation="fadeUp">
          <h3 className="section-heading">Manuscripts</h3>
        </ScrollReveal>

        <div className="card-grid">
          {publications.map((pub, index) => (
            <ScrollReveal key={index} animation="fadeUp" delay={index * 0.15}>
              <div className="hover-card">
                <div className="card-content">
                  <h4 className="card-title">{pub.title}</h4>
                  <p className="card-excerpt">{pub.excerpt}</p>
                  <Link href="#" className="card-link">
                    View Paper &rarr;
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fadeUp" delay={0.5}>
          <Link href="/publications" className="btn">
            Publications
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
