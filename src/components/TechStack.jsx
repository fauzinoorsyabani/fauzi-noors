import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaPhp, FaLaravel, FaBootstrap,
  FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaAws, FaFigma, FaServer, FaChartBar, FaCode,
  FaVuejs, FaDatabase, FaRobot
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiMysql, SiPandas, SiScikitlearn,
  SiStreamlit, SiGooglecolab, SiCloudflare, SiTableau, SiLooker,
  SiCplusplus, SiTailwindcss, SiSupabase,
  SiOpenai, SiSqlite, SiMariadb
} from 'react-icons/si';
import { GiOrangeSlice } from 'react-icons/gi';
import { TbBrandReactNative, TbBrandCSharp, TbLetterC, TbSparkles } from 'react-icons/tb';
import './TechStack.css';

const iconMap = {
  FaReact, FaNodeJs, FaPython, FaPhp, FaLaravel, FaBootstrap,
  FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaAws, FaFigma, FaServer, FaChartBar, FaCode,
  FaVuejs, FaDatabase, FaRobot,
  SiNextdotjs, SiTypescript, SiMysql, SiPandas, SiScikitlearn,
  SiStreamlit, SiGooglecolab, SiCloudflare, SiTableau, SiLooker,
  SiCplusplus, SiTailwindcss, SiSupabase,
  SiOpenai, SiSqlite, SiMariadb,
  GiOrangeSlice, TbBrandReactNative, TbBrandCSharp, TbLetterC, TbSparkles
};

const techCategories = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'JavaScript', icon: 'FaJs', color: '#F7DF1E' },
      { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
      { name: 'Python', icon: 'FaPython', color: '#3776AB' },
      { name: 'PHP', icon: 'FaPhp', color: '#777BB4' },
      { name: 'C++', icon: 'SiCplusplus', color: '#00599C' },
      { name: 'C#', icon: 'TbBrandCSharp', color: '#512BD4' },
      { name: 'C', icon: 'TbLetterC', color: '#A8B9CC' },
    ]
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', icon: 'FaReact', color: '#61DAFB' },
      { name: 'React Native', icon: 'TbBrandReactNative', color: '#61DAFB' },
      { name: 'Next.js', icon: 'SiNextdotjs', color: '#ffffff' },
      { name: 'Vue.js', icon: 'FaVuejs', color: '#4FC08D' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' },
      { name: 'HTML5', icon: 'FaHtml5', color: '#E34F26' },
      { name: 'CSS3', icon: 'FaCss3Alt', color: '#1572B6' },
      { name: 'Bootstrap', icon: 'FaBootstrap', color: '#7952B3' },
    ]
  },
  {
    title: 'Backend & Frameworks',
    items: [
      { name: 'Node.js', icon: 'FaNodeJs', color: '#339933' },
      { name: 'Laravel', icon: 'FaLaravel', color: '#FF2D20' },
      { name: 'Filament', icon: 'FaCode', color: '#FDAE4B' },
      { name: 'Supabase', icon: 'SiSupabase', color: '#3ECF8E' },
      { name: 'REST API', icon: 'FaServer', color: '#68A063' },
    ]
  },
  {
    title: 'Databases',
    items: [
      { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
      { name: 'SQLite', icon: 'SiSqlite', color: '#003B57' },
      { name: 'MariaDB', icon: 'SiMariadb', color: '#003545' },
      { name: 'Supabase', icon: 'SiSupabase', color: '#3ECF8E' },
      { name: 'SQL', icon: 'FaDatabase', color: '#336791' },
    ]
  },
  {
    title: 'Data Science & Analytics',
    items: [
      { name: 'Pandas', icon: 'SiPandas', color: '#150458' },
      { name: 'Scikit-learn', icon: 'SiScikitlearn', color: '#F7931E' },
      { name: 'Power BI', icon: 'FaChartBar', color: '#F2C811' },
      { name: 'Google Looker', icon: 'SiLooker', color: '#4285F4' },
      { name: 'Tableau', icon: 'SiTableau', color: '#E97627' },
      { name: 'Streamlit', icon: 'SiStreamlit', color: '#FF4B4B' },
      { name: 'Google Colab', icon: 'SiGooglecolab', color: '#F9AB00' },
      { name: 'Orange', icon: 'GiOrangeSlice', color: '#FF9900' },
    ]
  },
  {
    title: 'Generative AI Tools',
    items: [
      { name: 'ChatGPT', icon: 'SiOpenai', color: '#00A67E' },
      { name: 'Claude', icon: 'TbSparkles', color: '#D4A574' },
      { name: 'GitHub Copilot', icon: 'FaGithub', color: '#ffffff' },
      { name: 'Gemini', icon: 'TbSparkles', color: '#8E75B2' },
      { name: 'DeepSeek', icon: 'FaRobot', color: '#0066FF' },
      { name: 'Antigravity', icon: 'FaRobot', color: '#8B5CF6' },
    ]
  },
  {
    title: 'DevOps & Tools',
    items: [
      { name: 'Git', icon: 'FaGitAlt', color: '#F05032' },
      { name: 'GitHub', icon: 'FaGithub', color: '#ffffff' },
      { name: 'AWS', icon: 'FaAws', color: '#FF9900' },
      { name: 'Cloudflare', icon: 'SiCloudflare', color: '#F38020' },
      { name: 'Figma', icon: 'FaFigma', color: '#F24E1E' },
      { name: 'VS Code', icon: 'FaCode', color: '#007ACC' },
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
                      {IconComponent && <IconComponent className="tech-icon" style={{ color: tech.color }} />}
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
