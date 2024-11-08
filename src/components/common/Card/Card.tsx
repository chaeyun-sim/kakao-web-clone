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

const Card = ({children}: PropsWithChildren) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
    <CardContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <Container>
        <InnerContainer>{children}</InnerContainer>
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

const InnerContainer = styled.div`
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
`