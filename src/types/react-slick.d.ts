/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'react-slick' {
  import { ReactNode } from 'react';
  
  export interface Settings {
    dots?: boolean;
    arrows?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    initialSlide?: number;
    // 필요한 다른 설정들도 여기에 추가할 수 있습니다
  }

  export default class Slider extends React.Component<{
    children?: ReactNode;
    settings?: Settings;
    [key: string]: any;
  }> {}
}