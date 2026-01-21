import React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

interface UserIconProps extends SvgProps {
  size?: number;
  color?: string;
  active?: boolean;
}

export const UserIcon: React.FC<UserIconProps> = ({
  size = 24,
  color = '#B0B2C3',
  active = false,
  style,
  ...rest
}) => {
  const iconColor = active ? '#3b3ede' : color;
  
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={style}
      {...rest}
    >
      <Circle
        cx="11.9998"
        cy="7.79998"
        r="5.7"
        fill={iconColor}
      />
      <Path
        d="M22 18.9133C22 20.5628 20.75 21.9 12 21.9C3.25 21.9 2 20.5628 2 18.9133C2 17.2638 3.25 15.5 12 15.5C20.5613 15.5 21.9405 17.2067 22 18.9133Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default UserIcon;