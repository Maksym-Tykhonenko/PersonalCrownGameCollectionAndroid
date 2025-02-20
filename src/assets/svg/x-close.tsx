import * as React from 'react';
import Svg, {Rect, Path, SvgProps} from 'react-native-svg';

export const XClose = (props: SvgProps) => (
  <Svg width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
    <Rect x={0.5} y={0.5} width={35} height={35} rx={4.5} stroke="#141414" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.47 11.47C11.6106 11.3296 11.8012 11.2507 12 11.2507C12.1987 11.2507 12.3893 11.3296 12.53 11.47L24.53 23.47C24.6036 23.5387 24.6627 23.6215 24.7037 23.7135C24.7447 23.8055 24.7668 23.9048 24.7685 24.0055C24.7703 24.1062 24.7518 24.2062 24.7141 24.2996C24.6764 24.393 24.6202 24.4778 24.549 24.549C24.4778 24.6203 24.3929 24.6764 24.2995 24.7141C24.2062 24.7519 24.1061 24.7704 24.0054 24.7686C23.9047 24.7668 23.8054 24.7448 23.7134 24.7038C23.6214 24.6628 23.5386 24.6037 23.4699 24.53L11.47 12.53C11.3295 12.3894 11.2506 12.1988 11.2506 12C11.2506 11.8013 11.3295 11.6106 11.47 11.47Z"
      fill="#141414"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.53 11.47C24.6704 11.6106 24.7493 11.8013 24.7493 12C24.7493 12.1988 24.6704 12.3894 24.53 12.53L12.53 24.53C12.3878 24.6625 12.1997 24.7346 12.0054 24.7312C11.8111 24.7278 11.6258 24.649 11.4883 24.5116C11.3509 24.3742 11.2722 24.1888 11.2688 23.9945C11.2654 23.8002 11.3375 23.6122 11.47 23.47L23.47 11.47C23.6106 11.3296 23.8012 11.2507 24 11.2507C24.1987 11.2507 24.3893 11.3296 24.53 11.47Z"
      fill="#141414"
    />
  </Svg>
);
