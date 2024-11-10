import { AppContainer, MainContainer } from './App.styles';
import Layout from './components/layout/index';
import NewsArea from './components/MainPage/NewsArea';
import ServiceArea from './components/MainPage/ServiceArea';
import StoryArea from './components/MainPage/StoryArea';
import VisualArea from './components/MainPage/VisualArea';
import WidgetArea from './components/MainPage/WidgetArea';

function App() {
  return (
    <Layout>
      <AppContainer>
        <MainContainer>
          <VisualArea />
          <WidgetArea />
        </MainContainer>
        <StoryArea />
        <ServiceArea />
        <NewsArea />
      </AppContainer>
    </Layout>
  );
}

export default App;