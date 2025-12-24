import React, { Component } from 'react'
import { Text, View, StyleSheet , Image } from 'react-native'
import { Link } from 'expo-router'
import profile from '../assets/img/img.jpg'
export class home extends Component {
    render() {
        return (
            <View style={style.container}>
                <Image style={style.img} source={profile} />
                <Text style={style.title}> the number one  </Text>
                <Text style={{ marginTop: 10, marginBottom: 30 }}> Reading List app  </Text>

                <View style={style.card}>
                    <Text style={style.cardTitle}>Hello this is a Aymane</Text> 
                </View>
                <Link style={[style.card ,{} ]} href={'/about'}>About Page</Link>
                <Link style={[style.card ,{} ]} href={'/contact'}>Contact Page</Link>
            </View>


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
    card : {
        backgroundColor : "#111",
        padding : 20 ,
        borderRadius : 5 ,
        boxShadow : "4px  4px rgba(0,0,0,0.1)",
        color : 'white' ,
        marginTop : 5
    },
    cardTitle : {
        color : "white"
    },
    img : {
        width : 200 ,
        height : 200 ,
        // marginVertical : 20,
        borderRadius : 5 

    }
})