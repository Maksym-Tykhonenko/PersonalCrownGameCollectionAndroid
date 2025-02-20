import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const Star = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      d="M18.304 4.59199L20.6507 9.32399C20.9707 9.98266 21.824 10.6147 22.544 10.7347L26.796 11.448C29.516 11.9053 30.156 13.8947 28.196 15.8573L24.8893 19.1907C24.3293 19.7547 24.0227 20.844 24.196 21.624L25.1427 25.7507C25.8893 29.0173 24.1693 30.28 21.3027 28.5733L17.316 26.1933C16.596 25.764 15.4093 25.764 14.676 26.1933L10.692 28.5733C7.83868 30.28 6.10535 29.0027 6.85201 25.7507L7.79868 21.624C7.97201 20.844 7.66535 19.7547 7.10535 19.1907L3.79868 15.8573C1.85335 13.8933 2.48001 11.9053 5.19868 11.448L9.45201 10.7347C10.1587 10.6147 11.012 9.98266 11.332 9.32399L13.6787 4.59199C14.9587 2.02533 17.0387 2.02533 18.3053 4.59199"
      fill={props.fill}
    />
    <Path
      d="M18.304 4.59199L20.6507 9.32399C20.9707 9.98266 21.824 10.6147 22.544 10.7347L26.796 11.448C29.516 11.9053 30.156 13.8947 28.196 15.8573L24.8893 19.1907C24.3293 19.7547 24.0227 20.844 24.196 21.624L25.1427 25.7507C25.8893 29.0173 24.1693 30.28 21.3027 28.5733L17.316 26.1933C16.596 25.764 15.4093 25.764 14.676 26.1933L10.692 28.5733C7.83868 30.28 6.10535 29.0027 6.85201 25.7507L7.79868 21.624C7.97201 20.844 7.66535 19.7547 7.10535 19.1907L3.79868 15.8573C1.85335 13.8933 2.48001 11.9053 5.19868 11.448L9.45201 10.7347C10.1587 10.6147 11.012 9.98266 11.332 9.32399L13.6787 4.59199C14.9587 2.02533 17.0387 2.02533 18.3053 4.59199"
      stroke={props.stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
