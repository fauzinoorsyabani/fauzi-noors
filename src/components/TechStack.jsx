import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaPhp, FaLaravel, FaBootstrap,
  FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaAws, FaFigma, FaServer
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiMysql, SiPandas, SiScikitlearn,
  SiPowerbi, SiStreamlit, SiGooglecolab, SiVisualstudiocode
} from 'react-icons/si';
import './TechStack.css';

const iconMap = {
  FaReact, FaNodeJs, FaPython, FaPhp, FaLaravel, FaBootstrap,
  FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaAws, FaFigma, FaServer,
  SiNextdotjs, SiTypescript, SiMysql, SiPandas, SiScikitlearn,
  SiPowerbi, SiStreamlit, SiGooglecolab, SiVisualstudiocode
};

const techCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', icon: 'FaReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'JavaScript', icon: 'FaJs' },
      { name: 'HTML5', icon: 'FaHtml5' },
      { name: 'CSS3', icon: 'FaCss3Alt' },
      { name: 'Bootstrap', icon: 'FaBootstrap' },
    ]
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: 'FaNodeJs' },
      { name: 'PHP', icon: 'FaPhp' },
      { name: 'Laravel', icon: 'FaLaravel' },
      { name: 'REST API', icon: 'FaServer' },
      { name: 'MySQL', icon: 'SiMysql' },
    ]
  },
  {
    title: 'Data Science',
    items: [
      { name: 'Python', icon: 'FaPython' },
      { name: 'Pandas', icon: 'SiPandas' },
      { name: 'Scikit-learn', icon: 'SiScikitlearn' },
      { name: 'Power BI', icon: 'SiPowerbi' },
      { name: 'Streamlit', icon: 'SiStreamlit' },
      { name: 'Google Colab', icon: 'SiGooglecolab' },
    ]
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: 'FaGitAlt' },
      { name: 'GitHub', icon: 'FaGithub' },
      { name: 'AWS', icon: 'FaAws' },
      { name: 'Figma', icon: 'FaFigma' },
      { name: 'VS Code', icon: 'SiVisualstudiocode' },
    ]
  }
];

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="tech-stack" className="techstack-section section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.h2>

        <div className="tech-categories">
          {techCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              className="tech-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <motion.div 
                className="tech-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.items.map((tech) => {
                  const IconComponent = iconMap[tech.icon];
                  return (
                    <motion.div 
                      key={tech.name}
                      className="tech-item"
                      variants={itemVariants}
                      whileHover={{ 
                        y: -10, 
                        boxShadow: '0 10px 30px rgba(131, 21, 234, 0.2)'
                      }}
                    >
                      {IconComponent && <IconComponent className="tech-icon" />}
                      <span className="tech-name">{tech.name}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
