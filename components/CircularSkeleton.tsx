
import React, { useEffect, useRef } from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    View,
    ViewStyle
} from 'react-native';

interface CircularSkeletonProps {
  size?: number;         // Размер круга
  thickness?: number;    // Толщина обводки
  color?: string;        // Цвет скелетона
  duration?: number;     // Длительность анимации
  style?: ViewStyle;     // Дополнительные стили
  show?: boolean;        // Показывать или нет
}

const CircularSkeleton: React.FC<CircularSkeletonProps> = ({
  size = 50,
  thickness = 3,
  color = '#E1E9EE',
  duration = 1000,
  style,
  show = true,
}) => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (show) {
      // Анимация появления
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      // Бесконечная анимация вращения
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: duration,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    } else {
      // Анимация исчезновения
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        spinValue.stopAnimation();
      });
    }
  }, [show]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (!show) return null;

  return (
    <Animated.View 
      style={[
        styles.container,
        { opacity: fadeAnim },
        style
      ]}
    >
      <View style={[
        styles.circleOuter,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: `${color}30`, // с прозрачностью
        }
      ]}>
        <Animated.View
          style={[
            styles.circle,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              borderWidth: thickness,
              borderColor: color,
              borderTopColor: 'transparent',
              transform: [{ rotate: spin }],
            }
          ]}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  circleOuter: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  circle: {
    position: 'absolute',
  },
});

export default CircularSkeleton;