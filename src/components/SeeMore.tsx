import styled from 'styled-components';
import mediaQuery from '../utils/mediaQuery';
import { useMediaQuery } from 'react-responsive';
import Icon from './common/Icon';

interface IProps {
  text: string;
}

const SeeMore = ({text}: IProps) => {
  const isMobileScreen = useMediaQuery({ maxWidth: 767})

  return (
    <SeeMoreBox>
      <SeeMoreButton aria-label='더 보기'>
        {text}
        <Icon
          iconName="go-button"
          size={24}
          style={{
            marginLeft: isMobileScreen ? '8px' : '12px',
          }}
        />
      </SeeMoreButton>
    </SeeMoreBox>
  );
};

export default SeeMore;

export const SeeMoreBox = styled.div`
  margin-top: 60px;
  text-align: center;

  ${mediaQuery.large`
		margin-top: 40px;
	`}

  ${mediaQuery.small`
		margin-top: 24px;
	`}

	${mediaQuery.xsmall`
		margin-top: 12px;
	`}
`;

export const SeeMoreButton = styled.a`
  display: flex;
  width: 316px;
  height: 76px;
  border-radius: 38px;
  font-size: 22px;
  letter-spacing: -0.6px;
  background-color: ${({ theme }) => theme.color.gray[100]};
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    & > img {
      opacity: 0.8;
    }
  }

  ${mediaQuery.medium`
		width: 280px;
		height: 60px;
		line-height: 60px;
		border-radius: 30px;
		font-size: 15px;
		letter-spacing: -0.2px;
	`}

  ${mediaQuery.xsmall`
		width: 100%;
		height: 48px;
		line-height: 48px;
		border-radius: 24px;
	`}
`;