import styled, { keyframes } from 'styled-components';
import { useCardContext } from './context';
import mediaQuery from '../../../utils/mediaQuery';
import Icon from '../Icon';
import { useState } from 'react';

const Menu = () => {
  const { isMenuOpen, onCloseMenu } = useCardContext();
  const [hoveredItem, setHoveredItem] = useState('');
  const [isClosing, setIsClosing] = useState(false);

  if (!isMenuOpen) return null;

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
			onCloseMenu();
      setIsClosing(false);
    }, 600);
  };

  return (
    <CardMenu isClosing={isClosing}>
      <CloseButton onClick={handleClose}>
        <Icon iconName="close" style={{ width: 24, height: 24 }} />
      </CloseButton>
      <List>
        {['kakao', 'facebook', 'twitter', 'link'].map((item, index) => (
          <ShareIcon
						key={item}
						index={index}
            onMouseOver={() => setHoveredItem(item)}
            onMouseOut={() => setHoveredItem('')}
          >
            <button style={{ width: 'inherit', height: 'inherit' }}>
              <Icon
                iconName={
                  hoveredItem === item ? `share/${item}-hover` : `share/${item}`
                }
                style={{ width: 'inherit', height: 'inherit' }}
              />
            </button>
          </ShareIcon>
        ))}
      </List>
    </CardMenu>
  );
};

export default Menu;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const CardMenu = styled.div<{ isClosing: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 30;
  opacity: 1;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.55);
  animation: ${props => (props.isClosing ? fadeOut : fadeIn)} 0.6s ease-in-out;
`;

const CloseButton = styled.button`
  display: block;
  overflow: hidden;
  position: absolute;
  top: 44px;
  right: 30px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaQuery.large`
		top: 34px;
		right: 20px;
	`}

  ${mediaQuery.medium`
		top: 28px;
		right: 16px;
	`}

	${mediaQuery.small`
		top: 24px;
		right: 8px;
	`}
`;

const List = styled.ul`
  float: right;
  margin-top: 62px;
  margin-right: 17px;
  width: max-content;
  padding: 0;
`;


const slideDown = (index: number) => keyframes`
  from {
    transform: translateY(0);
    opacity: 0;
  }
  to {
    transform: translateY(${index * 8}px);
    opacity: 1;
  }
`;

const ShareIcon = styled.li<{ index: number }>`
  width: 36px;
  height: 36px;
  list-style: none;
  right: 0;
  margin-top: 8px;
  opacity: 0;
  animation: ${({index}) => slideDown(index)} 0.5s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;

  &:first-child {
    margin-top: 0;
  }

  ${mediaQuery.small`
    width: 24px;
    height: 24px;
  `}
`;