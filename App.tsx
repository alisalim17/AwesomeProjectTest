// In App.js in a new project

import * as React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { create } from "twrnc";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_900Black,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";

const tw = create(require(`./tailwind.config.js`));

const HomeScreen: React.FC<RootStackScreenProps<"Home">> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to product category page"
        onPress={() => navigation.navigate("ProductCategory")}
        // onPress={() =>
        // navigation.reset({ routes: [{ name: "ProductCategory" }], index: 0 })
        // }
      />
      <View
        style={{
          width: 200,
          height: 200,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}
      ></View>
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
              <Text style={tw``}>back</Text>
              <Text style={tw`font-primary-900`}>back</Text>
              <Text style={{ fontFamily: "bold" }}>back</Text>
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
