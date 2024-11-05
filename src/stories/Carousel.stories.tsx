import { Meta, StoryObj } from '@storybook/react/*';
import { withThemeProvider } from 'storybook-addon-theme-provider';
import { Provider } from '../providers/Provider';
import Carousel from '../components/common/Carousel/Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  decorators: [withThemeProvider(Provider)],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Carousel>
        {/* <Carousel.Item>1</Carousel.Item>
        <Carousel.Item>2</Carousel.Item> */}
      </Carousel>
    );
  }
};