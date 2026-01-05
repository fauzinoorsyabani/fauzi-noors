import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/content';

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section bg-dark-darker">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 max-md:grid-cols-1" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="bg-dark-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:border-primary hover:shadow-[0_10px_40px_rgba(131,21,234,0.15)] group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden h-[200px] max-md:h-[180px]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center text-white text-xl transition-all duration-300 hover:bg-white hover:text-primary hover:scale-110"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center text-white text-xl transition-all duration-300 hover:bg-white hover:text-primary hover:scale-110"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-medium">{project.period}</span>
                <h3 className="text-xl my-2 text-text-primary">{project.title}</h3>
                <p className="text-[0.95rem] text-text-secondary mb-5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-dark rounded-sm text-xs text-text-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <motion.h3 
              className="text-center my-16 text-2xl text-text-secondary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Other Projects
            </motion.h3>
            <div className="grid gap-8 max-md:grid-cols-1" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {otherProjects.map((project, index) => (
                <motion.div 
                  key={project.title}
                  className="bg-dark-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:border-primary hover:shadow-[0_10px_40px_rgba(131,21,234,0.15)] group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative overflow-hidden h-[200px] max-md:h-[180px]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-primary font-medium">{project.period}</span>
                    <h3 className="text-xl my-2 text-text-primary">{project.title}</h3>
                    <p className="text-[0.95rem] text-text-secondary mb-5 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-dark rounded-sm text-xs text-text-muted border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
