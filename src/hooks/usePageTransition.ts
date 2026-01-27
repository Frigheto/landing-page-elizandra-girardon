import { useContext } from 'react';
import { NavigationContext } from '@/contexts/NavigationContext';

export const usePageTransition = () => {
  const context = useContext(NavigationContext);
  
  if (!context) {
    throw new Error('usePageTransition deve ser usado dentro de NavigationProvider');
  }
  
  return context;
};
