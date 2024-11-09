import Header from './Header';
import Tags from './Tags';
import Content from './Content';
import Menu from './Menu';
import { CardContext } from './context';
import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';
import Wrapper from './Wrapper';
import Trigger from './Trigger';
import Image from './Image';
import { useMediaQuery } from 'react-responsive';

interface IProps {
  largeSize?: 'imageTop' | 'imageBottom'
}

const Card = ({ children, largeSize }: PropsWithChildren<IProps>) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMedium = useMediaQuery({ maxWidth: 1023})

  return (
    <CardContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <Container>
        <InnerContainer largeSize={largeSize} isMedium={isMedium}>
          {children}
        </InnerContainer>
      </Container>
    </CardContext.Provider>
  );
};

Card.Header = Header;
Card.Tags = Tags;
Card.Content = Content;
Card.Menu = Menu;
Card.Wrapper = Wrapper;
Card.Trigger = Trigger;
Card.Image = Image;

export default Card;

const Container = styled.div`
  width: 416px;
  height: 537px;
  padding: 0 8px;
  display: inline-block;
  position: relative;

  ${mediaQuery.large`
		width: 317px;
		height: 439px;
	`}

  ${mediaQuery.medium`
		width: 308px;
		height: 365px;
		padding: 0 6px;
	`}

	${mediaQuery.small`
		width: 232px;
		height: 328px;
		padding: 0 4px;
	`}

	${mediaQuery.xsmall`
		width: 252px;
		height: 309px;
		padding: 0 6px;
	`}
`;

const InnerContainer = styled.div<
  Pick<IProps, 'largeSize'> & { isMedium: boolean }
>`
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  background-color: ${({ theme }) => theme.color.gray[100]};
  width: 100%;
  height: 100%;
  border-radius: 24px;

  ${mediaQuery.medium`
		border-radius: 16px;
	`}

  ${mediaQuery.xsmall`
		height: auto;
	`}
`;