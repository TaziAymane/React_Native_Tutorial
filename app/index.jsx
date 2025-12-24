import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import ThemedCard from '../components/ThemedCard'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'
export class home extends Component {
    render() {
        return (
            <ThemedView style={style.container}>
                <ThemedLogo />
                {/* <Text style={style.title}> the number one  </Text>
                <Text style={{ marginTop: 10, marginBottom: 30 }}> Reading List app  </Text> */}

                {/* // add some spacs */}
                <Spacer height={10} />
                <ThemedCard >
                    <ThemedText style={style.title} title='true'>Hello this is a Aymane</ThemedText>
                </ThemedCard>
                {/* // add some spacs */}
                <Spacer height={20} />

                <Link style={[style.card, {}]} href={'/about'}>
                    <ThemedText style={style.title}>About Me</ThemedText>
                </Link>

                {/* // add some spacs */}
                <Spacer height={10} />

                <Link style={[style.card, {}]} href={'/contact'}>
                    <ThemedText style={style.title}>Contact Me</ThemedText>
                </Link>
            </ThemedView>


        )
    }
}

export default home
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
    cardTitle: {
        color: "white"
    },
    img: {
        width: 200,
        height: 200,
        // marginVertical : 20,
        borderRadius: 5

    }
})