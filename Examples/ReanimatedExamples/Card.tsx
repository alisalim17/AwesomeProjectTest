import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withDecay } from "react-native-reanimated";

const { width: wWidth, height } = Dimensions.get("window");

const aspectRatio = 722 / 368;
const CARD_WIDTH = wWidth - 128;
const CARD_HEIGHT = CARD_WIDTH * aspectRatio;
const IMAGE_WIDTH = CARD_WIDTH * 1.4;

interface CardProps {
    card: {
        source: ReturnType<typeof require>;
    };
    shuffleBack: Animated.SharedValue<boolean>;
    index: number;
}

export const Card = ({ card: { source }, shuffleBack, index }: CardProps) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    
    const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { offsetY: number, offsetX: number }>({
      onStart: (event, ctx) => {
        ctx.offsetX = translateX.value
        ctx.offsetY = translateY.value
      },
      onActive: (event, ctx ) => {

        translateX.value = ctx.offsetX + event.translationX;
        translateY.value = ctx.offsetY + event.translationY;
      },
    });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{
            translateX: translateX.value,
        }, {
            translateY: translateY.value
        }]
    }))

    return (
        <View style={styles.container} pointerEvents="box-none">
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View style={[animatedStyle]}>
                    <Image
                        source={source}
                        style={{
                            width: IMAGE_WIDTH,
                            height: IMAGE_WIDTH,
                            // height: IMAGE_WIDTH * aspectRatio,
                        }}
                        resizeMode="contain"
                    />
                </Animated.View>
            </PanGestureHandler>
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
