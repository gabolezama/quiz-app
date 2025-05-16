import { StyleSheet } from "react-native";

export const styles =
    StyleSheet.create({
        container: {
            padding: '5%'
        },
        centeredText:{textAlign: 'center'},
        continueButton: {
            backgroundColor: '#3498db',
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2%'
        },
        buttonText: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
        }
    })