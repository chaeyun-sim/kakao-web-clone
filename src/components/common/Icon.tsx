import { useMediaQuery } from 'react-responsive';
import { CSSProperties } from 'styled-components';

interface SizeObject {
  default: number;
  large?: number;
  medium?: number;
  small?: number;
  xsmall?: number;
}

interface IProps {
  iconName: string;
  size?: number | SizeObject;
  style?: CSSProperties;
}

const Icon = ({ iconName, size, style }: IProps) => {
  const iconUrl = `/icons/${iconName}.svg`;

  const isLarge = useMediaQuery({ maxWidth: 1902 });
  const isMedium = useMediaQuery({ maxWidth: 1439 });
  const isSmall = useMediaQuery({ maxWidth: 1023 });
  const isXSmall = useMediaQuery({ maxWidth: 767 });

  const getSize = () => {
    if (typeof size === 'number') return size;
    if (!size || typeof size !== 'object') return undefined;

    if (isXSmall && size.xsmall) return size.xsmall;
    if (isSmall && size.small) return size.small;
    if (isMedium && size.medium) return size.medium;
    if (isLarge && size.large) return size.large;
    return size.default;
  };

  return (
    <img
      src={iconUrl}
      alt={iconUrl}
      width={getSize()}
      height={getSize()}
      style={style}
    />
  );
};

export default Icon;