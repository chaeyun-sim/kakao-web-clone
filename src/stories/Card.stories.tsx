import { Meta, StoryObj } from '@storybook/react/*';
import { withThemeProvider } from 'storybook-addon-theme-provider';
import { Provider } from '../providers/Provider';
import Carousel from '../components/common/Carousel/Carousel';
import Card from '../components/common/Card/Card';
import { stories } from '../constants/stories';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  decorators: [withThemeProvider(Provider)],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Card cardData={stories[0]}>
        <Card.Wrapper>
          <Card.Header />
          <Card.Content />
          <Card.Tags />
          <Card.Menu />
        </Card.Wrapper>
        <Card.Trigger />
      </Card>
    );
  },
};

export const ImageOnTop: Story = {
  args: {},
  render: () => {
    return (
      <Card cardData={stories[0]}>
        <Card.Wrapper>
          <Card.Header />
          <Card.Content />
          <Card.Tags />
          <Card.Trigger />
        </Card.Wrapper>
        <Card.Menu />
      </Card>
    );
  },
};