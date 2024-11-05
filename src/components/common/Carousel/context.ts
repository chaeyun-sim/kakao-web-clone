import { createContext, useContext } from 'react';

interface CarouselContextType {
  currentSlide: number;
  onSetCurrentSlide: (value: number) => void;
  items: number;
  onSlideNext: () => void;
  onSlidePrev: () => void;
}

export const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined,
);

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) throw new Error();
  return context;
};
