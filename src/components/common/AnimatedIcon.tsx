import styled from 'styled-components';

const VideoWrapper = styled.div`
  width: 78px;
  height: 78px;
  display: inline-block;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

interface IProps {
  mp4Url: string;
  alt: string;
}

const AnimatedIcon = ({ mp4Url, alt }: IProps) => {
  return (
    <VideoWrapper>
      <Video
        autoPlay
        loop
        muted
        playsInline
        width={78}
        height={78}
        aria-label={alt}
      >
        <source src={mp4Url} type="video/mp4" />
      </Video>
    </VideoWrapper>
  );
};

export default AnimatedIcon;
