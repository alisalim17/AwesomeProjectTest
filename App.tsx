import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import tw from "twrnc";

export default function App() {
  const [counter, setCounter] = React.useState(0);
  console.log(counter);
  const handlePlus = () => {
    setCounter(counter + 1);
    console.log("+++++++");
  };
  const handleMinus = () => {
    setCounter(counter - 1);
    console.log("---------");
  };

  const handleAlert = () => {
    alert("Yes sir");
    console.log("hey");
  };

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <StatusBar style="dark" backgroundColor="#7ecf99" />
      <Text style={tw`mt-2 text-purple-600 font-bold italic text-4xl `}>
        {counter}
      </Text>
      <View style={tw`flex flex-row  justify-between`}>
        <TouchableOpacity style={tw`mr-4`} onPress={handleAlert}>
          <Text>Alert me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`mr-4`} onPress={handlePlus}>
          <Text>Increment</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleMinus}>
          <Text>Decrease</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
