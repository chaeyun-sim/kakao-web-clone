import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

const Wrapper = ({children}: PropsWithChildren) => {
	return <CardWrapper>{children}</CardWrapper>;
};

export default Wrapper;

const CardWrapper = styled.div`
	width: 416px;
	height: 100%;
	padding: 40px 40px 0;
	display: block;
	position: relative;

	${mediaQuery.large`
		width: 317px;
		padding: 30px 30px 0;
	`}

	${mediaQuery.medium`
		width: 100%;
		padding: 24px 24px 0;
	`}

	${mediaQuery.small`
		padding: 21px 20px 0;
	`}
`