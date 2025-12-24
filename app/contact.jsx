import { View, Text, StyleSheet, Pressable, Linking } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";

export default function Contact() {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Contact Me</Text>

      {/* Contact Card */}
      <View style={styles.card}>
        <Pressable
          onPress={() => Linking.openURL("mailto:aymanetaziconcoure@gmail.com")}
        >
          <Text style={styles.item}>📧 aymanetaziconcoure@gmail.com</Text>
        </Pressable>

        <Pressable
          onPress={() => Linking.openURL("tel:+212 6 40 90 71 71")}
        >
          <Text style={styles.item}>📞 +212 6 40 90 71 71</Text>
        </Pressable>

        <Pressable
          onPress={() => Linking.openURL("https://github.com/TaziAymane")}
        >
          <Text style={styles.item}>💻 GitHub</Text>
        </Pressable>

        <Pressable
          onPress={() => Linking.openURL("https://linkedin.com/in/TaziAymane")}
        >
          <Text style={styles.item}>🔗 LinkedIn</Text>
        </Pressable>
      </View>

      {/* Back Button */}
      <Link href="/" style={styles.backButton}>
        <Text style={styles.backText}>Back Home</Text>
      </Link>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#111",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  item: {
    color: "white",
    fontSize: 16,
    marginVertical: 8,
  },
  backButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#111",
  },
  backText: {
    color: "white",
    fontWeight: "bold",
  },
});
