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
    <View style={tw`flex-1 flex-row`}>
      <StatusBar style="dark" backgroundColor="#7ecf99" />

      <View style={tw`bg-blue-500 flex-9`}></View>
      <View style={tw`bg-red-500 flex-1`}></View>
      <View style={tw`bg-green-500 flex-1`}></View>
      <View style={tw`bg-pink-500 flex-1`}></View>
      <View style={tw`bg-black flex-5`}></View>
    </View>
  );
}
