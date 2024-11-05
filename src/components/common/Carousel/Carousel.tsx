/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, PropsWithChildren, useRef, useState } from 'react';
import Slider from 'react-slick';
import Item from './Item';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './slick.css'
import Navigation from './Navigation';
import { CarouselContext } from './context';

interface IProps {
	hasNavigation?: boolean;
}

const Carousel = ({ children }: PropsWithChildren<IProps>) => {
	const sliderRef = useRef<Slider>(null);
	const [currentSlide, setCurrentSlide] = useState(0);
	const items = Children.toArray(children).length;

	const onSetCurrentSlide = (value: number) => {
		(sliderRef.current as any)?.slickGoTo(value);
	}
	
	const onSlideNext = () => {
		(sliderRef.current as any)?.slickNext();
	}

	const onSlidePrev = () => {
		(sliderRef.current as any)?.slickPrev();
	}

  const settings = {
    dots: false,
    arrows: false,
		infinite: true,
		fade: true,
		draggable: true,
    speed: 500,
    slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		vertical: false,
		beforeChange: (_: number, next: number) => {
      setCurrentSlide(next);
    },
  };

	return (
    <CarouselContext.Provider
      value={{
        items,
        currentSlide,
        onSetCurrentSlide,
        onSlideNext,
        onSlidePrev,
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </CarouselContext.Provider>
  );
};

Carousel.Item = Item;
Carousel.Navigation = Navigation;

export default Carousel;