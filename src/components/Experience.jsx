import { motion } from 'framer-motion';
import { FaBriefcase, FaUsers } from 'react-icons/fa';
import { experiences } from '../data/content';

const Experience = () => {
  return (
    <section id="experience" className="section bg-dark">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative max-w-[1000px] mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-primary to-primary-light rounded max-md:left-5" />
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.title + exp.company}
              className={`relative w-1/2 py-5 max-md:w-full max-md:!pl-16 max-md:!pr-5 max-md:!left-0
                ${index % 2 === 0 ? 'left-0 pr-16 max-md:pr-5' : 'left-1/2 pl-16 max-md:left-0'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline Dot */}
              <div 
                className={`absolute w-11 h-11 max-md:w-10 max-md:h-10 bg-primary rounded-full flex items-center justify-center text-white text-base max-md:text-sm z-[2] shadow-[0_0_20px_rgba(131,21,234,0.4)]
                  ${index % 2 === 0 ? 'right-[-22px] max-md:!left-0 max-md:!right-auto' : 'left-[-22px] max-md:!left-0'}`}
              >
                {exp.type === 'work' ? <FaBriefcase /> : <FaUsers />}
              </div>
              
              <motion.div 
                className="bg-dark-card p-6 rounded-lg border border-border transition-all duration-300 hover:border-primary hover:shadow-[0_5px_30px_rgba(131,21,234,0.1)]"
                whileHover={{ scale: 1.02 }}
              >
                <span className="inline-block px-3 py-1 bg-primary text-white rounded-sm text-xs font-semibold uppercase tracking-wider mb-3">
                  {exp.type === 'work' ? 'Work' : 'Leadership'}
                </span>
                <h3 className="text-xl text-text-primary mb-1">{exp.title}</h3>
                <h4 className="text-base text-primary font-medium mb-2">{exp.company}</h4>
                <p className="text-sm text-text-muted mb-4">{exp.period} • {exp.location}</p>
                <ul className="list-none p-0">
                  {exp.highlights.map((highlight, idx) => (
                    <li 
                      key={idx} 
                      className="relative pl-5 mb-2 text-sm text-text-secondary leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-primary"
                    >
                      {highlight}
                    </li>
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
