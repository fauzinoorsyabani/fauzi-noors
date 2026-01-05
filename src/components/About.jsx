import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

const About = () => {
  return (
    <section id="about" className="section bg-dark-darker">
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

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-center">
          <motion.div 
            className="relative lg:text-left text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block group">
              <img 
                src="/images/aboutme-image.png" 
                alt="Fauzi Noorsyabani" 
                className="w-full max-w-[350px] rounded-lg relative z-[2] lg:max-w-[350px] max-lg:max-w-[300px] mx-auto"
              />
              <div className="absolute top-5 left-5 w-full max-w-[350px] h-full border-[3px] border-primary rounded-lg z-[1] transition-all duration-300 group-hover:top-4 group-hover:left-4 max-lg:max-w-[300px]" />
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-5 text-[1.05rem]">
              Hello! I'm <strong className="gradient-text">Fauzi Noorsyabani</strong>, a passionate 
              Software Engineer and Data Scientist based in Tasikmalaya, Indonesia. Currently pursuing 
              my Bachelor's degree in Information Systems at Siliwangi University with a GPA of 3.88/4.00.
            </p>
            
            <p className="mb-5 text-[1.05rem]">
              My journey in tech has been marked by a deep curiosity for building impactful digital solutions. 
              From developing full-stack web applications to creating data-driven insights with Python and 
              Power BI, I love solving complex problems and turning data into actionable strategies.
            </p>

            <p className="mb-5 text-[1.05rem]">
              As a <strong className="text-text-primary">Google Student Ambassador</strong> and Campus Lead for AI & Gemini initiatives, 
              I'm at the forefront of driving AI adoption in my academic community. I believe in the power 
              of technology to transform lives and create meaningful impact.
            </p>

            <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-5 mt-9 pt-8 border-t border-border">
              <div className="text-center">
                <span className="block text-3xl max-sm:text-2xl font-extrabold text-primary leading-tight">3.88</span>
                <span className="text-xs text-text-muted uppercase tracking-wider">GPA</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl max-sm:text-2xl font-extrabold text-primary leading-tight">6+</span>
                <span className="text-xs text-text-muted uppercase tracking-wider">Gold Medals</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl max-sm:text-2xl font-extrabold text-primary leading-tight">5+</span>
                <span className="text-xs text-text-muted uppercase tracking-wider">Projects</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl max-sm:text-2xl font-extrabold text-primary leading-tight">3+</span>
                <span className="text-xs text-text-muted uppercase tracking-wider">Certifications</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
