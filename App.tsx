import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import * as React from "react";
import tw from "twrnc";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={tw`flex-1 items-center justify-center`}>
        <StatusBar style="dark" backgroundColor="#7ecf99" />
        <TextInput placeholder="Enter text..." />
      </View>
    </TouchableWithoutFeedback>
  );
}
