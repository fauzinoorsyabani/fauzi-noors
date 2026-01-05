import { useEffect, useRef } from 'react';

const MeshBackground = () => {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const config = {
      color: 'rgb(131, 21, 234)',
      pointsNumber: 50,
      maxDistance: 200,
      maxConnections: 8,
      speed: 0.5
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
    };

    const initPoints = () => {
      pointsRef.current = [];
      for (let i = 0; i < config.pointsNumber; i++) {
        pointsRef.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * config.speed,
          speedY: (Math.random() - 0.5) * config.speed
        });
      }
    };

    const drawLines = () => {
      const points = pointsRef.current;
      for (let i = 0; i < points.length; i++) {
        let connections = 0;
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.maxDistance && connections < config.maxConnections) {
            connections++;
            const opacity = 1 - distance / config.maxDistance;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(131, 21, 234, ${opacity * 0.5})`;
            ctx.lineWidth = opacity;
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }

        // Draw connection to mouse
        const mouseDx = points[i].x - mouseRef.current.x;
        const mouseDy = points[i].y - mouseRef.current.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
        
        if (mouseDistance < 150) {
          const opacity = 1 - mouseDistance / 150;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(160, 60, 255, ${opacity * 0.8})`;
          ctx.lineWidth = opacity * 2;
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
          ctx.closePath();
        }
      }
    };

    const drawPoints = () => {
      const points = pointsRef.current;
      for (let i = 0; i < points.length; i++) {
        ctx.beginPath();
        ctx.arc(points[i].x, points[i].y, points[i].size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(131, 21, 234, 0.6)';
        ctx.fill();
        ctx.closePath();
      }
    };

    const updatePoints = () => {
      const points = pointsRef.current;
      for (let i = 0; i < points.length; i++) {
        points[i].x += points[i].speedX;
        points[i].y += points[i].speedY;

        // Bounce off edges
        if (points[i].x < 0 || points[i].x > window.innerWidth) {
          points[i].speedX = -points[i].speedX;
        }
        if (points[i].y < 0 || points[i].y > window.innerHeight) {
          points[i].speedY = -points[i].speedY;
        }

        // Mouse repel effect
        const dx = points[i].x - mouseRef.current.x;
        const dy = points[i].y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          points[i].x += (dx / distance) * force * 2;
          points[i].y += (dy / distance) * force * 2;
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updatePoints();
      drawLines();
      drawPoints();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: 'linear-gradient(180deg, #111111 0%, #0c0c0c 100%)' }}
    />
  );
};

export default MeshBackground;
