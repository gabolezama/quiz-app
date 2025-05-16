import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '2%',
        alignItems: 'center'
    },
    list: {
        maxWidth: Platform.OS === 'ios'? '35%':'30%'
    },
    text: {
        maxWidth: Platform.OS === 'ios'? '65%':'70%',
        paddingLeft: Platform.OS === 'ios'? '2%': 0,
        textAlign: 'justify'
    }
})