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
  const [name, setName] = React.useState("");
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
    alert(`Yes sir.couunter is showing ${counter} us sir`);
    console.log("hey");
  };

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <StatusBar style="dark" backgroundColor="#7ecf99" />
      <React.Fragment>
        <Text style={tw`mb-2`}>Enter your name</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => setName(text)}
          style={tw`border-gray-300 px-2 border w-[150px]`}
          placeholder="Enter your name"
        />
        <Text style={tw`mt-2 text-lime-600 font-bold italic text-xl `}>
          Hi,my name is{" "}
          <Text style={tw`bg-lime-300 text-lime-700`}>{name}</Text>
        </Text>
      </React.Fragment>
      <React.Fragment>
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
      </React.Fragment>
    </View>
  );
}
