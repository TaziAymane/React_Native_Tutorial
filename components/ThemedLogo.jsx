import { Image, View, StyleSheet, useColorScheme } from "react-native";

import DarkLogo from "../assets/img/imgDarkMode.jpg";
import LightLogo from "../assets/img/imgLightMode.jpg";

const ThemedLogo = () => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.avatar} />
    </View>
  );
};

export default ThemedLogo;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 60, // 👈 circle
    borderWidth: 3,
    borderColor: "#4f46e5", // indigo (you can theme this)
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6, // Android shadow
  },
});
