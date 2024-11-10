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
import { Story } from '../../../constants/stories';

interface IProps {
  largeSize?: 'imageTop' | 'imageBottom';
  isFromNews?: boolean;
  cardData: Story;
}

const Card = ({
  children,
  largeSize,
  isFromNews = false,
  cardData,
}: PropsWithChildren<IProps>) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMedium = useMediaQuery({ maxWidth: 1439 });

  return (
    <CardContext.Provider
      value={{
        data: cardData!,
        isMenuOpen,
        onOpenMenu: () => setIsMenuOpen(true),
        onCloseMenu: () => setIsMenuOpen(false),
        isFromNews: isFromNews!,
      }}
    >
      <Container isFromNews={isFromNews}>
        <InnerContainer largeSize={largeSize} isMedium={isMedium}>
          {!isMedium && cardData?.largeSize === 'imageTop' && (
            <Image largeSize={cardData.largeSize} />
          )}
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

export default Card;

const Container = styled.div<Pick<IProps, 'isFromNews'>>`
  width: ${({ isFromNews }) => (isFromNews ? '560px' : '416px')};
  height: ${({ isFromNews }) => (isFromNews ? '689px' : '537px')};
  padding: 0 8px;
  display: inline-block;
  position: relative;

  ${mediaQuery.large`
		width: ${({ isFromNews }: Pick<IProps, 'isFromNews'>) => (isFromNews ? '428px' : '317px')};
		height: ${({ isFromNews }: Pick<IProps, 'isFromNews'>) => (isFromNews ? '621px' : '439px')};
	`}

  ${mediaQuery.medium`
		width: 308px;
    height: ${({ isFromNews }: Pick<IProps, 'isFromNews'>) => (isFromNews ? '424px' : '365px')};
		padding: 0 6px;
	`}

	${mediaQuery.small`
    width: ${({ isFromNews }: Pick<IProps, 'isFromNews'>) => (isFromNews ? '348px' : '232px')};
    height: ${({ isFromNews }: Pick<IProps, 'isFromNews'>) => (isFromNews ? '399px' : '328px')};
		padding: 0 4px;
	`}

	${mediaQuery.xsmall`
   width: ${({ isFromNews }: Pick<IProps, 'isFromNews'>) => (isFromNews ? '384px' : '232px')};
    height: ${({ isFromNews }: Pick<IProps, 'isFromNews'>) => (isFromNews ? 'auto' : '309px')};
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