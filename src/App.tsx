import styled from 'styled-components';
import Layout from './components/layout/index';
import mediaQuery from './utils/mediaQuery';
import VisualArea from './components/MainPage/VisualArea';
import WidgetArea from './components/MainPage/WidgetArea';

function App() {
  return (
    <Layout>
      <Container>
        <MainContainer>
          <VisualArea />
          <WidgetArea />
        </MainContainer>
      </Container>
    </Layout>
  );
}

export default App;

const Container = styled.article`
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

  ${mediaQuery.xsmall`
    overflow: hidden;
  `}
`

const MainContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  ${mediaQuery.small`
    display: block;
    justify-content: flex-start;
  `}
`;