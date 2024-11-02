import Trigger from './Trigger';
import ExpandContent from './ExpandContent';
import { PropsWithChildren, useState } from 'react';
import { AccordionContext } from './context';

const Accordion = ({ children }: PropsWithChildren) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(prev => !prev);
	
	return (
    <AccordionContext.Provider value={{ isOpen, toggle }}>
			<div style={{ width: '100%' }}>{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.Trigger = Trigger;
Accordion.Content = ExpandContent;

export default Accordion;