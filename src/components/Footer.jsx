import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-darker border-t border-border py-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-[2fr_1fr_1fr] max-md:grid-cols-1 gap-12 max-md:gap-8 mb-10 max-md:text-center">
          {/* Brand */}
          <div>
            <img 
              src="/images/logo-fauzins.png" 
              alt="Fauzi Noorsyabani" 
              className="h-[30px] mb-4 max-md:mx-auto"
            />
            <p className="text-[0.95rem] text-text-secondary max-w-[300px] max-md:max-w-full">
              Building digital experiences with passion and purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base text-text-primary mb-5 uppercase tracking-wider">Quick Links</h4>
            <a href="#about" className="block text-text-secondary mb-3 text-sm transition-colors duration-300 hover:text-primary">About</a>
            <a href="#projects" className="block text-text-secondary mb-3 text-sm transition-colors duration-300 hover:text-primary">Projects</a>
            <a href="#experience" className="block text-text-secondary mb-3 text-sm transition-colors duration-300 hover:text-primary">Experience</a>
            <a href="#contact" className="block text-text-secondary mb-3 text-sm transition-colors duration-300 hover:text-primary">Contact</a>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-base text-text-primary mb-5 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4 max-md:justify-center">
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-[42px] h-[42px] bg-dark-card rounded-full flex items-center justify-center text-lg text-text-secondary transition-all duration-300 border border-border hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1"
              >
                <FaGithub />
              </a>
              <a 
                href={personalInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-[42px] h-[42px] bg-dark-card rounded-full flex items-center justify-center text-lg text-text-secondary transition-all duration-300 border border-border hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1"
              >
                <FaLinkedin />
              </a>
              <a 
                href={personalInfo.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-[42px] h-[42px] bg-dark-card rounded-full flex items-center justify-center text-lg text-text-secondary transition-all duration-300 border border-border hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-text-muted flex items-center justify-center gap-1">
            © {currentYear} {personalInfo.name}. Made with 
            <FaHeart className="text-[#ff4757] animate-pulse" /> 
            in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
