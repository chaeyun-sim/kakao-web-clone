import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const Container = styled.div`
  width: 272px;
  height: 808px;
  display: flex;
  flex-direction: column;

  ${mediaQuery.large`
    width: 206px;
    height: 621px;
  `}

  ${mediaQuery.medium`
    width: 180px;
    height: 486px;
  `}

  ${mediaQuery.small`
    width: 100%;
    height: 232px;
    margin-top: 20px;
    font-size: 0;
    flex-direction: row;
  `}

  ${mediaQuery.xsmall`
    width: 100%;
    height: auto;
    margin-top: 40px;
    font-size: 0;
    flex-direction: column;
    margin-top: 165px;
  `}
`;

export const FirstWidget = styled.div`
  height: 272px;

  ${mediaQuery.large`
    height: 206px;
  `}

  ${mediaQuery.medium`
    height: 180px;
  `}

  ${mediaQuery.small`
    height: 232px;
    width: 232px;
  `}

  ${mediaQuery.xsmall`
    position: relative;
    box-sizing: border-box;
    height: 220px;
    width: 100%;
    padding-top: 42px;
    font-size: 1px;
    margin-bottom: 42px;
  `}
`;

export const SecondWidget = styled.div`
  margin-top: 16px;
  height: 340px;

  ${mediaQuery.large`
    margin-top: 16px;
    height: 259px;
  `}

  ${mediaQuery.medium`
    margin-top: 8px;
    height: 170px;
  `}

  ${mediaQuery.small`
    margin-top: 0;
    margin-left: 8px;
    width: 232px;
    height: 232px;
  `}

  ${mediaQuery.xsmall`
    margin-top: 16px;
    margin-left: 0;
    width: 100%;
    height: 180px;
  `}
`;

export const ThirdWidget = styled.div`
  margin-top: 16px;
  height: 164px;
  width: 285px;

  ${mediaQuery.large`
    height: 124px;
    width: 215px;
  `}

  ${mediaQuery.medium`
    margin-top: 8px;
    height: 120px;
    width: 192px;
  `}

  ${mediaQuery.small`
    margin-top: 0;
    margin-left: 8px;
    width: 232px;
    height: 232px;
  `}

  ${mediaQuery.xsmall`
    margin-top: 16px;
    margin-left: 0;
    width: 100%;
    height: 220px;
  `}
`;

export const Wrapper = styled.div<{
  fillColor: string;
  backgroundColor: string;
}>`
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;

  &::after {
    content: '';
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 124'%3E%3Cpath d='M26 0H0v2c8.8 0 16 7.2 16 16v87.4c1 5.9 4.3 11.1 9 14.5-4.8 0-9.4-1-13.5-2.8-2.9 3-7 4.9-11.5 4.9v2h28V0h-2z' fill='%23fff' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E");
    width: 39px;
    height: 168px;
    position: absolute;
    right: -2px;
    top: -2px;
    z-index: 2;
    background-color: ${({ fillColor }) => fillColor};

    ${mediaQuery.large`
      width: 36px;
      height: 128px;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 128'%3E%3Cpath d='M33.3 119.9c-5.1 0-9.9-1.1-14.3-3.2-4.4 5.7-11.3 9.3-19 9.3v2h36V0H0v2c13.3 0 24 10.7 24 24v76.9c.4 7 3.9 13.1 9.3 17' fill='%23fff' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E");
    `}

    ${mediaQuery.medium`
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 124'%3E%3Cpath d='M26 0H0v2c8.8 0 16 7.2 16 16v87.4c1 5.9 4.3 11.1 9 14.5-4.8 0-9.4-1-13.5-2.8-2.9 3-7 4.9-11.5 4.9v2h28V0h-2z' fill='%23fff' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E");
      width: 28px;
      height: 124px;
    `}

    ${mediaQuery.small`
      width: 0;
      height: 0;
    `}
  }
`;

export const Badge = styled.span<{ badgeColor: 'yellow' | 'black' }>`
  color: ${({ badgeColor }) => (badgeColor === 'black' ? 'white' : 'black')};
  background-color: ${({ badgeColor }) =>
    badgeColor === 'black' ? 'black' : '#fae100'};
  margin-bottom: 12px;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 14.5px;
  line-height: 1.78;
  letter-spacing: -0.2px;
  width: fit-content;

  ${mediaQuery.large`
    margin-bottom: 8px;
  `}

  ${mediaQuery.medium`
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 8px;
  `}
`;

export const Title = styled.strong`
  font-size: 22px;
  line-height: 1.36;
  letter-spacing: -0.6px;
  font-weight: 400;
  white-space: pre-line;

  ${mediaQuery.large`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    font-size: 18px;
    line-height: 1.4;
  `}

  ${mediaQuery.medium`
    font-size: 14px;
    letter-spacing: -0.2px;
    -webkit-line-clamp: 2;
  `}

  ${mediaQuery.small`
    font-size: 15px;
  `}

  ${mediaQuery.xsmall`
    font-size: 16px;
    line-height: 1.5;
  `}
`;

