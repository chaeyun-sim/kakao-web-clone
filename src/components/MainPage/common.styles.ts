import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const SectionContainer = styled.div`
  padding-top: 200px;
  max-width: 1712px;
  margin: 0 auto;

  ${mediaQuery.large`
		padding-top: 120px;
		max-width: 1316px;
	`}

  ${mediaQuery.medium`
		padding-top: 80px;
		max-width: 948px;
	`}

	${mediaQuery.small`
		max-width: 712px;
		padding-top: 80px;
	`}

	${mediaQuery.xsmall`
		max-width: 384px;
	`}
`;
