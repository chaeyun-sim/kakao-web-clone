import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

interface IProps {
	imageUrl: string;
	largeSize: 'imageTop' | 'imageBottom'
}

const Image = ({ imageUrl, largeSize }: IProps) => {
  return (
    <ImageWrapper largeSize={largeSize}>
      <ImageBox src={imageUrl} alt="" largeSize={largeSize} />
    </ImageWrapper>
  );
};

export default Image;

const ImageWrapper = styled.span<Pick<IProps, 'largeSize'>>`
  height: 234px;
  margin-top: ${({ largeSize }) =>
    largeSize === 'imageBottom' ? '107px' : '0px'};
  position: relative;
  display: block;

  ${mediaQuery.large`
		height: 179px;
		margin-top: ${({ largeSize }: Pick<IProps, 'largeSize'>) => (largeSize === 'imageBottom' ? '75px' : '0px')};
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
		height: 141px;
	`}
`;

const ImageBox = styled.img<Pick<IProps, 'largeSize'>>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  height: 100%;
  width: 100%;
	object-fit: cover;

  ${mediaQuery.xsmall`
		position: static;
		transform: none;
		height: auto;
		width: 100%;
	`}
`;