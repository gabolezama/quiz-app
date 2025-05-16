import QuestionComponent from '@/components/QuestionComponent';
import { getQuizQuestions, IQuizQuestions } from '@/utils/dataFetch';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useTabsContext } from './_layout';

const emptyQuizQuestion = [{
  id: 0,
  title: "",
  imageUrl: "",
  description: "",
  questions: []
}]

export default function HomeScreen() {
  const router = useRouter();
  const {handleSendResults} = useTabsContext();
  const [quizQuestions, setQuizQuestions] = useState<IQuizQuestions[]>(emptyQuizQuestion);
  useEffect(() => {
    const data = getQuizQuestions();
    setQuizQuestions(data)
  },[])

  return (
    <SafeAreaView style={{
      padding: '5%'
    }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={quizQuestions}
          renderItem={({ item }) => <QuestionComponent {...item} />}
        />
        <Text style={{textAlign: 'center'}}>
          Once you finish answering these questions, we'll need some extra data to make your profile, this button will take you there:
        </Text>
        <TouchableOpacity 
          style={{
            backgroundColor: '#3498db', // Un tono de azul bonito
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2%'
          }}
          onPress={() => router.push('/about')}
        >
          <Text style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
            Continue
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
