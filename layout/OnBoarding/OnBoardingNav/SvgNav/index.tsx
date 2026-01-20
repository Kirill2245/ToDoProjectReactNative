import { COLORS } from '@/constants/ColorConst';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
type MySvgComponentProps = {
    isActive?:boolean
    width?:number;
    height?:number;
    color?:string;
}

const MySvgComponent: React.FC<MySvgComponentProps> = ({ width = 62, height = 5, color = "#F0F1F9", isActive = false }) => (
  <Svg width={width} height={height} viewBox="0 0 62 5" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2.11037C0 3.27591 0.929244 4.22076 2.07552 4.22076H59.1258C60.2721 4.22076 61.2014 3.27591 61.2014 2.11037C61.2014 0.944835 60.2721 -2.00272e-05 59.1258 -2.00272e-05H2.07552C0.929244 -2.00272e-05 0 0.944835 0 2.11037Z"
      fill={isActive ? COLORS.PRIMARY_BUTTON_COLOR : "#F0F1F9"}
    />
  </Svg>
);

export default MySvgComponent;
