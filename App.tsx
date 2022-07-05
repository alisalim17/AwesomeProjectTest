import { StatusBar } from "expo-status-bar";
import {
  Modal,
  Pressable,
  RefreshControl,
  ScrollView,
  Switch,
  Text,
  View,
} from "react-native";

import React, { useState } from "react";
import tw from "twrnc";

const wait = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function App() {
  const [isEnabled, setIsEnabled] = useState(1);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={tw`flex-1 items-center justify-center pt-5`}>
      <StatusBar style="dark" backgroundColor="#7ecf99" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={{ fontSize: 26, color: "orange", textAlign: "center" }}>
          List of Default Android Font Family in React Native
        </Text>

        <Text style={{ fontSize: 26, fontFamily: "monospace" }}>
          1. Monospace
        </Text>

        <Text style={{ fontSize: 26, fontFamily: "normal" }}>2. Normal</Text>

        <Text style={{ fontSize: 26, fontFamily: "notoserif" }}>
          3. Notoserif
        </Text>

        <Text style={{ fontSize: 26, fontFamily: "Roboto" }}>4. Roboto</Text>

        <Text style={{ fontSize: 26, fontFamily: "sans-serif" }}>
          5. Sans-Serif
        </Text>

        <Text style={{ fontSize: 26, fontFamily: "sans-serif-light" }}>
          6. Sans-Serif-Light
        </Text>

        <Text style={{ fontSize: 26, fontFamily: "sans-serif-thin" }}>
          7. Sans Serif Thin
        </Text>

        <Text style={{ fontSize: 26, fontFamily: "sans-serif-condensed" }}>
          8. Sans-Serif-Condensed
        </Text>

        <Text style={{ fontSize: 26, fontFamily: "sans-serif-medium" }}>
          9. Sans Serif Medium
        </Text>

        <Text style={{ fontSize: 26, fontFamily: "serif" }}>10. Serif</Text>
      </ScrollView>
    </View>
  );
}
