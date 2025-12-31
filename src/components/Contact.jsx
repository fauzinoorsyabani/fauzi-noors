import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo } from '../data/content';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="contact-title">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="contact-subtitle">
            Have a project in mind or just want to chat? I'm always open to new opportunities 
            and collaborations. Feel free to reach out!
          </p>

          <div className="contact-info">
            <motion.a 
              href={`mailto:${personalInfo.email}`}
              className="contact-item"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(131, 21, 234, 0.2)' }}
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">{personalInfo.email}</span>
              </div>
            </motion.a>

            <motion.a 
              href={`tel:${personalInfo.phone}`}
              className="contact-item"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(131, 21, 234, 0.2)' }}
            >
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <span className="contact-label">Phone</span>
                <span className="contact-value">{personalInfo.phone}</span>
              </div>
            </motion.a>

            <motion.div 
              className="contact-item"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(131, 21, 234, 0.2)' }}
            >
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <span className="contact-label">Location</span>
                <span className="contact-value">{personalInfo.location}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
