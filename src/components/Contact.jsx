import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo } from '../data/content';

const Contact = () => {
  return (
    <section id="contact" className="section bg-dark-darker">
      <div className="container">
        <motion.div 
          className="text-center max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg text-text-secondary mb-12 leading-relaxed">
            Have a project in mind or just want to chat? I'm always open to new opportunities 
            and collaborations. Feel free to reach out!
          </p>

          <div className="flex justify-center gap-8 flex-wrap max-md:flex-col max-md:items-center">
            <motion.a 
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 py-6 px-8 bg-dark-card rounded-lg border border-border transition-all duration-300 no-underline min-w-[280px] max-md:w-full max-md:max-w-[350px] hover:border-primary"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(131, 21, 234, 0.2)' }}
            >
              <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-xl text-white flex-shrink-0">
                <FaEnvelope />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-text-muted uppercase tracking-wider mb-1">Email</span>
                <span className="text-[0.95rem] text-text-primary font-medium">{personalInfo.email}</span>
              </div>
            </motion.a>

            <motion.a 
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-4 py-6 px-8 bg-dark-card rounded-lg border border-border transition-all duration-300 no-underline min-w-[280px] max-md:w-full max-md:max-w-[350px] hover:border-primary"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(131, 21, 234, 0.2)' }}
            >
              <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-xl text-white flex-shrink-0">
                <FaPhone />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-text-muted uppercase tracking-wider mb-1">Phone</span>
                <span className="text-[0.95rem] text-text-primary font-medium">{personalInfo.phone}</span>
              </div>
            </motion.a>

            <motion.div 
              className="flex items-center gap-4 py-6 px-8 bg-dark-card rounded-lg border border-border transition-all duration-300 min-w-[280px] max-md:w-full max-md:max-w-[350px] hover:border-primary"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(131, 21, 234, 0.2)' }}
            >
              <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-xl text-white flex-shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-text-muted uppercase tracking-wider mb-1">Location</span>
                <span className="text-[0.95rem] text-text-primary font-medium">{personalInfo.location}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
