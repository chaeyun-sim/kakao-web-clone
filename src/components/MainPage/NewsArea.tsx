import { useMediaQuery } from 'react-responsive';
import { cardNews, textNews } from '../../constants/news';
import Card from '../common/Card/Card';
import SectionTitle from '../common/SectionTitle';
import { SectionContainer } from './common.styles';
import { BottomWrapper, InnerNews, MoreBox, MoveWrapper, TextBox, TopWrapper } from './NewsArea.styles';
import Icon from '../common/Icon';
import { useState } from 'react';
import TextNews from '../TextNews';
import Carousel from '../common/Carousel/Carousel';

const NewsArea = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1023 })
  const isMedium = useMediaQuery({ maxWidth: 1439 });
  const [isOptionOpen, setIsOptionOpen] = useState(-1)

  const handleOpenOption = (index: number) => setIsOptionOpen(index + 1);
  const handleCloseOption = () => setIsOptionOpen(0);

	return (
    <SectionContainer>
      <SectionTitle
        text="오늘의 뉴스"
        iconUrl="https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/calendar/light/ico_date9.gif"
      />
      <InnerNews>
        <TopWrapper>
          {isSmallScreen ? (
            <Carousel noLoop>
              {cardNews.map(item => (
                <>
                  <Card
                    key={item.title}
                    isFromNews
                    cardData={item}
                    largeSize={item.largeSize}
                  >
                    <Card.Wrapper>
                      <Card.Header />
                      <Card.Content />
                      <Card.Tags />
                      <Card.Menu />
                    </Card.Wrapper>
                    <Card.Trigger />
                  </Card>
                  <Carousel.Arrow />
                </>
              ))}
            </Carousel>
          ) : (
            cardNews.map(item => (
              <Card
                key={item.title}
                isFromNews
                cardData={item}
                largeSize={item.largeSize}
              >
                <Card.Wrapper>
                  <Card.Header />
                  <Card.Content />
                  <Card.Tags />
                  <Card.Menu />
                </Card.Wrapper>
                <Card.Trigger />
              </Card>
            ))
          )}
        </TopWrapper>
        <BottomWrapper>
          {isSmallScreen ? (
            <div>
              <Carousel>
                {textNews.map((item, index) => (
                  <div key={item.title}>
                    <TextNews
                      key={item.title}
                      {...item}
                      index={index}
                      isOpen={isOptionOpen === index + 1}
                      onOpen={handleOpenOption}
                      onClose={handleCloseOption}
                    />
                    <Carousel.Navigation isFromNews />
                  </div>
                ))}
              </Carousel>
              <MoveWrapper>
                {['전체뉴스', '보도자료', '참고자료'].map(text => (
                  <MoreBox
                    key={text}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <strong>{text}</strong>
                    <TextBox>
                      {!isMedium && <span>바로가기</span>}
                      <Icon iconName="go-button" size={24} />
                    </TextBox>
                  </MoreBox>
                ))}
              </MoveWrapper>
            </div>
          ) : (
            <div style={{ display: 'flex' }}>
              {textNews.map((news, index) => (
                <TextNews
                  key={news.title}
                  {...news}
                  index={index}
                  isOpen={isOptionOpen === index + 1}
                  onOpen={handleOpenOption}
                  onClose={handleCloseOption}
                />
              ))}
            </div>
          )}
          {!isMedium && (
            <MoveWrapper>
              {['전체뉴스', '보도자료', '참고자료'].map(text => (
                <MoreBox
                  key={text}
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <strong>{text}</strong>
                  <TextBox>
                    {!isMedium && <span>바로가기</span>}
                    <Icon iconName="go-button" size={24} />
                  </TextBox>
                </MoreBox>
              ))}
            </MoveWrapper>
          )}
        </BottomWrapper>
      </InnerNews>
    </SectionContainer>
  );
};

export default NewsArea;