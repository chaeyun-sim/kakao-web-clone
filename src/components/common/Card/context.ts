import { createContext, useContext } from 'react';
import { Story } from '../../../constants/stories';

export interface CardContextType {
  isMenuOpen: boolean;
  onOpenMenu: () => void;
  onCloseMenu: () => void;
  isFromNews?: boolean;
  data: Story & {date?: string};
}

export const CardContext = createContext<CardContextType | undefined>(undefined);

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) throw new Error();
  return context;
};
