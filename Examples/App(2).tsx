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
} from "react-native";
import * as React from "react";
import tw from "twrnc";

export default function App() {
  const [data, setData] = React.useState([
    {
      name: "Apple",
      id: "1",
    },
    {
      name: "Banana",
      id: "2",
    },

    {
      name: "Orange",
      id: "3",
    },

    {
      name: "Kiwi",
      id: "4",
    },
    {
      name: "Plum",
      id: "5",
    },
    {
      name: "Mango",
      id: "6",
    },
    {
      name: "Watemelon",
      id: "7",
    },
    {
      name: "Melon",
      id: "8",
    },
  ]);
  return (
    <View style={tw`flex-1`}>
      <StatusBar style="dark" backgroundColor="#7ecf99" />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => console.log(item.name)}
            style={tw`my-8 bg-lime-300 p-4`}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      {/* <ScrollView>
        {data.map((item) => (
          <View style={tw`my-8 bg-lime-300 p-4 `} key={item.id}>
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}
