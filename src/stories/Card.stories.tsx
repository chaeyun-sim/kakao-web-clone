import { Meta, StoryObj } from '@storybook/react/*';
import { withThemeProvider } from 'storybook-addon-theme-provider';
import { Provider } from '../providers/Provider';
import Carousel from '../components/common/Carousel/Carousel';
import Card from '../components/common/Card/Card';
import { useMediaQuery } from 'react-responsive';

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
      <Card>
        <Card.Wrapper>
          <Card.Header
            imageUrl="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/dd2b88f5018800001.png?type=thumb&opt=C72x72.fwebp"
            badgeText="임팩트"
          />
          <Card.Content title={'카카오가 꿈꾸는\n지속가능한 미래'}>
            <Card.Image
              imageUrl="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F85d56931018c00001.jpg"
              largeSize={'imageBottom'}
            />
          </Card.Content>
          <Card.Tags tagList={['ESG', 'ESG보고서', '약속과책임', '카카오']} />
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
    const isMedium = useMediaQuery({ maxWidth: 1439 });

    return (
      <Card>
        {!isMedium && (
          <Card.Image
            imageUrl="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F85d56931018c00001.jpg"
            largeSize={'imageTop'}
          />
        )}
        <Card.Wrapper>
          <Card.Header
            imageUrl="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/dd2b88f5018800001.png?type=thumb&opt=C72x72.fwebp"
            badgeText="임팩트"
          />
          <Card.Content title={'카카오가 꿈꾸는\n지속가능한 미래'}>
            {isMedium && (
              <Card.Image
                imageUrl="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F85d56931018c00001.jpg"
                largeSize={'imageBottom'}
              />
            )}
          </Card.Content>
          <Card.Tags tagList={['ESG', 'ESG보고서', '약속과책임', '카카오']} />
          <Card.Trigger />
        </Card.Wrapper>
        <Card.Menu />
      </Card>
    );
  },
};