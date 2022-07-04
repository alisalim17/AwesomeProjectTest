import { StatusBar } from "expo-status-bar";
import { Modal, Switch, Text, View } from "react-native";

import React, { useState } from "react";
import tw from "twrnc";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={tw`flex-1 items-center justify-center pt-5`}>
      <StatusBar style="dark" backgroundColor="#7ecf99" />
      <Switch
        thumbColor={isEnabled ? "yellow" : "white"}
        trackColor={{ false: "red", true: "green" }}
        onValueChange={() => setIsEnabled(!isEnabled)}
        value={isEnabled}
      />
    </View>
  );
}
