import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { certifications } from '../data/content';

const Certifications = () => {
  return (
    <section id="certifications" className="section bg-dark">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <div className="grid gap-8 max-md:grid-cols-1" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.title}
              className="bg-dark-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:border-primary hover:shadow-[0_15px_50px_rgba(131,21,234,0.15)] group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-[180px] max-md:h-[150px] overflow-hidden bg-gradient-to-br from-primary-dark to-primary">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-text-primary mb-2">{cert.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{cert.issuer}</p>
                <p className="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-3">
                  {cert.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <span className="text-sm text-text-muted">{cert.date}</span>
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary font-medium transition-all duration-300 hover:text-primary-light hover:gap-2.5"
                  >
                    View Credential <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
