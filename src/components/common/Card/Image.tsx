import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';
import { useCardContext } from './context';

interface IProps {
  largeSize: 'imageTop' | 'imageBottom';
}

const Image = ({ largeSize }: IProps) => {
	const { isFromNews, data } = useCardContext();

  return (
    <ImageWrapper largeSize={largeSize} isFromNews={isFromNews!}>
      <ImageBox src={data.imageUrl} alt="" largeSize={largeSize} />
    </ImageWrapper>
  );
};

export default Image;

type TProps = Pick<IProps, 'largeSize'> & { isFromNews: boolean };

const ImageWrapper = styled.span<TProps>`
  height: ${({ isFromNews }) => (isFromNews ? '314px' : '234px')};
  margin-top: ${({ largeSize, isFromNews }) =>
    largeSize === 'imageBottom' ? (isFromNews ? '179px' : '107px') : '0px'};
  position: relative;
  display: block;

  ${mediaQuery.large`
		height: ${({ isFromNews }: TProps) => (isFromNews ? '249px' : '179px')};
		margin-top: ${({ largeSize, isFromNews }: TProps) => (largeSize === 'imageBottom' ? (isFromNews ? '190px' : '75px') : '0px')};
	`}

  ${mediaQuery.medium`
		height: ${({ isFromNews }: TProps) => (isFromNews ? '178px' : '174px')};
		margin-top: ${({ isFromNews }: TProps) => (isFromNews ? '120px' : '63px')};
	`}

	${mediaQuery.small`
		height: ${({ isFromNews }: TProps) => (isFromNews ? '199px' : '130px')};
		margin-top: ${({ isFromNews }: TProps) => (isFromNews ? '56px' : '53px')};
	`}

	${mediaQuery.xsmall`
		margin-top: 59px;
		height: ${({ isFromNews }: TProps) => (isFromNews ? 'auto' : '141px')};
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
		width: 100%;
	`}
`;