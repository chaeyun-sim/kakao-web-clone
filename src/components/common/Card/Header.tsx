import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

interface IPros {
	imageUrl: string;
	badgeText: string;
}

const Header = ({ imageUrl, badgeText }: IPros) => {
  return (
    <CardHeader>
      <Icon src={imageUrl} alt="" />
			<Badge>{badgeText}</Badge>
    </CardHeader>
  );
};

export default Header;

const CardHeader = styled.div`
	height: 32px;
	padding-right: 24px;
	display: flex;

	${mediaQuery.small`
		padding-right: 20px;
	`}
`

const Icon = styled.img`
	width: 32px;
	height: 32px;
	margin-right: 8px;

	${mediaQuery.medium`
		margin: 0 4px 0 0;
	`}
`

const Badge = styled.span`
	display: inline-block;
	position: relative;
	padding: 0 12px;
	border-radius: 8px;
	font-size: 14px;
	letter-spacing: -0.2px;
	height: 32px;
	line-height: 31px;
	margin-top: 1px;
	background-color: white;
	color: black;

	${mediaQuery.medium`
		height: 26px;
		margin-top: 3px;
		line-height: 25px;
	`}
`