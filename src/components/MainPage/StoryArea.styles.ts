import styled, { css } from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 200px;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.gray[500]};

  ${mediaQuery.large`
    padding-top: 120px;
  `}

  ${mediaQuery.medium`
    padding-top: 80px;
  `}

  ${mediaQuery.xsmall`
    margin: 0px -14px 0px;
  `}
`;


export const PlayIconWrapper = styled.div`
  overflow: hidden;
  margin-top: 11px;
  position: absolute;
  right: 0;

  ${mediaQuery.large`
    margin-top: 8px;
  `}

  ${mediaQuery.xsmall`
    margin: 20px auto 0;
    float: none;
    box-sizing: border-box;
    width: 100%;
    max-width: 384px;
    padding: 0 14px;
  `}
`;

export const PlayIcon = styled.button<{ isPlaying: boolean }>`
  background-image: ${({ isPlaying }) =>
    isPlaying
      ? `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' fill='none'%3E%3Cpath d='M50 28c0 12.15-9.85 22-22 22S6 40.15 6 28 15.85 6 28 6s22 9.85 22 22z' fill='%23000' stroke='%23000' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M24 19l14 9-14 9V19z' fill='%23fff'/%3E%3C/svg%3E")`
      : `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' fill='none'%3E%3Cpath d='M50 28c0 12.15-9.85 22-22 22S6 40.15 6 28 15.85 6 28 6s22 9.85 22 22z' fill='%23000' stroke='%23000' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M23.332 35V21m9.336 14V21' stroke='%23fff' stroke-width='4.667' stroke-linejoin='round'/%3E%3C/svg%3E")`};
  width: 56px;
  height: 56px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100% auto;

  ${mediaQuery.medium`
    width: 32px;
    height: 32px;
  `}

  ${mediaQuery.xsmall`
    float: right;
  `}
`;

export const SlideWrapper = styled.div<{
  stopPlaying: boolean;
  currentPosition: number;
}>`
  position: relative;
  white-space: nowrap;
  margin-top: 60px;
  user-select: none;
  transform: ${({ currentPosition }) => `translateX(${currentPosition}px)`};

  ${({ stopPlaying, currentPosition }) =>
    !stopPlaying &&
    css`
      transition: transform 20s linear;
      transform: translateX(calc(-50% + ${currentPosition}px)) !important;
    `}

  ${mediaQuery.large`
    margin-top: 43px;
  `}

  ${mediaQuery.medium`
    margin-top: 24px;
  `}

  ${mediaQuery.xsmall`
    margin-top: 80px;
  `}
`;