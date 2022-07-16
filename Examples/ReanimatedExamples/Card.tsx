import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";

const { width: wWidth, height } = Dimensions.get("window");

const aspectRatio = 722 / 368;
const CARD_WIDTH = wWidth - 128;
const CARD_HEIGHT = CARD_WIDTH * aspectRatio;
const IMAGE_WIDTH = CARD_WIDTH * 0.9;

interface CardProps {
  card: {
    source: ReturnType<typeof require>;
  };
  shuffleBack: Animated.SharedValue<boolean>;
  index: number;
}

export const Card = ({ card: { source }, shuffleBack, index }: CardProps) => {

  return (
    <View style={styles.container} pointerEvents="box-none">
        <View>
          <Image
            source={source}
            style={{
              width: IMAGE_WIDTH,
              height: IMAGE_WIDTH * aspectRatio,
            }}
            resizeMode="contain"
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});
