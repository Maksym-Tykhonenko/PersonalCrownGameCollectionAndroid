import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const Album = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6 17.975C6.129 19.283 6.42 20.164 7.077 20.821C8.256 22 10.154 22 13.949 22C17.744 22 19.642 22 20.821 20.82C22 19.643 22 17.745 22 13.95C22 10.155 22 8.25701 20.82 7.07801C20.164 6.42101 19.283 6.13001 17.974 6.00101"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 10C2 6.229 2 4.343 3.172 3.172C4.344 2.001 6.229 2 10 2C13.771 2 15.657 2 16.828 3.172C17.999 4.344 18 6.229 18 10C18 13.771 18 15.657 16.828 16.828C15.656 17.999 13.771 18 10 18C6.229 18 4.343 18 3.172 16.828C2.001 15.656 2 13.771 2 10Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 11.119C2.62095 11.041 3.24617 11.0019 3.872 11.002C6.524 10.953 9.111 11.676 11.172 13.042C13.081 14.31 14.424 16.053 15 18M13 7H13.009"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
