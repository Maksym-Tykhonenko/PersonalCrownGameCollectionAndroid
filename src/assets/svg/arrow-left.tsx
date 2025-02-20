import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const ArrowLeft = (props: SvgProps) => (
  <Svg width={31} height={31} viewBox="0 0 31 31" fill="none" {...props}>
    <Path
      d="M19.375 7.75C19.375 7.75 11.625 13.4579 11.625 15.5C11.625 17.5421 19.375 23.25 19.375 23.25"
      stroke="#F6F6F6"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
