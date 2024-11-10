import styled from 'styled-components';
import mediaQuery from './utils/mediaQuery';

export const AppContainer = styled.article`
  max-width: 100%;
  padding-top: 90px;
  padding-bottom: 200px;
  margin: 0 auto;
  ${mediaQuery.large`
    padding-top: 0;
    padding-bottom: 123px;
    position: relative;
  `}

  ${mediaQuery.medium`
    padding-bottom: 80px;
  `}
`;

export const MainContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  ${mediaQuery.small`
    display: block;
    justify-content: flex-start;
  `}
`;