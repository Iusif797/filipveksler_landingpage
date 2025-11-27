import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Publications() {
  return (
    <section className="section-light section-pub" id="publications">
      <div className="section-content">
        <div className="section-title">Research</div>
        <ScrollReveal>
          <h3 className="section-heading">Manuscripts</h3>
        </ScrollReveal>

        <ScrollReveal>
          <div className="card-grid">
            <div className="hover-card">
              <div className="card-content">
                <h4 className="card-title">Quantum Computing Algorithms</h4>
                <p className="card-excerpt">
                  Published in Journal of Modern Physics, 2023. Analysis of error correction methods.
                </p>
                <Link href="#" className="card-link">
                  View Paper &rarr;
                </Link>
              </div>
            </div>
            <div className="hover-card">
              <div className="card-content">
                <h4 className="card-title">Sustainable Energy Systems</h4>
                <p className="card-excerpt">
                  Published in Energy & Environment, 2022. A review of renewable integration strategies.
                </p>
                <Link href="#" className="card-link">
                  View Paper &rarr;
                </Link>
              </div>
            </div>
            <div className="hover-card">
              <div className="card-content">
                <h4 className="card-title">Machine Learning in Medicine</h4>
                <p className="card-excerpt">
                  Published in Digital Health, 2021. Predictive modeling for patient outcomes.
                </p>
                <Link href="#" className="card-link">
                  View Paper &rarr;
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Link href="/publications" className="btn">
            Publications
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
