import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

const Header = () => {

  return (
    <HeaderContainer>
      <HeaderContent>
        <Wrapper>
          <Logo src="/icons/logo.svg" alt="logo" />
        </Wrapper>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 92px;
  position: fixed;
  background-color: white;

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
    max-width: 384px;
  `}
`;

const Wrapper = styled.div`
	height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  padding-top: 30px;
  width: 74px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;