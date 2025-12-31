import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { certifications } from '../data/content';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.title}
              className="cert-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="cert-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>
                <div className="cert-footer">
                  <span className="cert-date">{cert.date}</span>
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cert-link"
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
