import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="section-dark section-bio" id="about">
      <div className="section-content">
        <div className="section-title">Biography</div>
        <ScrollReveal animation="scale">
          <div className="glass-card">
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <h3 className="section-heading">About Me</h3>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="section-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae numquam animi, consequuntur aliquid amet quidem illo fugit neque eius porro sequi rerum minima autem distinctio id nisi suscipit velit eveniet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste nihil ducimus aperiam cupiditate voluptatem molestias atque, delectus in optio suscipit repellat magni nulla, incidunt quae quisquam quasi asperiores quos? Rem? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, distinctio. Cum quis necessitatibus et eum? Nobis, excepturi a quae laudantium voluptatibus voluptatum ducimus pariatur quisquam sapiente? Corporis quibusdam atque qui!
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.3}>
              <Link href="/about" className="btn">
                Read More
              </Link>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
