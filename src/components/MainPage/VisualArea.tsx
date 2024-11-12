import { useState } from 'react';
import Icon from '../common/Icon';
import { Container, InnerArea, InnerBottom, InnerTop, PreloadImage, TitleBox, VisualWrapper } from './VisualArea.styles';
import { useMediaQuery } from 'react-responsive';
import { MAIN_LINK } from '../../constants/link';

const VisualArea = () => {
  const isMobileScreen = useMediaQuery({ maxWidth: 767 })
  const [isIconHovered, setIsIconHovered] = useState(false);

  return (
    <Container>
      <PreloadImage />
      <InnerArea>
        <VisualWrapper aria-label="배너">
          <video
            poster="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/heroVisual/4c222124019200001.png?type=thumb&opt=C1424x808.fwebp"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            aria-hidden="true"
            width={1424}
            height={808}
          >
            <source
              src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/heroVisual/4c2201fa019200001.mp4"
              type="video/mp4"
            />
          </video>
        </VisualWrapper>
      </InnerArea>
      <InnerTop>
        <a href={MAIN_LINK} aria-label="카카오 소식 모아보기">
          <img
            src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/report/c925e9e0018c00001.gif"
            style={{ height: 'inherit' }}
          />
        </a>
      </InnerTop>
      {isMobileScreen && (
        <TitleBox>
          <strong>더 가깝게, 카카오</strong>
        </TitleBox>
      )}
      <InnerBottom>
        더 알아보기{' '}
        <div
          onMouseOver={() => setIsIconHovered(true)}
          onMouseOut={() => setIsIconHovered(false)}
          style={{ marginBottom: '-4px' }}
          aria-label="더 알아보기"
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