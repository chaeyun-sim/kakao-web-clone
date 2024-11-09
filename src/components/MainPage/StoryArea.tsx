import { useEffect, useRef, useState } from 'react';
import { PlayIcon, PlayIconWrapper, SlideWrapper } from './StoryArea.styles';
import { useMediaQuery } from 'react-responsive';
import { stories } from '../../constants/stories';
import Card from '../common/Card/Card';
import SectionTitle from '../common/SectionTitle';
import { SectionContainer } from './comon.styles';

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

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleTransitionEnd = () => {
      saveCurrentPosition();
      setStopPlaying(false);
    };

    slider.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      slider.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);
  
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
    <SectionContainer>
      <SectionTitle
        text="카카오와 카카오 그룹이 축적해 온 이야기들"
        iconUrl="https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/ico_archives.gif"
      >
        {!isMobileScreen && (
          <PlayIconWrapper>
            <PlayIcon isPlaying={stopPlaying} onClick={togglePlay} />
          </PlayIconWrapper>
        )}
      </SectionTitle>
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
        onMouseEnter={() => {
          setStopPlaying(true);
          saveCurrentPosition();
        }}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{
          cursor: isDragging ? 'grabbing' : 'pointer',
        }}
      >
        {Array.from({ length: 10 }, (_, groupIndex) =>
          stories.map((story, index) => (
            <Card
              key={`${story.title}-${groupIndex}-${index}`}
              largeSize={story.largeSize}
              cardData={story}
            >
              <Card.Wrapper>
                <Card.Header />
                <Card.Content />
                <Card.Tags />
                <Card.Trigger />
              </Card.Wrapper>
              <Card.Menu />
            </Card>
          )),
        )}
      </SlideWrapper>
    </SectionContainer>
  );
};

export default StoryArea;