import QuestionComponent from '@/components/QuestionComponent';
import { getQuizQuestions, IQuizQuestions } from '@/utils/dataFetch';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView } from 'react-native';

const emptyQuizQuestion = [{
  id: 0,
  title: "",
  imageUrl: "",
  description: "",
  questions: []
}]

export default function HomeScreen() {
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
      </ScrollView>
    </SafeAreaView>
  );
}
