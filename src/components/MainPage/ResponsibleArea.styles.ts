import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const InnerResponsible = styled.div`
	margin-left: -16px;
	margin-top: 60px;

	${mediaQuery.large`
		margin-top: 43px;
	`}

	${mediaQuery.medium`
		margin-top: 24px;
		margin-left: -12px;
	`}

	${mediaQuery.small`
		margin-left: -8px;
	`}

	${mediaQuery.xsmall`
		margin-left: 0;
	`}
`

export const ResponsibleBox = styled.div`
	display: inline-block;
	position: relative;
	width: calc(33.333% - 16px);
	height: 669px;
	margin-left: 16px;
	border-radius: 24px;

	${mediaQuery.large`
		height: 569px;
	`}

	${mediaQuery.medium`
		width: calc(33.333% - 12px);
		height: 397px;
		margin-left: 12px;
		border-rardius: 16px;
	`}

	${mediaQuery.small`
		width: calc(33.333% - 8px);
		height: 341px;
		margin-left: 8px;
	`}

	${mediaQuery.xsmall`
		width: 100%;
		height: 295px;
		margin-left: 0;
		margin-top: 20px;

		&:first-child {
			margin-top: 0;
		}
	`}
`

export const TopBox = styled.span`
  position: absolute;
  right: -2px;
  top: -2px;
  padding: 2px 2px 16px 16px;
  text-align: right;
  border-radius: 0 0 0 36px;
  background-color: white;

  ${mediaQuery.large`
		padding: 0 0 15px 15px;
		border-radius: 0 0 0 24px;
	`}

  ${mediaQuery.medium`
		padding: 0 0 12px 12px;
		border-radius: 0 0 0 20px;
	`}

	${mediaQuery.xsmall`
		padding: 0 0 11px 11px;
	`}
`;

export const Image = styled.img<{ isFirst?: boolean }>`
  position: absolute;
  top: 164px;
  left: 50%;
  width: ${({ isFirst }) => (isFirst ? '100%' : '322px')};
  transform: translateX(-50%);

  &:first-child {
    width: 100%;
  }

  ${mediaQuery.large`
		top: 142px;
		width: ${({ isFirst }: { isFirst: boolean }) => (isFirst ? '100%' : '244px')};
	`}

  ${mediaQuery.medium`
		top: 103px;
		width: ${({ isFirst }: { isFirst: boolean }) => (isFirst ? '100%' : '180px')};
	`}

	${mediaQuery.small`
		top: 83px;
		width: ${({ isFirst }: { isFirst: boolean }) => (isFirst ? '100%' : '140px')};
	`}

	${mediaQuery.xsmall`
		width: auto;
		margin-top: -5px;
		height: 140px;
	`}
`;

export const Text = styled.p`
  position: absolute;
  bottom: 16px;
  left: 40px;
  font-size: 26.5px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  max-width: 340px;
  white-space: pre-wrap;
  word-break: keep-all;

  ${mediaQuery.large`
		bottom: 6px;
		max-width: 320px;
	`}

  ${mediaQuery.medium`
		bottom: 6px;
		left: 24px;
		font-size: 17.5px;
		line-height: 1.52;
		letter-spacing: -0.2px;
		max-width: 192px;
	`}

	${mediaQuery.small`
		bottom: 4px;
		left: 20px;
		max-width: 149px;
	`}

	${mediaQuery.xsmall`
		bottom: 6px;
		left: 24px;
		font-size: 16.5px;
		max-width: 220px;
	`}
`;

export const Category = styled.span`
  display: inline-block;
  width: 272px;
  height: 58px;
  margin: 2px 2px 0 0;
  line-height: 58px;
  font-size: 17px;
  text-align: center;
  border-radius: 29px;
  letter-spacing: -0.5px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 26px;
    height: 26px;
    background-size: 100% auto;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Cpath d='M0 2c13.3 0 24 10.7 24 24h2V0H0v2z' fill='%23fff' clip-rule='evenodd'/%3E%3C/svg%3E");
  }

  &::before {
    left: -24px;
    top: 0;
  }

  &::after {
    right: 0;
    bottom: -24px;
  }

  ${mediaQuery.large`
		width: 205px;
		height: 50px;
		line-height: 50px;
		border-radius: 25px;
	`}

  ${mediaQuery.medium`
		width: 168px;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		border-radius: 20px;

		&::before,
    &::after {
      width: 18px;
      height: 18px;
    }

		&::before {
			left: -16.5px;
      top: 0.73px;
		}
		
		&::after {
			bottom: -16.5px;
      right: 0.73px;
		}
	`}

	${mediaQuery.small`
		width: 125px;
		height: 32px;
		line-height: 32px;
		border-radius: 16px;
	`}

	${mediaQuery.xsmall`
		width: 186px;
		height: 40px;
		line-height: 40px;
		font-size: 13px;
		border-radius: 20px;
	`}
`;

export const ClickButton = styled.a`
  position: absolute;
  right: -2px;
  bottom: -2px;
  padding: 16px 0 0 16px;
  border-radius: 36px 0 0 0;
  font-size: 1px;
  color: ${({ theme }) => theme.color.gray[500]};
  background-color: white;
  cursor: pointer;

  & > img {
    width: 64px;
    height: 64px;
  }

  &:hover {
    & > img {
      opacity: 0.8;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 26px;
    height: 26px;
    background-size: 100% auto;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Cpath d='M24 0c0 13.3-10.7 24-24 24v2h26V0h-2z' fill='%23fff' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E");
  }

  &::before {
    left: -24px;
    bottom: 0;
  }

  &::after {
    right: 0;
    top: -24px;
  }

  ${mediaQuery.large`
		padding: 15px 0 0 15px;

		& > img {
			width: 55px;
			height: 55px;
		}
	`}

  ${mediaQuery.medium`
		padding: 12px 0 0 12px;
		border-radius: 24px 0 0 0;

		& > img {
			width: 48px;
			height: 48px;
		}

		&::before,
    &::after {
      width: 18px;
      height: 18px;
    }

		&::before {
			left: -16.5px;
      bottom: 0.73;
		}
		
		&::after {
			right: 0.73;
      top: -16.5px;
		}
	`}

	${mediaQuery.small`
		padding: 9px 0 0 9px;
	`}

	${mediaQuery.xsmall`
		right: 20px;
		bottom: 20px;
		padding: 0;
		background-color: transparent;
		border-radius: 0;

		&::before {
      display: none;
    }

		&::after {
			display: none
		}
	`}
`;