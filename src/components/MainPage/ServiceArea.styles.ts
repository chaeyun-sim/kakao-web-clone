import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const InnerService = styled.div`
	margin-top: 60px;

	${mediaQuery.large`
		margin-top: 43px;
	`}

	${mediaQuery.medium`
		margin-top: 24px;
	`}
`

export const ServiceList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -16px 0 0 -16px;
  padding: 0;

  ${mediaQuery.medium`
		margin: -12px 0 0 -12px;
	`}

  ${mediaQuery.small`
		margin: -8px 0 0 -8px;
	`}

	${mediaQuery.xsmall`
		margin: -12px 0 0 -12px;
	`}
`;

export const ServiceBox = styled.li`
  flex: 1 1 40%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 180px;
  margin: 16px 0 0 16px;
  padding: 62px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.color.gray[100]};
  list-style: none;

  ${mediaQuery.large`
		height: 160px;
		padding: 52px 42px;
	`}

  ${mediaQuery.medium`
		height: 110px;
		margin: 12px 0 0 12px;
		padding: 32px 36px;
	`}

	${mediaQuery.small`
		height: 110px;
		margin: 8px 0 0 8px;
		padding: 32px 24px;
		border-radius: 16px;
	`}

	${mediaQuery.xsmall`
		position: relative;
		display: block;
		width: calc(50% - 12px);
		height: auto;
		margin: 12px 0 0 12px;
		padding: 20px 20px 82px;
	`}
`;

export const ServiceTitle = styled.strong`
	font-size: 30px;
	letter-spacing: -0.8px;
	word-break: break-all;
	font-weight: bold;

	${mediaQuery.medium`
		font-size: 18px;
		letter-spacing: -0.5px;
	`}

	${mediaQuery.xsmall`
		font-size: 16px;
		line-height: 26px;
		letter-spacing: -0.5px;
	`}
`

export const ServiceWrapper = styled.div`
	white-space: nowrap;
	margin-left: 17px;

	${mediaQuery.xsmall`
		position: absolute;
		left: 20px;
		bottom: 20px;
		margin-left: 0;
	`}
`

export const ServiceIcon = styled.a`
	display: inline-block;
	width: 56px;
	height: 56px;
	margin-left: 12px;
	background-size: 100%;
	background-repeat: no-repeat;
	background-position: 50%;
	border-radius: 12px;
	cursor: pointer;

	&:first-child {
		margin-left: 0;
	}

	${mediaQuery.medium`
		width: 46px;
		height: 46px;
		margin-left: 8px;
	`}

	${mediaQuery.small`
		margin-left: 9px;
	`}

	${mediaQuery.xsmall`
		margin-left: 4px;
	`}
`

