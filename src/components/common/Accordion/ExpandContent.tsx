import { PropsWithChildren } from 'react';
import { useAccordion } from './context';

const ExpandContent = ({children}: PropsWithChildren) => {
	const { isOpen } = useAccordion();

	if (!isOpen) return null;
	
	return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', paddingBottom: '20px', borderBottom: '1px solid #e6e6e6' }}>
      {children}
    </div>
  );
};

export default ExpandContent;