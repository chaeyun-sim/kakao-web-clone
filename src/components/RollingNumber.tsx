import { useEffect, useState } from 'react';

interface RollingNumberProps {
  targetNumber: number; // 이미 +10된 값이 전달됨
  duration: number;
  delay: number;
}

const RollingNumber = ({
  targetNumber,
  duration,
  delay,
}: RollingNumberProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let startTime = 0;
      let animationFrameId = 0;

			const animate = (currentTime: number) => {
				// 시작 시간 초기화 (시작 시간이 0이라면 현재 시각은 시작 시간이다)
				if (!startTime) startTime = currentTime;
				// 진행률 계산 (0 ~ 1)
        const progress = (currentTime - startTime) / duration;

				// 만약 롤링이 끝나지 않았다면
				if (progress < 1) {
					// 현재 카운트 = 목표 숫자 * 진행률
					setCount(Math.floor(targetNumber * progress));
					// 다음 프레임을 요청한다
          animationFrameId = requestAnimationFrame(animate);
				} else {
					// 만약 롤링이 끝났다면 (즉, 목표 숫자에 도달했다면)
					// 현재 카운트는 목표 숫자와 같다.
          setCount(targetNumber);
        }
      };

			// 롤링 시작을 요청한다.
      animationFrameId = requestAnimationFrame(animate);

			return () => {
				// 프레임 요청을 종료한다.
        cancelAnimationFrame(animationFrameId);
      };
    }, delay);
  }, [targetNumber, duration, delay]);

	// 카운트에서 10을 나눈 나머지를 표시해 1의 자리 숫자만 출력한다.
  return <>{count % 10}</>;
};

export default RollingNumber;
