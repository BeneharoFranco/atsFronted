import React from 'react';
import './About.css';  // Asegúrate de que la ruta es correcta

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <section className="about-section">
                <h2>Who We Are</h2>
                <p>
                    We are a leading company in our industry, dedicated to providing top-notch services and products to our clients. Our team is composed of highly skilled professionals who are passionate about what they do.
                </p>
            </section>
            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to innovate and excel in our field, continuously improving and adapting to meet the needs of our clients. We strive to make a positive impact through our work and contribute to the betterment of our community.
                </p>
            </section>
            <section className="vision-section">
                <h2>Our Vision</h2>
                <p>
                    We envision a future where our solutions set the standard in the industry, driving growth and success for our clients and partners. We aim to be at the forefront of technological advancements and market trends.
                </p>
            </section>
            <section className="team-section">
                <h2>Our Team</h2>
                <p>
                    Our team is our greatest asset. With diverse backgrounds and a wealth of experience, our team members collaborate to bring innovative solutions and achieve outstanding results.
                </p>
            </section>
        </div>
    );
};

export default About;
