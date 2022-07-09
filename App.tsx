// In App.js in a new project

import * as React from "react";
import { View, Text, Button, TouchableOpacity, Platform } from "react-native";
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
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

const tw = create(require(`./tailwind.config.js`));

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const HomeScreen: React.FC<RootStackScreenProps<"Home">> = ({ navigation }) => {
  const [expoPushToken, setExpoPushToken] = React.useState("");
  const [notification, setNotification] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  React.useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log("this is very cool", notification);
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    console.log("token", token);
    return token;
  }

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
      <Button
        title="Send notification"
        onPress={() => {
          Notifications.scheduleNotificationAsync({
            content: {
              title: "Test notification cindir husi",
              body: "This is my local notification",
            },
            trigger: {
              seconds: 10,
            },
          });
        }}
        // onPress={() =>
        // navigation.reset({ routes: [{ name: "ProductCategory" }], index: 0 })
        // }
      />
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
