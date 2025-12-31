import { motion } from 'framer-motion';
import { FaBriefcase, FaUsers } from 'react-icons/fa';
import { experiences } from '../data/content';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.title + exp.company}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-dot">
                {exp.type === 'work' ? <FaBriefcase /> : <FaUsers />}
              </div>
              <motion.div 
                className="timeline-content"
                whileHover={{ scale: 1.02 }}
              >
                <span className="timeline-type">{exp.type === 'work' ? 'Work' : 'Leadership'}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-period">{exp.period} • {exp.location}</p>
                <ul className="timeline-highlights">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
