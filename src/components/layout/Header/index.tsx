import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

const Header = () => {
  const isMobileScreen = useMediaQuery({ maxWidth: 1023 })
  const utilIconData = isMobileScreen ? ['search', 'hamburger'] : ['search', 'language', 'moon']
  const iconSize = isMobileScreen ? 28 : 24

  const [hoveredItem, setHoveredItem] = useState('')
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const listItemColor = (item: string) =>
    hoveredItem === item || !hoveredItem ? 'black' : 'gray';

  const handleMouseHover = (item: string) => setHoveredItem(item)
  const handleMouseOut = () => setHoveredItem('')
  const handleScroll = () => setIsScrolled(window.scrollY > 0);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <HeaderContent>
        <LogoArea>
          <Logo src="/icons/logo.svg" alt="logo" />
        </LogoArea>
        {!isMobileScreen && (
          <Navigation>
            <List>
              {[
                '소개',
                '이야기',
                '기술과 서비스',
                '약속과 책임',
                '뉴스',
                '투자정보',
              ].map(item => (
                <ListItem
                  key={item}
                  onMouseOver={() => handleMouseHover(item)}
                  onMouseOut={handleMouseOut}
                  color={listItemColor(item)}
                >
                  {item}
                  {item === '투자정보' && (
                    <img
                      src={`data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='9' fill='none'%3E%3Cpath d='M1.794 1.074h6.148V7.22m0-6.146L1.378 7.638' stroke='%23${listItemColor(item) === 'black' ? '000' : '888'}' stroke-width='1.3'/%3E%3C/svg%3E`}
                      style={{ marginLeft: '4px' }}
                    />
                  )}
                </ListItem>
              ))}
            </List>
          </Navigation>
        )}
        <UtilArea>
          {utilIconData.map(item => (
            <UtilIcon
              key={item}
              src={`/icons/${item}.svg`}
              width={iconSize}
              height={iconSize}
              isMobileScreen={isMobileScreen}
              size={`${iconSize}px`}
            />
          ))}
        </UtilArea>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  width: 100%;
  height: 92px;
  position: fixed;
  background-color: white;
  border-bottom: ${({ isScrolled, theme }) =>
    isScrolled ? `1px solid ${theme.color.gray[200]}` : 'none'};

  ${mediaQuery.large`
		height: 92px;
	`}

  ${mediaQuery.medium`
		height: 84px;
	`}

  ${mediaQuery.small`
		height: 72px;
	`}

  ${mediaQuery.xsmall`
		height: 72px;
	`}
`;

const HeaderContent = styled.div`
  height: 100%;
  max-width: 1712px;
  margin: 0 auto;
  position: relative;

  ${mediaQuery.large`
    max-width: 1316px;
  `}

  ${mediaQuery.medium`
    max-width: 952px;
  `}

  ${mediaQuery.small`
    max-width: 712px;
  `}

  ${mediaQuery.xsmall`
    max-width: 412px;
  `}
`;

const LogoArea = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  padding-top: 30px;
  width: 74px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;

  ${mediaQuery.xsmall`
		left: 14px;
	`}
`;

const UtilArea = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 22px;
  display: flex;

  ${mediaQuery.xsmall`
		right: 14px;
	`}
`;

const UtilIcon = styled.img<{ isMobileScreen: boolean; size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  padding: 6px;
  border-radius: 100%;
  margin-left: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    background-color: ${({theme}) => theme.color.gray[200]}
  }

  ${mediaQuery.small`
		padding: 1px;
    border-radius: 0;
    margin-left: 22px;
	`}

  ${mediaQuery.xsmall`
		padding: 1px;
    border-radius: 0;
    margin-left: 22px;
	`}
`;

const Navigation = styled.nav`
  text-align: center;
  color: ${({ theme }) => theme.color.gray[500]};
  font-size: 14px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const List = styled.ul`
  font-size: 17px;
  letter-spacing: -0.5px;
  height: 100%;
  margin-top: 0px;
  margin-left: -40px;
`;

const ListItem = styled.li<{ color: 'gray' | 'black'}>`
  display: inline-block;
  position: relative;
  list-style: none;
  line-height: 84px;
  padding: 0 40px;
  color: ${({color, theme}) => color === 'black' ? 'black' : theme.color.gray[300]};
  cursor: pointer;

  ${mediaQuery.large`
    padding: 0 30px;
  `}

  ${mediaQuery.medium`
    padding: 0 20px;
  `}
`;