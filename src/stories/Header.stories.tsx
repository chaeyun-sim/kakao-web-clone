import { Meta, StoryObj } from '@storybook/react/*';
import { withThemeProvider } from 'storybook-addon-theme-provider';
import Header from '../components/layout/Header/index';
import { Provider } from '../providers/Provider';

const meta: Meta<typeof Header> = {
  title: 'Common/Layout/Header',
  component: Header,
  decorators: [withThemeProvider(Provider)],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};