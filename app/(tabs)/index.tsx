import QuestionComponent from '@/components/QuestionComponent';
import { getQuizQuestions, IQuizQuestions } from '@/utils/dataFetch';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { style } from '../stylesForScreen/index';
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
  const {isContinueDisabled} = useTabsContext();
  const [quizQuestions, setQuizQuestions] = useState<IQuizQuestions[]>(emptyQuizQuestion);
  const styles = style(isContinueDisabled)
  
  useEffect(() => {
    const data = getQuizQuestions();
    setQuizQuestions(data)
  },[])

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <FlatList
            data={quizQuestions}
            renderItem={({ item }) => <QuestionComponent {...item} />}
          />
          <Text style={styles.centeredText}>
            Once you finish answering these questions, we'll need some extra data to make your profile, this button will take you there:
          </Text>
          <TouchableOpacity 
            style={styles.continueButton}
            disabled={isContinueDisabled}
            onPress={() => router.push('/about')}
          >
            <Text style={styles.buttonText}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
