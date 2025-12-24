import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import { Link } from 'expo-router';
import { Colors } from '../constans/Colors';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import ThemedLogo from '../components/ThemedLogo';

const about = () => {
    // darck and light mode
    const colorScheme = useColorScheme();
    console.log(colorScheme);
    const theme = Colors[colorScheme] ?? Colors.light // if we can't access to the colorShema it well be light by default 
    return (
        <ThemedView style={[style.container, { backgroundColor: theme.background, color: theme.title }]}>
            <ThemedLogo />

            <ThemedText style={style.title}>about me</ThemedText>
            {/* About Card */}
            <View style={[style.cardDescription, { backgroundColor: theme.card }]}>
                <Text style={[style.description, { color: theme.text }]}>
                    Passionate developer focused on building modern web and mobile
                    applications. I work with React, React Native, Express, Laravel,
                    and MySQL. Always learning and improving 🚀
                </Text>
            </View>
            <Link style={style.card} href={"/"}>
                <ThemedText style={style.title}>Back Home</ThemedText>
            </Link>
        </ThemedView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    card: {
        backgroundColor: "#111",
        padding: 20,
        borderRadius: 5,
        boxShadow: "4px  4px rgba(0,0,0,0.1)",
        color: 'white',
        marginTop: 5
    },

     cardDescription: {
    width: "100%",
    padding: 20,
    borderRadius: 12,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
  },
})

export default about