import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import { Link } from 'expo-router';
import { Colors } from '../constans/colors';

const about = ()=>{
        // darck and light mode
        const colorScheme = useColorScheme();
        console.log(colorScheme);
        const theam = Colors[colorScheme] ?? Colors.light // if we can't access to the colorShema it well be light by d
    return (
        <View style={[style.container , {backgroundColor : theam.background , color : theam.title}]}>
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

export default about