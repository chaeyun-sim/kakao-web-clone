import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';
import { useCardContext } from './context';

const Wrapper = ({ children }: PropsWithChildren) => {
	const { isFromNews } = useCardContext();

  return <CardWrapper isFromNews={!!isFromNews}>{children}</CardWrapper>;
};

export default Wrapper;

const CardWrapper = styled.div<{ isFromNews: boolean }>`
  width: ${({ isFromNews }) => (isFromNews ? '86%' : '82%')};
  padding: 40px 40px 0;
  display: block;
  position: relative;

  ${mediaQuery.large`
		padding: 30px 30px 0;
	`}

  ${mediaQuery.medium`
		width: 85%;
		padding: 24px 24px 0;
	`}

	${mediaQuery.small`
		width: 89%;
		height: 100%;
		padding: 21px 20px 0;
	`}

	${mediaQuery.small`
		width: ${({ isFromNews }: {isFromNews: boolean}) => (isFromNews ? '88.5%' : '88%;')}
	`}
`;