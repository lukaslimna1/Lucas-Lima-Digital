import { useCallback } from 'react';

/**
 * Hook para gerenciar o efeito de spotlight (brilho seguindo o mouse) 
 * de forma performática, atualizando apenas o elemento sob o cursor.
 */
export const useMousePosition = () => {
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  }, []);

  return { handleMouseMove };
};
