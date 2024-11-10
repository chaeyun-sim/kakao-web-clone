import { AppContainer, MainContainer } from './App.styles';
import Layout from './components/layout/index';
import HelpArea from './components/MainPage/HelpArea';
import NewsArea from './components/MainPage/NewsArea';
import ResponsibleArea from './components/MainPage/ResponsibleArea';
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
        <ResponsibleArea />
        <HelpArea />
      </AppContainer>
    </Layout>
  );
}

export default App;