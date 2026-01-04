import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaBriefcase, FaGraduationCap, FaCheckCircle, FaRocket } from 'react-icons/fa';
import { personalInfo } from '../data/content';
import './Hero.css';

const roles = personalInfo.roles;

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>
          
          <motion.div 
            className="hero-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </motion.div>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div 
            className="hero-status open-to-work"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="status-badge">
              <FaCheckCircle className="badge-icon pulse" />
              <span className="badge-text">Open to Work</span>
            </div>
            <div className="status-items">
              <div className="status-item">
                <FaGraduationCap className="status-icon" />
                <span>Information Systems <strong>@ Universitas Siliwangi</strong></span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a 
              href={personalInfo.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Resume
            </a>
            
            <div className="social-links">
              <motion.a 
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: 'rgb(131, 21, 234)' }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: 'rgb(131, 21, 234)' }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: 'rgb(131, 21, 234)' }}
              >
                <FaInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
