import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import * as React from "react";
import tw from "twrnc";

export default function App() {
  return (
    <View style={tw`flex-1 flex-row`}>
      <Text>Main screen</Text>
    </View>
  );
}
