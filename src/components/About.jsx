import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-wrapper">
              <img src="/images/aboutme-image.png" alt="Fauzi Noorsyabani" />
              <div className="image-border"></div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Hello! I'm <strong className="gradient-text">Fauzi Noorsyabani</strong>, a passionate 
              Software Engineer and Data Scientist based in Tasikmalaya, Indonesia. Currently pursuing 
              my Bachelor's degree in Information Systems at Siliwangi University with a GPA of 3.88/4.00.
            </p>
            
            <p>
              My journey in tech has been marked by a deep curiosity for building impactful digital solutions. 
              From developing full-stack web applications to creating data-driven insights with Python and 
              Power BI, I love solving complex problems and turning data into actionable strategies.
            </p>

            <p>
              As a <strong>Google Student Ambassador</strong> and Campus Lead for AI & Gemini initiatives, 
              I'm at the forefront of driving AI adoption in my academic community. I believe in the power 
              of technology to transform lives and create meaningful impact.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">3.88</span>
                <span className="highlight-label">GPA</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">6+</span>
                <span className="highlight-label">Gold Medals</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">5+</span>
                <span className="highlight-label">Projects</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">3+</span>
                <span className="highlight-label">Certifications</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
