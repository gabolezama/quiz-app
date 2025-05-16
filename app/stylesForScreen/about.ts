import { StyleSheet } from "react-native";

export const style = (isButtonDisabled: boolean) => StyleSheet.create({
    mainContainer:{ display: 'flex', alignItems: 'center', padding: '5%' },
    container: { width: '90%' },
    boldStyle: {
      fontWeight: 'bold'
    },
    size: {
      fontSize: 20
    },
    centeredText: {
      textAlign: 'center'
    },
    justifiedText: {
      textAlign: 'justify'
    },
    input:{
      backgroundColor: 'white',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    buttonText:{
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    sendButton:{
      backgroundColor: isButtonDisabled? 'grey':'#3498db',
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '2%'
    },
  });