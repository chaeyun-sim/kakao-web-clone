import React from 'react';
import styled from 'styled-components';
import { useCarousel } from './context';
import mediaQuery from '../../../utils/mediaQuery';

const Arrow = () => {
	const { currentSlide, items, onSlidePrev, onSlideNext } = useCarousel();

	return (
    <ArrowBox>
      <LeftArrow
        onClick={onSlidePrev}
				style={{
					opacity: currentSlide === 0 ? 0.5 : 1,
					cursor: currentSlide === 0 ? 'default' : 'pointer'
				}}
      />
      <RightArrow
        onClick={onSlideNext}
				style={{
					opacity: currentSlide === items - 1 ? 0.5 : 1,
					cursor: currentSlide === items - 1 ? 'default' : 'pointer'
				}}
      />
    </ArrowBox>
  );
};

export default Arrow;

const ArrowBox = styled.div`
  width: 100%;
  position: absolute;
  z-index: 60;
  height: 32px;
  top: 220px;
`;

const LeftArrow = styled.div`
  ${mediaQuery.small`
		position: absolute;
		width: 32px;
		height: 32px;
		left: 18px;
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: 50%;
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Ccircle cx='16' cy='16' r='16' transform='matrix(-1 0 0 1 32 -.004)' fill='%23000'/%3E%3Cpath d='M19 20.586l-4.58-4.59 4.58-4.59-1.41-1.41-6 6 6 6 1.41-1.41z' fill='%23fff'/%3E%3C/svg%3E");
	`}

	${mediaQuery.xsmall`
		left: 20px;
	`}
`;

const RightArrow = styled.div`
  ${mediaQuery.small`
		position: absolute;
		width: 32px;
		height: 32px;
		right: 18px;
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: 50%;
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23000'/%3E%3Cpath d='M13 20.59L17.58 16 13 11.41 14.41 10l6 6-6 6L13 20.59z' fill='%23fff'/%3E%3C/svg%3E");
	`}

  ${mediaQuery.xsmall`
		right: 20px;
	`}
`;