
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  PanGestureHandler, PanGestureHandlerGestureEvent
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withDecay
} from "react-native-reanimated";
import Card, { Cards, CARD_HEIGHT, CARD_WIDTH } from "../Card";


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface GestureContext {
  offsetX: number
  offsetY: number
}

const Gesture:React.FC<{width:number,height:number}> = ({width,height}) => {
  const boundX = width - CARD_WIDTH;
  const boundY = height - CARD_HEIGHT;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { offsetY: number, offsetX: number }>({
    onStart: (event, ctx) => {
      ctx.offsetX = translateX.value
      ctx.offsetY = translateY.value
    },
    onActive: (event, ctx: GestureContext) => {

      translateX.value = ctx.offsetX + event.translationX;
      translateY.value = ctx.offsetY + event.translationY;
    },
    onEnd: ({ velocityX, velocityY }) => {
      translateX.value = withDecay({
        velocity: velocityX,
          : [0, boundX],
      });
      translateY.value = withDecay({
        velocity: velocityY,
        clamp: [0, boundY],
      });
    },

  });
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });
  return (
    <View style={styles.container}>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View {...{ style }}>
          <Card card={Cards.Card1} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Gesture;