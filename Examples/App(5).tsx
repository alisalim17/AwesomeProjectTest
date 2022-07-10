import { StatusBar } from "expo-status-bar";
import { Modal, Text, View } from "react-native";

import * as React from "react";
import tw from "twrnc";

export default function App() {
  return (
    <View style={tw`flex-1 pt-5`}>
      <StatusBar style="dark" backgroundColor="#7ecf99" />

      <Text>Main screen</Text>
      <Modal visible={false}>
        <Text>Modal screen</Text>
      </Modal>
    </View>
  );
}
