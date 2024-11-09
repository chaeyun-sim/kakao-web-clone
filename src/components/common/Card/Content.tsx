import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';
import { PropsWithChildren } from 'react';

interface IProps {
	title: string;
}

const Content = ({ title, children }: PropsWithChildren<IProps>) => {
  return (
    <CardContent>
      <Title>{title}</Title>
			{children}
    </CardContent>
  );
};

export default Content;

const CardContent = styled.a`
	margin: 0 -40px;
	display: block;
	font-size: 1px;
	outline-offset: -4px;
	font-weight: 700;

	${mediaQuery.large`
		margin: 0 -30px;
	`}

	${mediaQuery.medium`
		margin: 0 -24px;
	`}

	${mediaQuery.small`
		margin: 0 -20px;
	`}
`

const Title = styled.strong`
  white-space: pre-line;
  padding: 0 40px;
  overflow: hidden;
  height: 108px;
  margin-top: 16px;
  font-size: 26px;
  line-height: 36px;
  letter-spacing: -0.6px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  ${mediaQuery.large`
		padding: 0 30px;
	`}

  ${mediaQuery.medium`
		height: 56px;
		margin-top: 16px;
		-webkit-line-clamp: 2;
		padding: 0 24px;
		font-size: 18px;
		line-height: 1.55;
	`}
	
	${mediaQuery.small`
		height: 84px;
		margin-top: 8px;
		-webkit-line-clamp: 2;
		padding: 0 20px;
	`}

	${mediaQuery.xsmall`
		height: 48px;
		font-size: 15px;
		line-height: 1.6;
		-webkit-line-clamp: 2;
		margin-top: 8px;
	`}
`;