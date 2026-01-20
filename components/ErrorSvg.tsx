import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ErrorSvgProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

const ErrorSvg: React.FC<ErrorSvgProps> = ({
  size = 17,
  color = '#E21E1E',
  strokeWidth = 1.5,
}) => {
  return (
    <Svg 
      width={size} 
      height={size} 
      viewBox="0 0 17 17"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.23299 15.75C12.3657 15.75 15.716 12.3921 15.716 8.25C15.716 4.10786 12.3657 0.75 8.23299 0.75C4.10025 0.75 0.75 4.10786 0.75 8.25C0.75 12.3921 4.10025 15.75 8.23299 15.75Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.23999 11.25L11.2264 5.25"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.2264 11.25L5.23999 5.25"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ErrorSvg;