import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { useAccordion } from './context';

interface IProps {
	isFirstItem?: boolean;
}

const Trigger = ({ children, isFirstItem = false }: PropsWithChildren<IProps>) => {
	const { isOpen, toggle } = useAccordion();

	return (
    <Container onClick={toggle} isFirstItem={isFirstItem} isOpen={isOpen}>
      {children}
      <img
        src={isOpen ? '/icons/to-top.svg' : '/icons/to-bottom.svg'}
        width={14}
        height={14}
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />
    </Container>
  );
};

export default Trigger;

const Container = styled.button<{ isFirstItem: boolean; isOpen: boolean }>`
  position: relative;
  overflow: hidden;
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.53;
  letter-spacing: -0.2px;
  margin-bottom: 0;
  padding: 16px 0;
  text-align: left;
  border-bottom: ${({ isOpen }) => (isOpen ? 'none' : '1px solid #e6e6e6')};
  border-top: ${({ isFirstItem }) =>
    isFirstItem ? '1px solid #e6e6e6' : 'none'};
`;