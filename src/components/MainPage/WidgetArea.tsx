import Carousel from '../common/Carousel/Carousel';
import { secondWidgetData } from '../../constants/widget';
import { Badge, Blur, Container, CountText, FirstItem2Text, FirstWidget, GroupText, InnerWrapper, KakaoGroupIcon, MapImage, NumberWrapper, SecondWidget, SingleNumber, Tag, TagWrapper, ThirdWidget, Title, Wrapper, WrapperWithText } from './WidgetArea.styles';
import RollingNumber from '../RollingNumber';

const WidgetArea = () => {
  const NUMBER = '61,799,714';

  return (
    <Container>
      <FirstWidget>
        <Carousel>
          <Carousel.Item>
            <img
              src="https://t1.kakaocdn.net/thumb/C544x544.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fwidget%2Fe6c6c04d019200001.png"
              alt="kakao calendar logo"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            ></img>
            <Carousel.Navigation isFirst />
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fae100',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <FirstItem2Text>기부에 함께 해주신 착한 마음들</FirstItem2Text>
              <div>
                <NumberWrapper>
                  {NUMBER.split('').map((str, i) => (
                    <SingleNumber key={i}>
                      {str === ',' ? (
                        <span>,</span>
                      ) : (
                        <RollingNumber
                          targetNumber={Number(str) + 10}
                          duration={1000}
                          delay={i * 250}
                        />
                      )}
                    </SingleNumber>
                  ))}
                </NumberWrapper>
                <CountText>건</CountText>
              </div>
              <Carousel.Navigation isFirst />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://t1.kakaocdn.net/thumb/C544x544.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fwidget%2F777385a5018d00001.png"
              alt="kakao impact logo"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            ></img>
            <Carousel.Navigation isFirst />
          </Carousel.Item>
        </Carousel>
      </FirstWidget>
      <SecondWidget>
        <Carousel>
          {secondWidgetData.map(item => (
            <Carousel.Item key={item.title}>
              <WrapperWithText>
                <Badge badgeColor={item.badgeColor as 'yellow' | 'black'}>
                  {item.badgeText}
                </Badge>
                <Title>{item.title}</Title>
                <TagWrapper>
                  {item.tags.map(tag => (
                    <Tag key={tag}>#{tag}</Tag>
                  ))}
                </TagWrapper>
                <Carousel.Navigation />
              </WrapperWithText>
            </Carousel.Item>
          ))}
        </Carousel>
      </SecondWidget>
      <ThirdWidget>
        <Carousel>
          <Carousel.Item isLastItem hasArrow>
            <Wrapper fillColor="#fae100" backgroundColor="#fae100">
              <InnerWrapper>
                <KakaoGroupIcon
                  src="https://t1.kakaocdn.net/thumb/C80x80.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fwidget%2Fc9200ae4018c00001.png"
                  alt="kakao group"
                />
                <GroupText>카카오 그룹</GroupText>
              </InnerWrapper>
            </Wrapper>
          </Carousel.Item>
          <Carousel.Item hasArrow>
            <Wrapper fillColor="#ccc" backgroundColor="#fff">
              <Blur />
              <MapImage src="https://t1.kakaocdn.net/thumb/C570x328.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fwidget%2F34daf24d018d00001.gif" />
              <InnerWrapper>
                <GroupText style={{ color: 'white', zIndex: 2 }}>
                  연혁
                </GroupText>
              </InnerWrapper>
            </Wrapper>
          </Carousel.Item>
        </Carousel>
      </ThirdWidget>
    </Container>
  );
};

export default WidgetArea;