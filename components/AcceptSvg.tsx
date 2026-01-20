import React from 'react';
import Svg, { Ellipse, Path } from 'react-native-svg';

interface AcceptSvgProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

const AcceptSvg: React.FC<AcceptSvgProps> = ({
  size = 16,
  color = '#2DDB53',
  strokeWidth = 2,
}) => {
  // Масштабируем размеры пропорционально
  const scale = size / 16;
  
  return (
    <Svg 
      width={size} 
      height={size * (17/16)} // Сохраняем пропорции 16:17
      viewBox="0 0 16 17"
      fill="none"
    >
      <Path
        d="M12 6L6.99999 11L4 7.99996"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Ellipse
        cx="8"
        cy="8.5"
        rx="7"
        ry="7.5"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

export default AcceptSvg;