import styled from 'styled-components';
import mediaQuery from '../utils/mediaQuery';
import Icon from './common/Icon';
import { useMediaQuery } from 'react-responsive';

interface IProps {
  title: string;
  iconUrl: string;
	variant?: 'medium' | 'large';
}

const HelpBox = ({ title, iconUrl, variant = 'medium' }: IProps) => {
	const isSmallScreen = useMediaQuery({ maxWidth: 1023 })
	
	return (
    <HelpBoxContainer variant={variant!}>
      <HelpBoxTitle variant={variant!}>{title}</HelpBoxTitle>
      <GoButton>
        {isSmallScreen ? '' : '바로가기'}
        <Icon iconName="go-top-right-button" size={24} />
      </GoButton>
      {!isSmallScreen && <HelpIcon src={iconUrl} alt="" />}
    </HelpBoxContainer>
  );
};

export default HelpBox;

const HelpBoxContainer = styled.div<{ variant: 'medium' | 'large' }>`
  flex: 1;
  height: ${({ variant }) => (variant === 'large' ? '162px' : '161px')};
  margin-top: 16px;
  box-sizing: border-box;
  position: relative;
  padding: 36px 40px;
  background-color: ${({ theme }) => theme.color.gray[100]};
  border-radius: 20px;
  color: black;
  cursor: pointer;

  ${mediaQuery.large`
		height: ${({ variant }: IProps) => (variant === 'large' ? '200px' : '153px')};
	`}

  ${mediaQuery.medium`
		height: ${({ variant }: IProps) => (variant === 'large' ? '140px' : '110px')};
		margin-top: 12px;
		padding: 24px;
	`}

	${mediaQuery.small`
		flex: 1;
		width: auto;
		height: ${({ variant }: IProps) => (variant === 'large' ? '140px' : '74px')};
		margin-top: 0;
		margin-left: 8px;
		
		&:first-child {
			margin-left: 0;
		}
	`}
	
	${mediaQuery.xsmall`
		width: 100%;
		height: ${({ variant }: IProps) => (variant === 'large' ? 'auto' : '128px')};
		margin-left: ${({ variant }: IProps) => (variant === 'large' ? 'auto' : '12px')};
		border-radius: 12px;
		padding: 16px 16px 52px;

		&:first-child {
			margin-left: 0;
		}
		
		&:hover {
			& > span > img {
				opacity: 0.8;
			}
		}
	`}
`;

const HelpBoxTitle = styled.strong<{variant: 'medium' | 'large'}>`
  display: block;
  font-size: 26px;
  font-weight: 400;
  line-height: 1.46;
  letter-spacing: -0.6px;

  ${mediaQuery.medium`
		font-size: 17.5px;
		line-height: 1.52;
		letter-spacing: -0.2px;
	`}

  ${mediaQuery.xsmall`
		font-size: 16.5px;
		line-height: 1.5;
		max-width: ${({ variant }: IProps) => (variant === 'large' ? '230px' : '85px')};
		white-space: pre-wrap;
  	word-break: keep-all;
		font-weight: 500;
	`}
`;

const GoButton = styled.span`
	position: absolute;
	bottom: 36px;
	left: 40px;
	font-size: 17px;
	line-height: 1.58;
	letter-spacing: -0.5px;
	display: flex;
	align-items: center;
	gap: 8px;

	${mediaQuery.medium`
		bottom: 24px;
		left: 24px;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: -0.2px;
	`}

	${mediaQuery.small`
		font-size: 0;
		line-height: 0;
		top: 25px;
		left: auto;
		right: 25px;
	`}

	${mediaQuery.xsmall`
		top: auto;
		bottom: 16px;
		right: auto;
		left 16px;
	`}
`

const HelpIcon = styled.img`
	position: absolute;
	top: 50%;
	right: 40px;
	transform: translateY(-50%);
	width: 100px;
	height: 100px;

	${mediaQuery.large`
		width: 84px;
		height: 84px;
	`}

	${mediaQuery.medium`
		right: 24px;
		width: 60px;
		height: 60px;
	`}

	${mediaQuery.small`
		right: 16px;
		width: 62px;
		height: 62px;
	`}
`