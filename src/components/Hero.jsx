import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import { personalInfo } from '../data/content';

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
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden md:pt-20 max-md:pt-24 max-md:min-h-auto max-md:pb-16">
      <div className="max-w-[1200px] mx-auto px-5 w-full">
        <motion.div 
          className="max-w-[800px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-xl text-primary font-medium mb-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            className="font-extrabold mb-4 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-2px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>
          
          <motion.div 
            className="font-semibold mb-6 min-h-10 text-text-primary"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-text-primary">{displayText}</span>
            <span className="text-primary animate-pulse ml-0.5">|</span>
          </motion.div>

          <motion.p 
            className="text-lg max-w-[600px] mb-8 leading-relaxed text-text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {personalInfo.summary}
          </motion.p>

          {/* Open to Work Status */}
          <motion.div 
            className="mb-9 p-5 rounded-lg border relative overflow-hidden max-md:p-4"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(131, 21, 234, 0.1))',
              borderColor: 'rgba(34, 197, 94, 0.3)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {/* Shimmer Effect */}
            <div 
              className="absolute top-0 left-0 w-full h-full animate-[shimmer_3s_infinite]"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.1), transparent)'
              }}
            />
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full font-semibold text-sm mb-4 shadow-[0_4px_15px_rgba(34,197,94,0.3)]">
              <FaCheckCircle className="text-base animate-pulse" />
              <span>Open to Work</span>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-[0.95rem] text-text-secondary">
                <FaGraduationCap className="text-primary text-lg flex-shrink-0" />
                <span>Information Systems <strong className="text-text-primary">@ Universitas Siliwangi</strong></span>
              </div>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div 
            className="flex items-center gap-6 flex-wrap max-md:flex-col max-md:items-start max-md:gap-5"
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
            
            <div className="flex gap-5">
              <motion.a 
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-text-secondary transition-all duration-300 hover:text-primary"
                whileHover={{ y: -5, color: 'rgb(131, 21, 234)' }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-text-secondary transition-all duration-300 hover:text-primary"
                whileHover={{ y: -5, color: 'rgb(131, 21, 234)' }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-text-secondary transition-all duration-300 hover:text-primary"
                whileHover={{ y: -5, color: 'rgb(131, 21, 234)' }}
              >
                <FaInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
