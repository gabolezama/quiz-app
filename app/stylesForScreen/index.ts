import { Platform, StyleSheet } from "react-native";

export const style = (isContinueDisabled: boolean) => 
    StyleSheet.create({
        container: {
            padding: '5%',
            paddingBottom: Platform.OS === 'ios'? '15%' : '5%'
        },
        centeredText:{textAlign: 'center'},
        continueButton: {
            backgroundColor: isContinueDisabled? 'grey' : '#3498db',
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