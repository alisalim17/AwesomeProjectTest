import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Animated, {
  timing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import tw from "twrnc";

const handleRotation = (progress: Animated.SharedValue<number>) => {
  "worklet";

  return `${progress.value * 2 * Math.PI}rad`;
};

const ReanimatedExample1 = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, []);
  console.log("progress", progress.value);
  return (
    <View>
      <Animated.View
        style={[tw`w-16 h-16 bg-blue-600 rounded-lg`, animatedStyle]}
      />
    </View>
  );
};

export default ReanimatedExample1;
