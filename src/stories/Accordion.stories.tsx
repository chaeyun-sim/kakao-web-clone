import { Meta, StoryObj } from '@storybook/react/*';
import { withThemeProvider } from 'storybook-addon-theme-provider';
import { Provider } from '../providers/Provider';
import Accordion from '../components/common/Accordion/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: [withThemeProvider(Provider)],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Accordion>
        <Accordion.Trigger>카카오 그룹의 서비스</Accordion.Trigger>
        <Accordion.Content>
          {['커뮤니케이션', '일상편의', '비즈니스', '쇼핑', '엔터테인먼트', '임팩트'].map(item => <div key={item}>{item}</div>)}
        </Accordion.Content>
      </Accordion>
    );
  }
};