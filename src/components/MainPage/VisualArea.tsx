import { useState } from 'react';
import Icon from '../common/Icon';
import { Container, InnerArea, InnerBottom, InnerTop, VisualWrapper } from './VisualArea.styles';

const VisualArea = () => {
  const [isIconHovered, setIsIconHovered] = useState(false);

  return (
    <Container>
      <InnerArea>
        <VisualWrapper>
          <video
            src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/heroVisual/4c2201fa019200001.mp4"
            poster="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/heroVisual/4c222124019200001.png?type=thumb&opt=C1424x808.fwebp"
            autoPlay
            muted
            loop
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          ></video>
        </VisualWrapper>
      </InnerArea>
      <InnerTop>
        <a href="/">
          <img
            src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/report/c925e9e0018c00001.gif"
            style={{ height: 'inherit' }}
          />
        </a>
      </InnerTop>
      <InnerBottom>
        더 알아보기{' '}
        <div
          onMouseOver={() => setIsIconHovered(true)}
          onMouseOut={() => setIsIconHovered(false)}
          style={{ marginBottom: '-4px' }}
        >
          <Icon
            iconName={isIconHovered ? 'go-button-sm-gray' : 'go-button-sm'}
            size={{
              default: 64,
              large: 48,
              medium: 24,
              small: 24,
              xsmall: 24,
            }}
          />
        </div>
      </InnerBottom>
    </Container>
  );
};

export default VisualArea;