import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const InnerHelp = styled.div`
  margin-top: 60px;
  color: ${({ theme }) => theme.color.gray[500]};
  display: flex;

  ${mediaQuery.large`
		margin-top: 43px;
	`}

  ${mediaQuery.medium`
		margin-top: 24px;
	`}

	${mediaQuery.small`
		width: 100%;
		flex-wrap: wrap;
	`}
`;

export const InnerTop = styled.div`
  width: 560px;
  margin-top: -16px;
  height: 515px;
  flex: 1;

  ${mediaQuery.large`
		min-width: 428px;
		height: 494px;
	`}

  ${mediaQuery.medium`
		min-width: 308px;
		margin-top: -12px;
		height: 354px;
	`}

	${mediaQuery.small`
		display: flex;
		flex: 1;
		width: 100%;
		margin-bottom: 8px;
		height: auto;
		min-width: 100%;
	`}
`;

export const SocialWrapper = styled.div`
  margin-left: 16px;
  color: black;
  background-color: #fae100;
  box-sizing: border-box;
  padding: 40px;
  border-radius: 36px;
  height: 515px;
  width: 560px;
  position: relative; // 추가: 이미지 포지셔닝을 위해

  ${mediaQuery.large`
		height: 494px;
		width: 428px;
	`}

  ${mediaQuery.medium`
		margin-left: 12px;
		padding: 24px;
		border-radius: 24px;
		height: 354px;
		width: 308px;
	`}

	${mediaQuery.small`
		margin-left: 0;
		display: inline-block;
		width: calc(50% - 4px);
		height: 184px;
		border-radius: 16px;
	`}

	${mediaQuery.xsmall`
		min-height: 172px;
		padding: 20px;
		width: 100%;
		height: auto;
	`}
`;

export const RyanImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 264px;
  height: auto;

  ${mediaQuery.medium`
    width: 190px;
  `}

  ${mediaQuery.small`
    display: none;
  `}
`;

export const Title = styled.strong`
  display: block;
  margin-bottom: 24px;
  font-size: 26px;
  line-height: 1.38;
  letter-spacing: -0.6px;
  white-space: pre-wrap;

  ${mediaQuery.large`
		margin-bottom: 12px;
	`}

  ${mediaQuery.medium`
		font-size: 18px;
		line-hegith: 1.55;
		letter-spacing: -0.5px;
	`}

	${mediaQuery.small`
		margin-bottom: 8px;
	`}

	${mediaQuery.xsmall`
		font-size: 15px;
		line-height: 1.6;
		letter-spacing: -0.5px;
	`}
`;

export const SubTitle = styled.span`
  font-size: 17px;
  line-height: 1.58;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:nth-child(2):hover {
    &:nth-child(2) > img {
      opacity: 0.8;
    }
  }

  ${mediaQuery.medium`
		font-size: 14px;
		line-height: 1.42;
		letter-spacing: -0.2px;
	`}
`;

export const SocialList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 41px;

  & > img {
    width: 80px;
    height: 80px;
    cursor: pointer;
  }

  ${mediaQuery.large`
		margin-top: 37px;

		& > img {
			width: 60px;
			height: 60px;
		}
	`}

  ${mediaQuery.medium`
		margin-top: 22px;

		& > img {
			width: 46px;
			height: 46px;
		}
	`}

	${mediaQuery.small`
		margin-top: 24px;

		& > img {
			width: 56px;
			height: 56px;
		}
	`}
`;

export const RecruitWrapper = styled.div`
  margin-left: 16px;
  color: white;
  background-color: #0073ff;
  box-sizing: border-box;
  padding: 40px;
  border-radius: 36px;
  width: 560px;
  height: 515px;
  position: relative;
	overflow: hidden;

  ${mediaQuery.large`
		height: 494px;
	`}

  ${mediaQuery.medium`
		margin-left: 12px;
		padding: 24px;
		border-radius: 24px;
		height: 354px;
		width: 308px;
	`}

	${mediaQuery.small`
		margin-left: 8px;
		display: inline-block;
		width: calc(50% - 4px);
		height: 184px;
		border-radius: 16px;
	`}

	${mediaQuery.xsmall`
		min-height: 172px;
		padding: 20px;
		width: 100%;
		height: auto;
		margin-left: 0;
		margin-top: 12px;
	`}
`;

export const RecruitImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  border-radius: 36px;

  ${mediaQuery.medium`
		border-radius: 24px;
	`}

  ${mediaQuery.small`
    width: 154px;
    height: 68px;
    right: 16px;
    left: auto;
    bottom: 16px;
		border-radius: 16px;
  `}
`;


export const HelpWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  gap: 16px;

  ${mediaQuery.xsmall`
    flex-direction: column;
    gap: 12px;
		margin-top: 12px;
  `}
`;