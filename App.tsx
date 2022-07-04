import { StatusBar } from "expo-status-bar";
import { Modal, Pressable, Switch, Text, View } from "react-native";

import React, { useState } from "react";
import tw from "twrnc";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(1);

  return (
    <View style={tw`flex-1 items-center justify-center pt-5`}>
      <StatusBar style="dark" backgroundColor="#7ecf99" />
      <Pressable
        style={tw`bg-blue-500`}
        hitSlop={20}
        pressRetentionOffset={{ bottom: 100, left: 90, right: 90, top: 90 }}
        onPress={() => {
          setIsEnabled(isEnabled + 1);
          console.log(isEnabled);
        }}
      >
        <Text>I'm pressable!</Text>
      </Pressable>
    </View>
  );
}
