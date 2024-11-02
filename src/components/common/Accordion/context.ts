import { createContext, useContext } from 'react';

interface AccordionContextType {
  isOpen: boolean;
  toggle: () => void;
}

export const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined,
);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error();
  }
  return context;
};
