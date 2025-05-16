import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTabsContext } from './_layout';


export default function TabTwoScreen() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const isButtonDisabled = !name || !email
  const {handleSendResults} = useTabsContext();
  return (
    <ScrollView >
      <View style={{ display: 'flex', alignItems: 'center', padding: '5%' }}>
        <View style={{ width: '90%' }}>
          <Text style={[styles.centeredText, styles.boldStyle, styles.size]}>ABACUS</Text>
          <Text style={[styles.centeredText, styles.size]}>What's your financial archetype?</Text>
          <Text style={styles.justifiedText}>
            {`
          When it comes to money, you are more than a number.

          You are a person with thoughts, feelings, dreams… and a past. A very speciﬁc and important money past. Most people have formed both helpful and harmful habits around spending, saving, giving, and investing. Many of us make financial decisions based not on our current financial situation, but on biases and tendencies that were formed many years ago.

          Learning your money archetypes can help you have a healthier, more balanced relationship to money. Keep these three important things in mind:

          There's no hierarchy. There aren't better and worse archetypes.
          Archetypes can be fluid. We're usually a combination of one, two, or three of them and we may change over time.
          They all possess both positive intentions as well as painful emotional states.
          Knowing your financial archetypes brings you greater awareness around your inherent money behaviors.

          Fill out these 5 questions to discover your dominant Financial Archetypes.
          
          Once you have finished answering all questions just fulfill the following fields and press the send button, so that the results can be sent to yuor email.`}
          </Text>
        </View>
        <View>
          <Text style={[styles.centeredText, styles.boldStyle]}>Please enter your information to see your results</Text>
          <Text>Name:</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName}/>
          <Text>Email:</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail}/>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: isButtonDisabled? 'grey':'#3498db',
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2%'
          }}
          disabled={isButtonDisabled}
          onPress={() => handleSendResults({name, email})}
        >
          <Text style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
            Send Data
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    borderColor: '#ccc', // Un gris claro para un borde sutil
  },
});