export const TagWrapper = styled.div`
  margin-top: 8px;
  margin-left: -8px;
  display: flex;

  ${mediaQuery.large`
    overflow: hidden;
    max-height: 40px;
  `}

  ${mediaQuery.medium`
    max-height: 36px;
  `}

  ${mediaQuery.small`
    max-height: 100%;
  `}

  ${mediaQuery.xsmall`
    max-height: 40px;
  `}
`;

export const Tag = styled.div`
  font-size: 16px;
  line-height: 1.62;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.color.gray[400]};
  margin-left: 8px;

  ${mediaQuery.large`
    font-size: 14px;
    line-height: 1.42;
    letter-spacing: -0.2px;
    word-break: break-all;
  `}

  ${mediaQuery.medium`
    font-size: 13px;
    line-height: 1.38;
    letter-spacing: -0.2px;
  `}

  ${mediaQuery.xsmall`
    font-size: 14px;
    line-height: 1.42;
    letter-spacing: -0.2px;
  `}
`;

export const WrapperWithText = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const InnerWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: -10px;

  ${mediaQuery.small`
    margin-left: 0;
  `}
`;

export const KakaoGroupIcon = styled.img`
  margin-bottom: 4px;
  width: 80px;
  height: 80px;

  ${mediaQuery.large`
    width: 40px;
    height: 40px;
  `}

  ${mediaQuery.small`
    width: 80px;
    height: 80px;
  `}

  ${mediaQuery.xsmall`
    margin-bottom: 8px;
  `}
`;

export const GroupText = styled.span`
  font-size: 22px;
  line-height: 1.36;
  letter-spacing: -0.6px;

  ${mediaQuery.medium`
    font-size: 15px;
    line-height: 1.6;
    letter-spacing: -0.2px;
  `}
`;

export const MapImage = styled.img`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  height: 100%;
  z-index: 1;

  ${mediaQuery.small`
    margin-left: 10px;
  `}

  ${mediaQuery.xsmall`
    height: auto;
    width: 100%;
    margin-left: 0;
  `}
`;

export const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  z-index: 2;

  ${mediaQuery.medium`
		border-radius: 16px;
	`}
`;

export const FirstItem2Text = styled.span`
  margin-bottom: 8px;
  overflow: hidden;
  padding: 0 15px;
  font-size: 17.5px;
  line-height: 1.58;
  letter-spacing: -0.5px;

  ${mediaQuery.large`
    max-width: 128px;
    margin: 0 auto 4px;
  `}

  ${mediaQuery.medium`
    font-size: 14.5px;
    line-height: 1.42;
    letter-spacing: -0.2px;
    max-width: 120px;
  `}

  ${mediaQuery.small`
    margin-bottom: 12px;
  `}

  ${mediaQuery.xsmall`
    max-width: 100%;
    margin-bottom: 4px;
    font-size: 13.5px;
    line-height: 1.53;
  `}
`;

export const NumberWrapper = styled.strong`
  line-height: 1.44;
  letter-spacing: -0.8px;
  font-weight: bold;

  ${mediaQuery.large`
    line-height: 1.3;
    letter-spacing: -0.6px;
  `}

  ${mediaQuery.medium`
    line-height: 1.55;
    letter-spacing: -0.5px;
  `}

  ${mediaQuery.small`
    line-height: 1.3;
  `}

  ${mediaQuery.xsmall`
    line-height: 1.44;
  `}
`;

export const SingleNumber = styled.span`
  font-size: 36px;

  ${mediaQuery.large`
    font-size: 26px;
  `}

  ${mediaQuery.medium`
    font-size: 18px;
  `}

  ${mediaQuery.small`
    font-size: 26px;
  `}

  ${mediaQuery.xsmall`
    font-size: 36px;
  `}
`;

export const CountText = styled.span`
  font-size: 16px;
  line-height: 2.1;
  margin: 15px 0 0 4px;
  text-align: center;

  ${mediaQuery.large`
    margin-top: 5px;
  `}

  ${mediaQuery.medium`
    margin-top: 6px;
    font-size: 13px;
    line-height: 1.38;
  `}

  ${mediaQuery.small`
    margin-top: 11px;
    font-size: 14px;
    line-height: 1.42;
  `}

  ${mediaQuery.xsmall`
    margin-top: 20px;
    font-size: 15px;
    line-height: 1.6;
  `}
`;

export const SliderItemWrapper = styled.div`
  width: 340px;
  height: 220px;
  background-color: blue;
  border-radius: 24px;
  overflow: hidden;
`;

export const PrevArrow = styled.button`
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Cpath d='M19 20.59L14.42 16 19 11.41 17.59 10l-6 6 6 6L19 20.59z' fill='%23000'/%3E%3C/svg%3E");
  position: absolute;
  top: -1.5px;
  width: 32px;
  height: 32px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100% auto;
  left: 0px;
`;

export const NextArrow = styled.button`
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Cpath d='M13 20.59L17.58 16 13 11.41 14.41 10l6 6-6 6L13 20.59z' fill='%23000'/%3E%3C/svg%3E");
  position: absolute;
  top: -2px;
  width: 32px;
  height: 32px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100% auto;
  left: 36px;
`;

export const Slides = styled.span`
  position: absolute;
  top: -1px;
  left: 74px;
  line-height: 32px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.gray[300]};
`;