"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const blogPosts = [
  {
    image: "/assets/img/home_photo.jpg",
    title: "The Future of AI",
    excerpt: "Exploring the ethical implications and technological advancements in artificial intelligence.",
  },
  {
    image: "/assets/img/header_photo.jpg",
    title: "Philosophy of Science",
    excerpt: "A deep dive into the epistemological foundations of modern scientific inquiry.",
  },
  {
    image: "/assets/img/home_photo.jpg",
    title: "Education Reform",
    excerpt: "Why we need to rethink how we teach STEM subjects to the next generation.",
  },
];

export default function Blog() {
  return (
    <section className="section-dark section-blog" id="blog">
      <div className="section-content">
        <div className="section-title">Blog</div>
        <ScrollReveal animation="fadeUp">
          <h3 className="section-heading">From My Life</h3>
        </ScrollReveal>

        <div className="card-grid">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={index} animation="fadeUp" delay={index * 0.15}>
              <div className="hover-card">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="card-img"
                  width={400}
                  height={200}
                />
                <div className="card-content">
                  <h4 className="card-title">{post.title}</h4>
                  <p className="card-excerpt">{post.excerpt}</p>
                  <Link href="#" className="card-link">
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fadeUp" delay={0.5}>
          <Link href="/blog" className="btn">
            Read Blog
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
