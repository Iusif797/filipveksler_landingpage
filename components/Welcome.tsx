import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Welcome() {
  return (
    <div className="container">
      <div className="welcome-section">
        <ScrollReveal animation="fadeLeft">
          <Image
            src="/assets/img/home_photo.jpg"
            className="homepic"
            alt="Homepage picture"
            width={500}
            height={500}
          />
        </ScrollReveal>
        <div className="welcome-content">
          <ScrollReveal animation="fadeRight" delay={0.2}>
            <p className="welcome-text">
              My name is Filip Veksler. I am a scientist, educator and consultant. My passions are science, technology, engineering, mathematics and philosophy. It all comes down to my curiosity and inner desire to explore how the world works. Some may say that it is my inner child, who is dissatisfied because it doesn&apos;t know everything, and they might be correct. But the way I see it, curiosity might have killed a cat and yet it is the motor of human progress. I am a firm believer in the power of education and the importance of making knowledge accessible to everyone. That is why I have created this website, where you can learn more about me, my work and my passions. I hope that my research, my work and (perhaps even) this website will inspire you to explore and learn more about the world around you. If you are also curious, feel free to explore and learn more about me and my work. I hope you enjoy your stay.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.4}>
            <p className="welcome-text signature-block">
              <br />
              Faithfully
              <br />
              Filip Veksler
            </p>
            <Image
              src="/assets/img/signature.png"
              className="signature"
              alt="Signature"
              width={150}
              height={50}
            />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
