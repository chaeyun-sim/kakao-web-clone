import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

interface IProps {
	title: string;
	imageUrl: string;
}

const Content = ({ title, imageUrl }: IProps) => {
  return (
    <CardContent>
      <Title>{title}</Title>
      <ImageWrapper>
        <Image src={imageUrl} alt="" />
      </ImageWrapper>
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

const ImageWrapper = styled.span`
	height: 234px;
	margin-top: 107px;
	position: relative;
	display: block;

	${mediaQuery.large`
		height: 179px;
		margin-top: 75px;
	`}

	${mediaQuery.medium`
		height: 174px;
		margin-top: 63px;
	`}

	${mediaQuery.small`
		height: 130px;
		margin-top: 53px;
	`}

	${mediaQuery.xsmall`
		margin-top: 59px;
		height: auto;
	`}
`

const Image = styled.img`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	display: block;
	height: 100%;
	min-width: 100%;

	${mediaQuery.xsmall`
		position: static;
		transform: none;
		height: auto;
		width: 100%;
	`}
`