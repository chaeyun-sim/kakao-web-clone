/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';
import { useCarousel } from './context';

const Item = ({
  children,
  isLastItem = false,
  hasArrow = false,
}: PropsWithChildren<{ isLastItem?: boolean; hasArrow?: boolean }>) => {
  const { onSlidePrev, onSlideNext } = useCarousel();

  return (
    <ItemWrapper isLastItem={isLastItem} aria-hidden="false">
      {children}
      {hasArrow && (
        <PrevArrow
          onClick={onSlidePrev}
          aria-label="이전 슬라이드 보기"
          aria-hidden={!hasArrow}
        />
      )}
      {hasArrow && (
        <NextArrow
          onClick={onSlideNext}
          aria-label="다음 슬라이드 보기"
          aria-hidden="false"
        />
      )}
    </ItemWrapper>
  );
};

export default Item;

const ItemWrapper = styled.div<{ isLastItem?: boolean }>`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: ${({ isLastItem }) => (isLastItem ? '24px 0 0 24px' : '24px')};
  cursor: pointer;

  ${mediaQuery.medium`
		border-radius: ${({ isLastItem }: { isLastItem: boolean }) => (isLastItem ? '16px 0 0 16px' : '16px')};
	`}

  ${mediaQuery.small`
    border-radius: 16px;
  `}
`;

const PrevArrow = styled.button`
  position: absolute;
  overflow: hidden;
  bottom: 0;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Ccircle opacity='.8' cx='16' cy='16' r='16' transform='matrix(-1 0 0 1 32 0)' fill='%23fff'/%3E%3Cpath d='M19 20.59L14.42 16 19 11.41 17.59 10l-6 6 6 6L19 20.59z' fill='%23000'/%3E%3C/svg%3E");
  z-index: 10;

  ${mediaQuery.large`
    width: 24px;
    height: 24px;
  `}

  ${mediaQuery.small`
    left: 12px;
  `}
  
  ${mediaQuery.xsmall`
    width: 32px;
    height: 32px;
  `}
`;

const NextArrow = styled.button`
  position: absolute;
  overflow: hidden;
  top: 50%;
  right: 22px;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Ccircle opacity='.8' cx='16' cy='16' r='16' fill='%23fff'/%3E%3Cpath d='M13 20.59L17.58 16 13 11.41 14.41 10l6 6-6 6L13 20.59z' fill='%23000'/%3E%3C/svg%3E");
  z-index: 10;

  ${mediaQuery.large`
    width: 24px;
    height: 24px;
    right: 19px;
  `}

  ${mediaQuery.small`
    right: 12px;
  `}

  ${mediaQuery.xsmall`
    width: 32px;
    height: 32px;
  `}
`;