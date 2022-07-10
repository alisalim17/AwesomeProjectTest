import React, { SetStateAction } from "react";
import { Button, Platform, View } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Text } from "react-native";

interface NotificationProps {}
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
const Notification: React.FC<NotificationProps> = ({}) => {
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
        console.log("clicked my noti");
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
    <View>
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
              title: "Test notification",
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
export default Notification;
