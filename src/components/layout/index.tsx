import { ReactNode } from 'react';
import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';
import Header from './Header';
import Footer from './Footer';

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
		<Container>
			<Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  width: 100%;
`;

const Content = styled.main`
  width: 100%;
  min-height: calc(100dvh - var(--header-height, 84px));
  max-width: 1712px;
  margin: 0 auto;

  ${mediaQuery.large`
    max-width: 1316px;
		padding-top: 92px;
  `}

  ${mediaQuery.medium`
    max-width: 952px;
		padding-top: 84px;
  `}

  ${mediaQuery.small`
    max-width: 712px;
		padding-top: 72px;
  `}

  ${mediaQuery.xsmall`
    max-width: 384px;
		padding-top: 72px;
  `}
`;