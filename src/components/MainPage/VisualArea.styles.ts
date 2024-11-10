import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const Container = styled.div`
  position: relative;
  width: 1424px;
  height: 808px;

  ${mediaQuery.large`
    width: 1094px;
    height: 621px;
  `}

  ${mediaQuery.medium`
    width: 755px;
    height: 486px;
  `}

  ${mediaQuery.small`
    width: 100%;
    height: 405px;
  `}

  ${mediaQuery.xsmall`
    width: 100%;
    height: 252px;
  `}
`;

export const InnerArea = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  border-radius: 36px;

  ${mediaQuery.medium`
    border-radius: 20px;
  `}

  ${mediaQuery.xsmall`
    border-radius: 16px;
  `}
`;

export const VisualWrapper = styled.div`
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const InnerTop = styled.div`
  padding: 2px 27px 11px;
  border-radius: 0 0 0 36px;
  position: absolute;
  top: -10px;
  right: -2px;
  background-color: white;

  ${mediaQuery.large`
    top: -2px;
    padding: 2px 17px 15px;
  `}

  ${mediaQuery.medium`
    padding: 5px 5px 6px 17px;
    border-radius: 0 0 0 20px;
  `}

  ${mediaQuery.small`
    padding: 5px 0 5px 11px;
    border-radius: 0 0 0 20xp;
  `}

  ${mediaQuery.xsmall`
    padding: 5px 0 6px 11px;
    border-radius: 0 0 0 16px;
  `}

  & > a {
    position: relative;
    margin-top: -5px;
    width: 94px;
    height: 94px;

    ${mediaQuery.large`
      width: 82px;
      height: 82px;
      margin-top: 0;
    `}

    ${mediaQuery.medium`
      width: 60px;
      height: 60px;
    `}

    ${mediaQuery.small`
      position: static;
      width: 48px;
      height: 48px;
    `};
  }

  &::before {
    content: '';
    position: absolute;
    width: 38px;
    height: 38px;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 38'%3E%3Cpath d='M36 38h2V0H0v2c19.9 0 36 16.1 36 36z' fill='%23fff'/%3E%3C/svg%3E");
    top: 10px;
    left: -35.8px;

    ${mediaQuery.large`
      top: 0.3px;
    `}

    ${mediaQuery.medium`
      width: 22px;
      height: 22px;
      top: 0.6px;
      left: -21px;
    `}

    ${mediaQuery.xsmall`
      width: 18px;
      height: 18px;
      top: 1px;
      left: -17px;
    `}
  }

  &::after {
    content: '';
    position: absolute;
    width: 38px;
    height: 38px;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 38'%3E%3Cpath d='M36 38h2V0H0v2c19.9 0 36 16.1 36 36z' fill='%23fff'/%3E%3C/svg%3E");
    right: 0;
    bottom: -36px;

    ${mediaQuery.medium`
      width: 22px;
      height: 22px;
      bottom: -21px;
      right: 0.8px;
    `}

    ${mediaQuery.xsmall`
      width: 18px;
      height: 18px;
      bottom: -16.5px;
    `}
  }
`;

export const InnerBottom = styled.div`
  padding: 24px 58px 12px;
  position: absolute;
  bottom: -2px;
  left: -2px;
  border-radius: 0 36px 0 0;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: white;
  cursor: pointer;

  ${mediaQuery.large`
    padding: 23px 23px 28px;
  `}

  ${mediaQuery.medium`
    padding: 21px 33px 16px;
    border-radius: 0 20px 0 0;
  `}

  ${mediaQuery.small`
    padding: 15px 28px 16px;
  `}

  ${mediaQuery.xsmall`
    padding: 0;
    position: static;
    border-radius: 24px;
    background-color: #f3f3f3;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  `}

  &::before {
    content: '';
    position: absolute;
    width: 38ex;
    height: 38px;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 38'%3E%3Cpath d='M2 0H0v38h38v-2C18.1 36 2 19.9 2 0z' fill='%23fff'/%3E%3C/svg%3E");
    top: -36px;
    left: 0;

    ${mediaQuery.large`
      top: -36px;
      left: 0;
    `}

    ${mediaQuery.medium`
      width: 22px;
      height: 22px;
      top: -21px;
      left: 0.5px;
    `}
  }

  &::after {
    content: '';
    position: absolute;
    width: 38px;
    height: 38px;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 38'%3E%3Cpath d='M2 0H0v38h38v-2C18.1 36 2 19.9 2 0z' fill='%23fff'/%3E%3C/svg%3E");
    right: -36px;
    bottom: 0;

    ${mediaQuery.medium`
      width: 22px;
      height: 22px;
      right: -20.5px;
      bottom: 0.5px;
    `}

    ${mediaQuery.small`
      width: 18px;
      height: 18px;
      right: -17px;
      bottom: 0.5px;
    `}
  }
`;

export const TitleBox = styled.div`
  width: calc(100% + 4px);
  padding: 20px 14px 0;
  position: relative;
  top: 0;
  left: -2px;
  color: black;
  box-sizing: border-box;

  & > strong {
    display: block;
    font-size: 26.5px;
    line-height: 1.38;
    letter-spacing: -0.8px;
    font-weight: 400;
  }
`