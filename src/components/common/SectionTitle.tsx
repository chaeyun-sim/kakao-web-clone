import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';
import { useMediaQuery } from 'react-responsive';

interface IProps {
  text: string;
  iconUrl: string;
}

const SectionTitle = ({ children, text, iconUrl }: PropsWithChildren<IProps>) => {
  const isMobileScreen = useMediaQuery({maxWidth: 767})

  return (
    <Title>
      {!isMobileScreen && <StoryTitleIcon src={iconUrl} alt="" />}
      {text}
      {children}
    </Title>
  );
};

export default SectionTitle;

export const Title = styled.h3`
  overflow: hidden;
  width: 1712px;
  margin: 0 auto;
  font-size: 52px;
  line-height: 78px;
  letter-spacing: -1px;
  display: flex;
  align-items: center;
  font-weight: 500;

  ${mediaQuery.large`
    width: 1316px;
    font-size: 48px;
    line-height: 72px;
  `}

  ${mediaQuery.medium`
    width: 948px;
    font-size: 32px;
    line-height: 48px;
  `}

  ${mediaQuery.small`
    width: 712px;
  `}

  ${mediaQuery.xsmall`
    width: 100%;
    padding: 0;
    margin: 0;
    font-size: 26px;
    line-height: 36px;
  `}
`;

export const StoryTitleIcon = styled.img`
  width: 78px;
  height: 78px;
  margin-right: 20px;

  ${mediaQuery.large`
    width: 72px;
    height: 72px;
    margin-right: 8px;
  `}

  ${mediaQuery.medium`
    width: 48px;
    height: 48px;
    marign-right: 4px;
  `}

  ${mediaQuery.xsmall`
    display: hidden;
  `}
`;