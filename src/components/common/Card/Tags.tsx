import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';
import { useCardContext } from './context';

const Tags = () => {
  const { data, isFromNews } = useCardContext();

  return (
    <TagWrapper isFromNews={isFromNews!}>
      {data.tagList.map(tag => (
        <Tag key={tag}>#{tag}</Tag>
      ))}
    </TagWrapper>
  );
};

export default Tags;

const TagWrapper = styled.span<{ isFromNews: boolean }>`
  position: absolute;
  overflow: hidden;
  top: ${({ isFromNews }) => (isFromNews ? '320px' : '247px')};
  left: 40px;
  right: 40px;
  height: 26px;
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.color.gray[400]};
  white-space: normal;

  ${mediaQuery.large`
    top: ${({ isFromNews }: { isFromNews: boolean }) => (isFromNews ? '320px' : '214px')};
    left: 30px;
    right: 30px;
  `}

  ${mediaQuery.medium`
    top: ${({ isFromNews }: { isFromNews: boolean }) => (isFromNews ? '200px' : '153px')};
    left: 24px;
    right: 24px;
  `}

  ${mediaQuery.small`
    top: 164px;
    right: 20px;
    left: 20px;
  `}

  ${mediaQuery.xsmall`
    top: 130px;
    font-size: 14px;
    right: 20px;
    left: 20px;
  `}
`;

const Tag = styled.span`
  display: inline-block;
  margin-right: 8px;
  letter-spacing: -0.5px;
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.color.gray[400]};
  white-space: normal;

  ${mediaQuery.medium`
    margin-right: 8px;
    letter-spacing: -0.5px;
    font-size: 14px;
  `}

  ${mediaQuery.small`
    margin-right: 4px;
  `}
`;