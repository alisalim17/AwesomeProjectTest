import React, { useState } from 'react'
import { Button, Text, Touchable, View } from 'react-native'
import Card, { assets, Cards } from '../../Card'
import tw from 'twrnc'
import { TouchableOpacity } from 'react-native-gesture-handler'
const cards = [
    Cards.Card1,
    Cards.Card2,
    Cards.Card3,
]

const alpha = Math.PI / 6

const Transations = () => {
    console.log('ex', Cards)
    const [toggled, setToggle] = useState(false);

    return (

        <View style={tw`flex-1`}>

            <View style={tw`bg-blue-500 justify-center items-center flex-9`}>
                {cards.map((card) => {
                    console.log('alpha', `${(card - 1) * alpha}rad`)
                    const rotate = toggled ? (card - 1) * alpha : 0
                    return (
                        <View style={[tw`absolute`, {
                            transform: [{
                                rotate: `${rotate}rad`,
                            }]
                        }]}>
                            <Card key={`card-${card}`} card={card} />
                        </View>
                    )
                }
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