// In App.js in a new project

import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { create } from "twrnc";
import Pan from "./Examples/ReanimatedExamples/Pan";
import {Tarot} from "./Examples/ReanimatedExamples/ReanimatedExample3";
import TestReanimated4 from "./Examples/ReanimatedExamples/ReanimatedExample4";
import Animations from "./Examples/screens/Animations/Animations";
import Transations from "./Examples/screens/Transations/Transations";

const tw = create(require(`./tailwind.config.js`));

const HomeScreen: React.FC<RootStackScreenProps<"Home">> = ({ navigation }) => {
  return (
    <View style={tw`flex-1`}>
      {/* <Notification /> */}
      {/* <TestReanimated1 /> */}
      {/* <TestReanimated4 /> */}
      {/* <Pan /> */}
      {/* <Tarot /> */}
      {/* <Text>hey2</Text> */}
      <ScrollView style={tw`p-4 `}>
        <TouchableOpacity onPress={() => navigation.navigate("Transations")} style={tw`bg-blue-400 p-4 rounded-lg`}>
          <Text style={tw`text-blue-900 text-2xl font-bold`}>Transations</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Animations")} style={tw`bg-blue-400 p-4 rounded-lg`}>
          <Text style={tw`text-blue-900 text-2xl font-bold`}>Animations</Text>
        </TouchableOpacity>

      </ScrollView>
      

    </View>
  );
};

type RootStackParamList = {
  Home: undefined;
  ProductCategory: undefined;
  Transations: undefined;
  Animations: undefined;
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
              <Text style={tw` text-blue-500`}>back</Text>
          ),
        }}
      >
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="ProductCategory" component={HomeScreen} />
        <RootStack.Screen name="Transations" component={Transations} />
        <RootStack.Screen name="Animations" component={Animations} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
