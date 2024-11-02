import { CSSProperties } from 'styled-components';

interface IProps {
	iconName: string;
	size?: number;
	style?: CSSProperties;
}

const Icon = ({ iconName, size, style }: IProps) => {
  const iconUrl = `/icons/${iconName}.svg`;

  return (
    <img src={iconUrl} alt={iconUrl} width={size} height={size} style={style} />
  );
};

export default Icon;