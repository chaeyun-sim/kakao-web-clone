import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

const Wrapper = ({children}: PropsWithChildren) => {
	return <CardWrapper>{children}</CardWrapper>;
};

export default Wrapper;

const CardWrapper = styled.div`
	padding: 40px 40px 0;
	display: block;
	position: relative;

	${mediaQuery.large`
		padding: 30px 30px 0;
	`}

	${mediaQuery.medium`
		padding: 24px 24px 0;
	`}

	${mediaQuery.small`
		padding: 21px 20px 0;
	`}
`