import { CSSProperties } from 'styled-components';

const LinkIcon = ({
  color,
  style,
}: {
  color: string;
  style?: CSSProperties;
}) => {
  return (
    <img
      src={`data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='9' fill='none'%3E%3Cpath d='M1.794 1.074h6.148V7.22m0-6.146L1.378 7.638' stroke='%23${color}' stroke-width='1.3'/%3E%3C/svg%3E`}
      style={style}
    />
  );
};

export default LinkIcon;