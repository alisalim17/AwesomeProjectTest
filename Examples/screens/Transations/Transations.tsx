import React, { useEffect, useState } from 'react'
import { Button, Text, Touchable, View } from 'react-native'
import Card, { assets, Cards, CARD_HEIGHT, CARD_WIDTH } from '../../Card'
import tw from 'twrnc'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'
import { useSharedValue } from 'react-native-gallery-toolkit'

const alpha = Math.PI / 6

const cards = [
    Cards.Card1,
    Cards.Card2,
    Cards.Card3,
    Cards.Card4,
    Cards.Card5,
    Cards.Card6,
]

const Box: React.FC<{ card: number, toggled: boolean }> = ({ card, toggled }) => {
    // const rotation = toggled ? (card - 1) * alpha : 0
    const rotate = useSharedValue(0)

    useEffect(() => {
        rotate.value = withSpring(toggled ? (card - 1) * alpha : 0)
    }, [toggled])

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: -CARD_WIDTH / 2
                },
                {
                    rotate: `${rotate.value}rad`,
                },
                {
                    translateX: CARD_WIDTH / 2
                },
            ]
        };
    });

    return (
        <Animated.View style={[tw`absolute`, animatedStyles]}>
            <Card key={`card-${card}`} card={card} />
        </Animated.View>
    )
}

const Transations = () => {
    console.log('ex', Cards)
    const [toggled, setToggle] = useState(false);

    return (

        <View style={tw`flex-1`}>

            <View style={tw`bg-blue-500 justify-center items-center flex-9`}>
                {cards.slice(0, 3).map((card) => <Box toggled={toggled} card={card} />
                )}

            </View>
            <View style={tw`bg-blue-200 flex-1`}>
                <TouchableOpacity onPress={() => setToggle((prev) => !prev)} style={tw`bg-blue-400 h-full justify-center items-center`}>
                    <Text style={tw`text-2xl text-blue-800`}>Toggle</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Transations