import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa';
import { achievements } from '../data/content';
import './Awards.css';

const iconMap = {
  trophy: FaTrophy,
  medal: FaMedal,
  award: FaAward,
  star: FaStar
};

const colorMap = {
  gold: '#FFD700',
  silver: '#C0C0C0',
  bronze: '#CD7F32'
};

const Awards = () => {
  return (
    <section id="awards" className="awards-section section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Awards & Achievements
        </motion.h2>

        <div className="awards-grid">
          {achievements.map((award, index) => {
            const IconComponent = iconMap[award.icon] || FaAward;
            const iconColor = colorMap[award.color] || 'var(--primary)';
            
            return (
              <motion.div 
                key={award.title}
                className="award-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="award-icon" style={{ color: iconColor }}>
                  <IconComponent />
                </div>
                <div className="award-info">
                  <h3 className="award-title">{award.title}</h3>
                  <p className="award-org">{award.organization}</p>
                  <span className="award-date">{award.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
