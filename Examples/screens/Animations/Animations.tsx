import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from "react-native-reanimated";
import tw from 'twrnc'

const Animations = () => {
    const sharedValue = useSharedValue(70)


    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: sharedValue.value
        }
    })

    return <View style={tw`flex-1`}>
        <View style={tw`bg-blue-500 justify-center items-center flex-9`}>
            <Animated.View style={[tw`w-8 h-8 bg-red-500 rounded-full`, animatedStyle]}></Animated.View>
        </View>
        <View style={tw`bg-blue-200 flex-1`}>
            <TouchableOpacity onPress={() => {
                sharedValue.value = 
                withRepeat(withSequence(withTiming(0, { duration: 1000 }),withTiming(70, { duration: 1000 })), -1, true);
                
            }} style={tw`bg-blue-400 h-full justify-center items-center`}>
                <Text style={tw`text-2xl text-blue-800`}>Toggle</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default Animations;