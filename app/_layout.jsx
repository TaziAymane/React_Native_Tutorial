import { Slot, Stack } from 'expo-router'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from '../constans/Colors';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
    // darck and light mode
    const colorScheme = useColorScheme();
    console.log(colorScheme);
    const theam = Colors[colorScheme] ?? Colors.light // if we can't access to the colorShema it well be light by default 
    return (
        <>
            <StatusBar value='auto' />
            <Stack screenOptions={{
                headerStyle: { backgroundColor: theam.navBackground },
                headerTintColor: theam.title
            }}>
                
                <Stack.Screen name='index' options={{ title: 'Home' }} />
                <Stack.Screen name='about' options={{ title: 'About me' }} />
                <Stack.Screen name='contact' options={{ title: 'Contact me', headerShown: true }} />
            </Stack>
        </>

    )
}

export default RootLayout

const styles = StyleSheet.create({})