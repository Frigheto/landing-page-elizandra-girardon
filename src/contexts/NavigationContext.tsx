import React, { createContext, useState, useCallback } from 'react';

interface NavigationContextType {
  isTransitioning: boolean;
  startTransition: () => void;
  endTransition: () => void;
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = useCallback(() => {
    setIsTransitioning(true);
  }, []);

  const endTransition = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  return (
    <NavigationContext.Provider value={{ isTransitioning, startTransition, endTransition }}>
      {children}
    </NavigationContext.Provider>
  );
};
