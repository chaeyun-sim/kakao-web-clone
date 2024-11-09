import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';
import { useCardContext } from './context';

const Header = () => {
	const { data, isFromNews } = useCardContext();

  return (
    <CardHeader>
      <BadgeIcon src={data.badgeImageUrl} alt="" />
      <Badge isFromNews={isFromNews!}>{data.badgeText}</Badge>
      <Date>{data.date}</Date>
    </CardHeader>
  );
};

export default Header;

export const CardHeader = styled.div`
	height: 32px;
	padding-right: 24px;
	display: flex;
	align-items: center;

	${mediaQuery.small`
		padding-right: 20px;
	`}
`

export const BadgeIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;

  ${mediaQuery.medium`
		margin: 0 4px 0 0;
	`}
`;

const getResponsiveStyles = ({ isFromNews }: { isFromNews: boolean }) => ({
  height: isFromNews ? '34px' : '26px',
  marginTop: isFromNews ? '1px' : '3px',
  lineHeight: isFromNews ? '33px' : '25px',
  fontSize: isFromNews ? '12px' : '14px',
});

export const Badge = styled.span<{ isFromNews: boolean }>`
  display: inline-block;
  position: relative;
  padding: ${({ isFromNews }) => (isFromNews ? '0 16px' : '0 12px')};
  border-radius: 8px;
  font-size: 14px;
  letter-spacing: -0.2px;
  height: ${({ isFromNews }) => (isFromNews ? '41px' : '32px')};
  line-height: ${({ isFromNews }) => (isFromNews ? '40px' : '31px')};
  margin-top: 1px;
  background-color: white;
  color: black;

  ${mediaQuery.medium`
		${getResponsiveStyles}
	`}
`;

export const Date = styled.span`
  display: inline-block;
  margin-left: 12px;
  font-size: 14px;
  line-height: 46px;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.color.gray[500]};
  margin-top: 5px;

  ${mediaQuery.medium`
		margin-left: 8px;
		font-size: 12px;
		line-height: 41px;
	`}

  ${mediaQuery.small`
		line-height: 26px;
	`}

	${mediaQuery.xsmall`
		line-height: 32px;
	`}
`;