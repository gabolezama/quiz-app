import { IQuizQuestions } from "@/utils/dataFetch";
import { FlatList, Text, View } from "react-native";
import QuestionItem from "../QuestionItem";

export default ({
  id,
  title,
  questions
}: IQuizQuestions) => {
  return (
    <View style={{ marginBottom: '5%'}}>
      <Text>{title}</Text>
      <FlatList
        data={[0,1,2,3].map(i => i)}
        renderItem={({item}) => <Text style={{marginRight: 20}}>{item}</Text>}
        horizontal={true}
      />
      <FlatList
        data={questions}
        renderItem={({item}) => <QuestionItem topicId={id} {...item}/>}
      />
    </View>
  );
};