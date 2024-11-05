import { PropsWithChildren } from 'react';
import { useAccordion } from './context';
import styled from 'styled-components';

const ExpandContent = ({children}: PropsWithChildren) => {
	const { isOpen } = useAccordion();

	if (!isOpen) return null;
	
	return <Content>{children}</Content>;
};

export default ExpandContent;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 1px solid #e6e6e6;
  font-size: 12px;
  color: ${({theme}) => theme.color.gray[300]}
`;