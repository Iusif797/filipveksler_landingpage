import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Blog() {
  return (
    <section className="section-dark section-blog" id="blog">
      <div className="section-content">
        <div className="section-title">Blog</div>
        <ScrollReveal>
          <h3 className="section-heading">From My Life</h3>
        </ScrollReveal>

        <ScrollReveal>
          <div className="card-grid">
            <div className="hover-card">
              <Image
                src="/assets/img/home_photo.jpg"
                alt="Blog 1"
                className="card-img"
                width={400}
                height={200}
              />
              <div className="card-content">
                <h4 className="card-title">The Future of AI</h4>
                <p className="card-excerpt">
                  Exploring the ethical implications and technological advancements in artificial intelligence.
                </p>
                <Link href="#" className="card-link">
                  Read More &rarr;
                </Link>
              </div>
            </div>
            <div className="hover-card">
              <Image
                src="/assets/img/header_photo.jpg"
                alt="Blog 2"
                className="card-img"
                width={400}
                height={200}
              />
              <div className="card-content">
                <h4 className="card-title">Philosophy of Science</h4>
                <p className="card-excerpt">
                  A deep dive into the epistemological foundations of modern scientific inquiry.
                </p>
                <Link href="#" className="card-link">
                  Read More &rarr;
                </Link>
              </div>
            </div>
            <div className="hover-card">
              <Image
                src="/assets/img/home_photo.jpg"
                alt="Blog 3"
                className="card-img"
                width={400}
                height={200}
              />
              <div className="card-content">
                <h4 className="card-title">Education Reform</h4>
                <p className="card-excerpt">
                  Why we need to rethink how we teach STEM subjects to the next generation.
                </p>
                <Link href="#" className="card-link">
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Link href="/blog" className="btn">
            Read Blog
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
