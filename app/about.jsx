import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'

export default function about() {
    return (
        <View style={style.container}>
            <Text style={style.title}>about Page</Text>
            <Link style={style.card} href={"/"}>Back Home</Link>
        </View>
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
        card : {
        backgroundColor : "#111",
        padding : 20 ,
        borderRadius : 5 ,
        boxShadow : "4px  4px rgba(0,0,0,0.1)",
        color : 'white' ,
        marginTop : 5
    },
})