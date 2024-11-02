import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  width: 100%;
  height: 92px;
  position: fixed;
  background-color: white;
  border-bottom: ${({ isScrolled, theme }) =>
    isScrolled ? `1px solid ${theme.color.gray[200]}` : 'none'};
  z-index: 10000;

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
    background-color: ${({ theme }) => theme.color.gray[200]};
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

const ListItem = styled.li<{ color: 'gray' | 'black' }>`
  display: inline-block;
  position: relative;
  list-style: none;
  line-height: 84px;
  padding: 0 40px;
  color: ${({ color, theme }) =>
    color === 'black' ? 'black' : theme.color.gray[300]};
  cursor: pointer;

  ${mediaQuery.large`
    padding: 0 30px;
  `}

  ${mediaQuery.medium`
    padding: 0 20px;
  `}
`;

export {Navigation, HeaderContainer, HeaderContent, List, ListItem, Logo, LogoArea, UtilArea, UtilIcon}