import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import OneSignal from "react-native-onesignal";
import Constants from "expo-constants";
OneSignal.setAppId(Constants.manifest.extra.oneSignalAppId);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text
        style={{
          marginTop: 40,
        }}
      >
        {Constants.manifest.extra.oneSignalAppId}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
