import { Meta, StoryObj } from '@storybook/react/*';
import { withThemeProvider } from 'storybook-addon-theme-provider';
import { Provider } from '../providers/Provider';
import Footer from '../components/layout/Footer/index';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  decorators: [withThemeProvider(Provider)],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};