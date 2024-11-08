import { createContext, useContext } from 'react';

interface CardContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export const CardContext = createContext<CardContextType | undefined>(undefined);

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) throw new Error();
  return context;
};
