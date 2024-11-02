import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

const FooterContainer = styled.footer`
  border-top: 1px solid black;
`;

const InnerFooter = styled.div`
  margin: 0 auto;
  max-width: 1712px;
  padding: 81px 0 48px;

  ${mediaQuery.large`
		max-width: 1316px;
		padding: 81px 0 48px;
	`}

  ${mediaQuery.medium`
		max-width: 952px;
		padding: 0 0 48px;
	`}

	${mediaQuery.small`
		max-width: 712px;
		padding: 40px 0 48px;
	`}

	${mediaQuery.xsmall`
		max-width: 384px;
		padding: 40px 14px 48px;
	`}
`;

const ServiceSection = styled.section`
  display: flex;
  flex-wrap: wrap;

  ${mediaQuery.medium`
		margin-left: -16px;
	`}

  ${mediaQuery.small`
		margin: 0;
	`}
`;

const MainServiceBox = styled.div`
  padding-top: 56px;
  flex: 1;
  position: relative;
  display: inline-block;

  ${mediaQuery.medium`
		padding-top: 48px;
		width: calc(25% - 16px);
		margin: 40px 0 0 16px;
		flex: initial;
	`}

  ${mediaQuery.small`
		padding-top: 0;
		flex: initial;
		width: 100%;
		margin: 0;
	`}

	& > h3 {
    position: absolute;
    left: 0;
    top: 0;
    margin-bottom: 20px;
    font-size: 26px;
    line-height: 1.38;
    letter-spacing: -0.6px;
    font-family: 'Kakao';

    ${mediaQuery.medium`
			font-size: 18px;
			line-height: 1.55;
			letter-spacing: -0.5px;
		`};

    ${mediaQuery.small`
			position: static;
			padding-bottom: 20px;
			margin-bottom: 0;
			font-size: 15px;
			line-height: 1.6;
			letter-spacing: -0.5px;
		`}
  }
`;

const ServiceBox = styled.div`
  margin-left: 16px;
  padding-top: 97px;
  position: relative;
  flex: 1;
  text-align: left;

  ${mediaQuery.large`
		margin-left: 10px;		
	`}

  ${mediaQuery.medium`
		padding-top: 80px;
		width: calc(25% - 16px);
		display: inline-block;
		margin: 40px 0 0 16px;
		flex: initial;
	`}

	${mediaQuery.small`
	display: inline-block;
		padding-top: 0;
		width: 100%;
		margin: 0;
		flex: initial;
	`}
`;

const ListItem = styled.li`
  list-style: none;
  margin-top: 8px;

  &:first-child {
    margin-top: 0;
  }
`;

const ServiceList = styled.a<{ isHovered: boolean; isFirstItem?: boolean }>`
  color: ${({ theme, isHovered, isFirstItem }) =>
    isFirstItem
      ? isHovered
        ? theme.color.gray[700]
        : theme.color.gray[500]
      : isHovered
        ? theme.color.gray[500]
        : theme.color.gray[300]};
  font-size: 14px;
  line-height: 1.78;
  letter-spacing: -0.2px;

  ${mediaQuery.small`
		font-size: 12px;
		line-height: 1.5;
		letter-spacing: -0.2px;
	`}
`;

const SubTitle = styled.strong`
  position: absolute;
  top: 56px;
  font-size: 16.5px;
  letter-spacing: -0.5px;
  margin-bottom: 12px;
  font-family: 'Kakao';
  font-weight: bold;

  ${mediaQuery.medium`
		top: 48x;
		font-size: 14.5px;
		line-height: 1.42;
	`}
`;

const RelationSection = styled.section`
  width: 100%;
  margin-top: 120px;
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    display: block;
    clear: both;
  }

  ${mediaQuery.small`
		margin-top: 48px;
	`}
`;

const GroupInfo = styled.div`
  float: left;
  margin-left: -24px;

  ${mediaQuery.medium`
		width: 594px;
		margin-top: -6px;
	`}

  ${mediaQuery.small`
		float: none;
		width: 100%;
		margin-left: 0;
		margin-top: 0;
	`}
`;

const WrapInfo = styled.div`
  float: left;
  position: relative;
  line-height: 18px;
  margin-left: 24px;

  ${mediaQuery.medium`
		margin-top: 6px;
	`}

  ${mediaQuery.small`
		width: 50%;
		margin-top: 15px;
		margin-left: 0;
	`}
`;

const LinkInfo = styled.a<{ isHovered: boolean; isBold: boolean }>`
  font-size: 12px;
  letter-spacing: -0.2px;
  color: ${({ theme, isHovered, isBold }) =>
    isBold
      ? isHovered
        ? theme.color.gray[700]
        : theme.color.gray[500]
      : isHovered
        ? theme.color.gray[500]
        : theme.color.gray[300]};
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 400)};
`;

const RelatedSiteBox = styled.div`
  float: right;
  position: relative;
  width: 208px;

  ${mediaQuery.small`
		margin-top: 88px;
		width: 298px;
	`}

  ${mediaQuery.xsmall`
		margin-top: 48px;
		width: 100%;
	`}

	& > a {
    position: relative;
    display: block;
    padding: 10px 20px 12px;
    background-color: ${({ theme }) => theme.color.gray[200]};
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.2px;
    border-radius: 24px;
  }
`;

const PlusIcon = styled.img`
  position: absolute;
  right: 20px;
  margin-top: 2px;
`;

const CopyRight = styled.span`
  position: static;
  padding-top: 6px;
  font-size: 13px;
  font-weight: 300 !important;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.color.gray[300]};
  clear: both;

  ${mediaQuery.medium`
		padding-top: 12px;
	`}

  ${mediaQuery.small`
		padding-top: 0;
		margin-top: -30px;
	`}

	${mediaQuery.xsmall`
		margin-top: 48px;
		padding-top: 0;
	`}
`;


export {CopyRight, FooterContainer, GroupInfo, InnerFooter, LinkInfo, ListItem, MainServiceBox, PlusIcon, RelatedSiteBox, RelationSection, ServiceBox, ServiceList, ServiceSection, SubTitle, WrapInfo}