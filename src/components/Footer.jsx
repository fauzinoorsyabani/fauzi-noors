import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/content';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/images/logo-fauzins.png" alt="Fauzi Noorsyabani" className="footer-logo" />
            <p className="footer-tagline">Building digital experiences with passion and purpose.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} {personalInfo.name}. Made with <FaHeart className="heart-icon" /> in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
