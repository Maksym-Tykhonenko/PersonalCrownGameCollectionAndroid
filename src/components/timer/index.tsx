import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {styles} from './styles';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const Timer = ({
  duration = 30,
  isPaused,
}: {
  duration?: number;
  isPaused: boolean;
}) => {
  const radius = 50;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;

  const animatedProgress = useSharedValue(0);

  const [timeLeft, setTimeLeft] = useState(duration);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    animatedProgress.value = withTiming(circumference, {
      duration: duration * 1000,
      easing: Easing.linear,
    });

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [animatedProgress, circumference, duration]);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: -animatedProgress.value,
  }));

  return (
    <View style={styles.container}>
      <Svg width={120} height={120} viewBox="0 0 120 120">
        <Circle
          cx="60"
          cy="60"
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeOpacity={0.3}
        />
        <AnimatedCircle
          cx="60"
          cy="60"
          r={radius}
          stroke="#ECE4B7"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          animatedProps={animatedProps}
          strokeLinecap="round"
        />
      </Svg>
      <Text style={styles.timerText}>{`00:${
        timeLeft < 10 ? '0' : ''
      }${timeLeft}`}</Text>
    </View>
  );
};
