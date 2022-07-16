
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


const Gesture:React.FC = () => {
  return (
    <View style={styles.container}>
    </View>
  );
};

export default Gesture;