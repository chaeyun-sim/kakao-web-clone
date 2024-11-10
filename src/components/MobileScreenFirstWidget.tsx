/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from 'react-slick';
import { CountText, FirstItem2Text, NextArrow, NumberWrapper, PrevArrow, SingleNumber, SliderItemWrapper, Slides } from './MainPage/WidgetArea.styles';
import RollingNumber from './RollingNumber';
import { useRef, useState } from 'react';

interface IProps {
  numberStr: string;
}

const MobileScreenFirstWidget = ({ numberStr }: IProps) => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    speed: 500,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => {
      setCurrentSlide(next);
    },
  };

    const onSlidePrev = () => {
      (sliderRef.current as any)?.slickPrev();
    };

    const onSlideNext = () => {
      (sliderRef.current as any)?.slickNext();
    };

  return (
    <div style={{ width: '185%' }}>
      <PrevArrow onClick={onSlidePrev} />
      <NextArrow onClick={onSlideNext} />
      <Slides>{currentSlide + 1} / 3</Slides>
      <Slider {...settings} ref={sliderRef}>
        <div>
          <SliderItemWrapper>
            <img
              src="https://t1.kakaocdn.net/thumb/C680x440.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fwidget%2Fe6c6d56d019200001.png"
              alt="kakao calendar logo"
              style={{
                width: '100%',
                height: '100%',
              }}
            ></img>
          </SliderItemWrapper>
        </div>
        <div>
          <SliderItemWrapper>
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
                  {numberStr.split('').map((str, i) => (
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
            </div>
          </SliderItemWrapper>
        </div>
        <div>
          <SliderItemWrapper>
            <img
              src="https://t1.kakaocdn.net/thumb/C544x544.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fwidget%2F777385a5018d00001.png"
              alt="kakao impact logo"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            ></img>
          </SliderItemWrapper>
        </div>
      </Slider>
    </div>
  );
};

export default MobileScreenFirstWidget;