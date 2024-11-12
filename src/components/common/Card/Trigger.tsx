import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';
import Icon from '../Icon';
import { useCardContext } from './context';

const Trigger = () => {
	const { isMenuOpen, onOpenMenu } = useCardContext();

	if (isMenuOpen) return null;

	return (
    <CardTrigger onClick={onOpenMenu} aria-label='카드 옵션 열기'>
      <Icon iconName="options" style={{ width: 24, height: 24 }} />
    </CardTrigger>
  );
};

export default Trigger;

const CardTrigger = styled.button`
	display: block;
	overflow: hidden;
	position: absolute;
	top: 45px;
	right: 30px;
	z-index: 20;
	width: 24px;
	height: 24px;

	${mediaQuery.large`
		top: 34px;
		right: 20px;
	`}

	${mediaQuery.medium`
		top: 28px;
		right: 16px;
	`}

	${mediaQuery.small`
		top: 24px;
		right: 20px;
	`}
`