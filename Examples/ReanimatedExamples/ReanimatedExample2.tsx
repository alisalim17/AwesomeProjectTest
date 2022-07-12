import React from "react";
import { Animated, View } from "react-native";
import { useAnimatedGestureHandler } from "react-native-gallery-toolkit";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import Card, { Cards } from "../Card";

const ReanimatedExample2 = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onActive: (event, ctx) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <View>
      <PanGestureHandler {...onGestureEvent}>
        <Animated.View {...animatedStyle}>
          <Card card={Cards.Card4} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default ReanimatedExample2;
