import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const InnerNews = styled.div`
  overflow: hidden;
  margin-top: 60px;

  ${mediaQuery.large`
		margin-top: 43px;
	`}

  ${mediaQuery.medium`
		margin-top: 24px;
	`}
`;

export const TopWrapper = styled.div`
  margin: 0 -8px;
  position: relative;

  ${mediaQuery.medium`
		margin: 0 -6px;
	`}

  ${mediaQuery.small`
		float: left;
		width: 352px;
		margin: 0;
	`}

	${mediaQuery.xsmall`
		float: none;
		width: 100%;
	`}
`;

export const BottomWrapper = styled.div`
  margin-top: 60px;

  ${mediaQuery.large`
		margin-top: 40px;
	`}

  ${mediaQuery.medium`
		margin-top: 24px;
	`}

	${mediaQuery.small`
		float: right;
		width: 352px;
		margin-top: 0;
	`}

	${mediaQuery.xsmall`
		float: none;
		width: 100%;
		margin-top: 34px;
	`}
`;

export const SectionBox = styled.div`
  box-sizing: border-box;
  width: 848px;
  height: 198px;
  margin-left: 8px;
  padding: 36px 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.gray[100]};
  position: relative;

  &:first-child {
    margin-left: 0;
    margin-right: 8px;
  }

  ${mediaQuery.large`
		width: 650px;
		height: 198px;
		padding: 36px;
	`}

  ${mediaQuery.medium`
		width: 468px;
		height: 142px;
		margin-left: 6px;
		padding: 24px;

		&:first-child {
			margin-left: 0;
			margin-right: 6px;
		}
	`}

	${mediaQuery.small`
		width: 100%;
		height: 190px;
	`}
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const MegaphoneIcon = styled.img`
  display: inline-block;
  width: 38px;
  height: 38px;
  margin-right: 12px;
`;

export const Badge = styled.div`
  margin-top: 2.5px;
  padding: 6px 12px;
  background-color: white;
  border-radius: 8px;
  font-size: 14px;

  ${mediaQuery.medium`
		margin-top: 0px;
		font-size: 12px;
	`}

  ${mediaQuery.xsmall`
		margin-top: 3px;
	`}
`;

export const DateText = styled.span`
  margin-left: 12px;
  font-size: 14px;
  line-height: 38px;
  letter-spacing: -0.2px;

  ${mediaQuery.medium`
		line-height: 38px;
		font-size: 12px;
	`}

  ${mediaQuery.small`
		margin-left: 8px;
		line-height: 26px;
		font-size: 12px;
	`}

	${mediaQuery.xsmall`
		line-height: 32px;
	`}
`;

export const Title = styled.a`
  overflow: hidden;
  margin-top: 12px;
  font-size: 26px;
  line-height: 38px;
  height: 76px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: black;

  ${mediaQuery.medium`
		margin-top: 4px;
		font-size: 17px;
		line-height: 26px;
		height: 52px;
	`}

  ${mediaQuery.small`
		margin-top: 8px;
		height: 104px;
		-webkit-line-clamp: 4;
	`}

	${mediaQuery.xsmall`
		margin-top: 4px;
		font-size: 16px;
		line-height: 24px;
		height: 72px;
		-webkit-line-clamp: 3;
	`}
`;

export const OptionButton = styled.button`
  display: block;
  position: absolute;
  top: 43px;
  right: 30px;
  width: 24px;
  height: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray[500]};

  ${mediaQuery.large`
		top: 43px;
		right: 34px;
	`}

  ${mediaQuery.medium`
		top: 31px;
		right: 12px;
	`}

	${mediaQuery.small`
		top: 28px;
		right: 13px;
	`}

	${mediaQuery.xsmall`
		top: 23px;
		right: 12px;
	`}
`;

export const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 40;
  opacity: 1;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.55);
`;

export const ShareButtonList = styled.div`
	width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  overflow: hidden;
	display: flex;
	justify-content: center;
	height: 40px;
`;

export const MoveWrapper = styled.div`
	display: flex;
	margin: 16px 0 0 -16px;

	${mediaQuery.medium`
		margin: 12px 0 0 -12px;
	`}

	${mediaQuery.small`
		flex-wrap: wrap;
		margin: 26px 0 0 -12px;
	`}

	${mediaQuery.xsmall`
		overflow: hidden;
		margin: 4px 0 0 -12px;
	`}
`

export const MoreBox = styled.a`
  flex: 1;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100px;
  margin-left: 16px;
  padding: 36px 40px;
  background-color: ${({ theme }) => theme.color.gray[100]};
  border-radius: 20px;

  & > strong {
    font-size: 26px;
    line-height: 38px;
    letter-spacing: -0.6px;
    font-weight: 400;
  }

  ${mediaQuery.medium`
		height: 74px;
		margin-left: 12px;
		padding: 24px;

		& > strong {
			font-size: 17px;
			line-height: 26px;
			letter-spacing: -0.2px;
		}
	`}

  ${mediaQuery.small`
		flex-basis: calc(50% - 12px);
		height: auto;
		margin: 12px 0 0 12px;
		padding: 20px;
		border-radius: 16px;
	`}

	${mediaQuery.xsmall`
		padding: 16px;
		border-radius: 12px;

		& > strong {
			font-size: 16px;
			line-height: 24px;
			letter-spacing: -0.2px;
		}
	`}
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
	font-size: 17px;
	line-height: 38px;
	letter-spacing: -0.5px;

	${mediaQuery.medium`
		width: 24px;
		font-size: 0;
		line-height: 26px;
	`}

	${mediaQuery.xsmall`
		line-hegiht: 24p
	`}
`;