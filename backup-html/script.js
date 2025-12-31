// Existing code remains...

// Add custom cursor functionality
document.addEventListener('DOMContentLoaded', () => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-dot-outline');
    
    // Show cursor elements
    setTimeout(() => {
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
    }, 1000);
    
    // Update cursor position
    window.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        // Add slight delay to outline for effect
        setTimeout(() => {
            cursorOutline.style.left = e.clientX + 'px';
            cursorOutline.style.top = e.clientY + 'px';
        }, 50);
    });
    
    // Add cursor hover effect
    const hoverElements = document.querySelectorAll('a, .btn, .menu-toggle');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.backgroundColor = 'rgba(255, 51, 51, 0.3)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.backgroundColor = 'rgba(255, 51, 51, 0.2)';
        });
    });
    
    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorOutline.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
    });
});

// Add animation for animate-on-scroll elements
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Animate skill bars when they come into view
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const windowHeight = window.innerHeight;
    
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const barVisible = 150;
        
        if (barTop < windowHeight - barVisible) {
            // Get width from inline style or data attribute
            const width = bar.parentElement.previousElementSibling.textContent;
            const percentage = width.match(/\d+/)[0] + '%';
            bar.style.width = percentage;
        }
    });
}

// Update document ready function
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all animations
    animateOnScroll();
    animateSkillBars();
    
    // Listen for scroll events
    window.addEventListener('scroll', () => {
        animateOnScroll();
        animateSkillBars();
        revealOnScroll();
    });
});

// Add typing animation effect to hero heading
document.addEventListener('DOMContentLoaded', () => {
    const heroHeading = document.querySelector('.hero-text h1');
    const originalText = heroHeading.textContent;
    
    // Clear the original text
    heroHeading.textContent = '';
    
    // Add typing animation
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heroHeading.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing animation after a short delay
    setTimeout(typeWriter, 500);
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});

// File baru: mesh-animation.js

class MeshAnimation {
    constructor(options = {}) {
        this.options = {
            color: options.color || 'rgba(255, 51, 51, 0.8)',
            pointsNumber: options.pointsNumber || 15,
            maxDistance: options.maxDistance || 150,
            maxConnections: options.maxConnections || 5,
            speed: options.speed || 1,
            canvas: options.canvas || document.createElement('canvas'),
            onlyOnClick: options.onlyOnClick || false,  // Changed to false for continuous animation
            alwaysAnimate: options.alwaysAnimate || true  // New option for continuous animation
        };
        
        this.points = [];
        this.mouse = { x: window.innerWidth/2, y: window.innerHeight/2, radius: 100 };
        this.isMouseDown = false;
        this.init();
    }
    
    init() {
        const canvas = this.options.canvas;
        document.body.appendChild(canvas);
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '-1';
        canvas.style.pointerEvents = 'none';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        this.ctx = canvas.getContext('2d');
        
        // Responsive canvas
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            this.initPoints();
        });
        
        // Track mouse position
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        
        // Handle click events
        window.addEventListener('mousedown', () => {
            this.isMouseDown = true;
            // Create additional points at mouse position when clicked
            if (this.options.onlyOnClick || this.options.alwaysAnimate) {
                for (let i = 0; i < 3; i++) {
                    this.points.push({
                        x: this.mouse.x,
                        y: this.mouse.y,
                        size: Math.random() * 2 + 1,
                        speedX: (Math.random() - 0.5) * 5,
                        speedY: (Math.random() - 0.5) * 5
                    });
                }
            }
        });
        
        window.addEventListener('mouseup', () => {
            this.isMouseDown = false;
        });
        
        this.initPoints();
        this.animate();
    }
    
    initPoints() {
        this.points = [];
        const numberOfPoints = this.options.pointsNumber;
        
        for (let i = 0; i < numberOfPoints; i++) {
            this.points.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * this.options.speed,
                speedY: (Math.random() - 0.5) * this.options.speed
            });
        }
    }
    
    drawLines() {
        for (let i = 0; i < this.points.length; i++) {
            let connections = 0;
            
            for (let j = i + 1; j < this.points.length; j++) {
                const dx = this.points[i].x - this.points[j].x;
                const dy = this.points[i].y - this.points[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.options.maxDistance && connections < this.options.maxConnections) {
                    connections++;
                    
                    // Draw line with opacity based on distance
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = this.options.color;
                    this.ctx.lineWidth = 1 - distance / this.options.maxDistance;
                    this.ctx.moveTo(this.points[i].x, this.points[i].y);
                    this.ctx.lineTo(this.points[j].x, this.points[j].y);
                    this.ctx.stroke();
                    this.ctx.closePath();
                }
            }
        }
    }
    
    updatePoints() {
        for (let i = 0; i < this.points.length; i++) {
            // Move points
            this.points[i].x += this.points[i].speedX;
            this.points[i].y += this.points[i].speedY;
            
            // Bounce off edges
            if (this.points[i].x < 0 || this.points[i].x > window.innerWidth) {
                this.points[i].speedX = -this.points[i].speedX;
            }
            
            if (this.points[i].y < 0 || this.points[i].y > window.innerHeight) {
                this.points[i].speedY = -this.points[i].speedY;
            }
            
            // Remove points that are too far from where they were created
            // but only if we have more than the initial number of points
            if (this.points.length > this.options.pointsNumber && i >= this.options.pointsNumber) {
                if (
                    this.points[i].x < -50 ||
                    this.points[i].x > window.innerWidth + 50 ||
                    this.points[i].y < -50 ||
                    this.points[i].y > window.innerHeight + 50
                ) {
                    this.points.splice(i, 1);
                    i--;
                }
            }
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        
        // Always animate when alwaysAnimate is true
        if (this.options.alwaysAnimate || (!this.options.onlyOnClick || this.isMouseDown)) {
            this.updatePoints();
            this.drawLines();
        }
        
        requestAnimationFrame(this.animate.bind(this));
    }
}
// Initialize the mesh animation
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    canvas.classList.add('mesh-canvas');
    
    new MeshAnimation({
        color: 'rgb(99, 22, 172)',  // Warna ungu
        pointsNumber: 60,     // Ditingkatkan dari 15 menjadi 50
        maxDistance: 250,     // Ditingkatkan dari 150 menjadi 200
        maxConnections: 15,    // Ditingkatkan dari 5 menjadi 8
        speed: 0.6,           // Bisa disesuaikan jika perlu
        canvas: canvas,
        onlyOnClick: false,
        alwaysAnimate: true
    });

       // Inisialisasi Typed.js
       var typed = new Typed('#changing-text', {
        strings: ['Fauzi Noorsyabani', 'Software Engineer', 'Frontend Engineer', 'PUBG Player'],
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 2000,
        startDelay: 500,
        loop: true
      });
});



