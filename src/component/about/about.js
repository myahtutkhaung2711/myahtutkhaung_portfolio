import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <p>
          Hello! I'm <strong>Mya Htut Khaung</strong>, a passionate junior web developer
          who loves turning ideas into real, working websites. I specialize in
          both frontend and backend technologies including Laravel, PHP, React,
          JavaScript, and MySQL.
        </p>
        <p>
          I enjoy building clean, user-friendly interfaces and writing code
          that's both powerful and maintainable. I'm always curious and excited
          to learn new things in the world of web development.
        </p>
        <p>
          When I’m not coding, I enjoy exploring new tools, working on side
          projects, or spending quality time with my loved ones.
        </p>
      </div>
    </section>
  );
};

export default About;
