import { Container, MainContainer } from './App.styles';
import Layout from './components/layout/index';
import StoryArea from './components/MainPage/StoryArea';
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
        <StoryArea />
      </Container>
    </Layout>
  );
}

export default App;