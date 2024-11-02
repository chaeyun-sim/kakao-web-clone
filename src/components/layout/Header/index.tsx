import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import LinkIcon from '../../icons/link';
import { HeaderContainer, HeaderContent, List, ListItem, Logo, LogoArea, Navigation, UtilArea, UtilIcon } from './index.styles';

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
                    <LinkIcon
                      color={listItemColor(item) === 'black' ? '000' : '888'}
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