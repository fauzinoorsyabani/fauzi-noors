import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa';
import { achievements } from '../data/content';

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
    <section id="awards" className="section bg-dark-darker">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Awards & Achievements
        </motion.h2>

        <div className="grid gap-6 max-md:grid-cols-1" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          {achievements.map((award, index) => {
            const IconComponent = iconMap[award.icon] || FaAward;
            const iconColor = colorMap[award.color] || 'rgb(131, 21, 234)';
            
            return (
              <motion.div 
                key={award.title}
                className="flex items-start gap-5 bg-dark-card p-6 max-md:p-5 rounded-lg border border-border transition-all duration-300 hover:border-primary hover:shadow-[0_10px_40px_rgba(131,21,234,0.1)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div 
                  className="text-4xl max-md:text-3xl flex-shrink-0 animate-float"
                  style={{ 
                    color: iconColor,
                    filter: `drop-shadow(0 0 10px ${iconColor})`
                  }}
                >
                  <IconComponent />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg text-text-primary mb-2 leading-snug">{award.title}</h3>
                  <p className="text-sm text-text-secondary mb-2.5">{award.organization}</p>
                  <span className="inline-block px-3 py-1 bg-dark rounded-sm text-xs text-text-muted">
                    {award.date}
                  </span>
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
