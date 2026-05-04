import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Configuração de suavização
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (isHidden) setIsHidden(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('[role="button"]') ||
        target.closest('.hitech-card') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeaveWindow = () => setIsHidden(true);
    const handleMouseEnterWindow = () => setIsHidden(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [mouseX, mouseY, isHidden]);

  return (
    <motion.div 
      className={styles.cursorContainer}
      style={{
        left: smoothX,
        top: smoothY,
        opacity: isHidden ? 0 : 1
      }}
    >
      {/* Círculo Principal */}
      <motion.div 
        className={styles.mainCursor}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(0, 243, 255, 0.1)' : 'rgba(0, 243, 255, 0)',
          borderColor: isHovering ? 'rgba(0, 243, 255, 0.5)' : 'rgba(0, 243, 255, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />

      {/* Ponto Central / Mira */}
      <motion.div 
        className={styles.dotCursor}
        animate={{
          scale: isHovering ? 0.5 : 1,
        }}
      />

      {/* Crosshair Interno (opcional, para visual hitech) */}
      {isHovering && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.crosshair}
        />
      )}
    </motion.div>
  );
};

export default CustomCursor;
