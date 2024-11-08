import { useEffect, useRef, useState } from 'react';
import { Container, PlayIcon, PlayIconWrapper, SlideWrapper, StoryTitle, StoryTitleIcon } from './StoryArea.styles';
import { useMediaQuery } from 'react-responsive';
import { stories } from '../../constants/stories';
import Card from '../common/Card/Card';

const StoryArea = () => {
	const isMobileScreen = useMediaQuery({ maxWidth: 767 });
  const [stopPlaying, setStopPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(-2540);
  const [currentPosition, setCurrentPosition] = useState(-2540);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStopPlaying(true)
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;

    setIsDragging(true);
    setStopPlaying(true);

    const computedStyle = window.getComputedStyle(sliderRef.current);
    const matrix = new WebKitCSSMatrix(computedStyle.transform);
    setCurrentPosition(matrix.m41);

    setStartX(e.pageX - matrix.m41);
  };

  const saveCurrentPosition = () => {
    if (sliderRef.current) {
      const computedStyle = window.getComputedStyle(sliderRef.current);
      const matrix = new WebKitCSSMatrix(computedStyle.transform);
      setCurrentPosition(matrix.m41);
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false);
    saveCurrentPosition();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = x - startX;
    setTranslateX(walk);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      saveCurrentPosition();
    }
    setStopPlaying(false);
  };

  const togglePlay = () => {
    saveCurrentPosition()
    setStopPlaying(prev => !prev);
  }
	
	return (
    <Container>
      <StoryTitle>
        {!isMobileScreen && (
          <StoryTitleIcon
            src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/ico_archives.gif"
            alt=""
          />
        )}
        <span style={{ padding: isMobileScreen ? '0 14px' : 0 }}>
          카카오와 카카오 그룹이 축적해 온 이야기들
        </span>
        {!isMobileScreen && (
          <PlayIconWrapper>
            <PlayIcon isPlaying={stopPlaying} onClick={togglePlay} />
          </PlayIconWrapper>
        )}
      </StoryTitle>
      {isMobileScreen && (
        <PlayIconWrapper>
          <PlayIcon isPlaying={stopPlaying} onClick={togglePlay} />
        </PlayIconWrapper>
      )}
      <SlideWrapper
        ref={sliderRef}
        stopPlaying={stopPlaying}
        currentPosition={isDragging ? translateX : currentPosition}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{
          cursor: isDragging ? 'grabbing' : 'pointer',
        }}
      >
        {[...stories, ...stories, ...stories].map((story, index) => (
          <Card key={`${story.title}-${index}`}>
            <Card.Wrapper>
              <Card.Header
                imageUrl={story.badgeImageUrl}
                badgeText={story.badgeText}
              />
              <Card.Content {...story} />
              <Card.Tags {...story} />
            </Card.Wrapper>
            <Card.Trigger />
            <Card.Menu />
          </Card>
        ))}
      </SlideWrapper>
    </Container>
  );
};

export default StoryArea;