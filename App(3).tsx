import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { Alert } from "react-native";

import * as React from "react";
import tw from "twrnc";

type ImageIndexType = 0 | 1 | 2 | 3 | 4 | 5;

export default function App() {
  const images = {
    "0": require("./assets/dice1.png"),
    "1": require("./assets/dice2.png"),
    "2": require("./assets/dice3.png"),
    "3": require("./assets/dice4.png"),
    "4": require("./assets/dice5.png"),
    "5": require("./assets/dice6.png"),
  };

  const [data, setData] = React.useState({
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
  });
  const [dice, setDice] = React.useState(0);

  return (
    <View style={tw`flex-1`}>
      <StatusBar style="dark" backgroundColor="#7ecf99" />
      <View style={tw`flex items-center mt-12`}>
        <Image source={images[dice as ImageIndexType]} />
      </View>
      <TouchableOpacity
        style={tw`flex items-center`}
        onPress={() => {
          const n = Math.floor(Math.random() * 6) as ImageIndexType;
          Alert.alert("Alert Title", "My Alert Msg", [
            {
              text: "Cancel",
              onPress: () => {
                console.log("cancel pressed");
              },
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => {
                setData({
                  ...data,
                  [n]: data[n] + 1,
                });
                setDice(n);
              },
            },
          ]);
        }}
      >
        <Text style={tw`text-blue-500 capitalize text-xl my-4`}>roll</Text>
      </TouchableOpacity>
      <View style={tw`flex items-center`}>
        <ScrollView>
          {Object.keys(data).map((i: any) => (
            <Text>
              {i}: {data[i as ImageIndexType]}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
