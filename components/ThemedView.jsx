import { View, useColorScheme } from 'react-native'
import { Colors } from '../constans/Colors'

const ThemedView = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light // if we can't access to the colorShema it well be light by default 
    return (
        <View style={
            [{ backgroundColor: theme.background }, style]}
            {...props}
        />
    )
}

export default ThemedView