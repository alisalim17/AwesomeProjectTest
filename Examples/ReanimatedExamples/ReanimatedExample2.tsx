
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  GestureEventPayload,
  PanGestureHandler, PanGestureHandlerEventPayload, PanGestureHandlerGestureEvent
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler, useAnimatedStyle, useSharedValue
} from "react-native-reanimated";
import Card, { Cards } from "../Card";


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface GestureContext {
  offsetX: number
  offsetY: number
}


const Gesture = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent,{offsetY:number,offsetX:number}>({
    onStart: (event, ctx) => {
      ctx.offsetX = translateX.value
      ctx.offsetY = translateY.value
    },
    onActive: (event, ctx:GestureContext) => {
      translateX.value = ctx.offsetX + event.translationX;
      translateY.value = ctx.offsetY + event.translationY;
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