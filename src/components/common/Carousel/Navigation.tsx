import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';
import { useMediaQuery } from 'react-responsive';
import { useCarousel } from './context';

const Navigation = ({ isFirst = false }: { isFirst?: boolean;}) => {
	const isMobileScreen = useMediaQuery({ maxWidth: 767 })
	const { currentSlide, onSetCurrentSlide, items } = useCarousel();
	
	return (
		<>
			{!isMobileScreen && (
				<NavigationList>
					{Array.from({ length: items }).map((_, i) => (
						<li key={i} style={{ listStyle: 'none' }}>
							<Dot isFirst={isFirst} active={currentSlide === i} onClick={() => onSetCurrentSlide(i)} />
						</li>
					))}
				</NavigationList>
			)}
		</>
	);
};

export default Navigation;

const NavigationList = styled.ul`
	position: absolute;
	bottom: 6px;
	left: 50%;
	transform: translate(-50%);
	white-space: nowrap;
	display: flex;
	padding: 0;

	${mediaQuery.large`
		bottom: -6px;
	`}

	${mediaQuery.medium`
		bottom: -12px;
	`}

	${mediaQuery.small`
		bottom: 12px;
	`}
`

const Dot = styled.div<{ isFirst?: boolean; active?: boolean }>`
	opacity: ${({active, isFirst}) => (active || isFirst) ? 1 : 0.45};
	background-color: ${({isFirst, active}) => (!active && isFirst) ? 'white' : 'black'};
	margin: 8px;
	border: 0;
	width: ${({active}) => active ? '24px' : '8px'};
	height: 8px;
	border-radius: 4px;
	display: block;
	box-sizing: border-box;
	border: ${({isFirst}) => isFirst ? '1px solid #888' : 'none'}
`