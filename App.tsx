// In App.js in a new project

import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { create } from "twrnc";
import Notification from "./Notification";
import TestReanimated from "./TestReanimated";

const tw = create(require(`./tailwind.config.js`));

const HomeScreen: React.FC<RootStackScreenProps<"Home">> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Notification /> */}
      <TestReanimated />
    </View>
  );
};

type RootStackParamList = {
  Home: undefined;
  ProductCategory: undefined;
};

type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const RootStack = createStackNavigator<RootStackParamList>();

function App() {
  let [fontsLoaded] = useFonts({
    "simple-line-icons": Inter_900Black,
    bold: Inter_900Black,
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor="#7ecf99" />

      <RootStack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          gestureEnabled: true,
          gestureDirection: "vertical",

          headerBackImage: () => (
            <TouchableOpacity>
              <Text style={tw` text-blue-500`}>back</Text>
            </TouchableOpacity>
          ),
        }}
      >
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="ProductCategory" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
