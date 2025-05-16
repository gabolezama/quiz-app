import { ITabsContext, useTabsContext } from "@/app/(tabs)/_layout";
import { IQuestions } from "@/utils/dataFetch";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { RadioButton } from "../RadioButton";
import { styles } from "./styles";

export default ({
  id,
  topicId,
  index,
  text,
  answerType
}: IQuestions) => {
  const {handleSetResults} = useTabsContext() as ITabsContext;
  const radioButtonValues: number[] = [0,1,2,3];
  const [selectedObj, setSelectedObj] = useState<any>(resetSelection());

  function resetSelection() {
    return radioButtonValues.reduce((accumulator, currentValue) => {
      return {
        ...accumulator,
        [currentValue]: false,
      };
    }, {});
  }
  const handleToggle = (tag: string) => {
    const newSelection = {
      ...resetSelection(),
      [tag]: true
    }
    handleSetResults({
      topicId,
      questionId: id,
      selectedObj: newSelection
    })
    setSelectedObj(newSelection)
  }
  const isSelected = (item: any) => {
    if(selectedObj)
      return selectedObj[String(item)]
    else
      return false
  }

  useEffect(() => {
    handleSetResults({
      topicId,
      questionId: id,
      selectedObj
    })
  }, [])  
  
  return (
    <View style={styles.container}>
      <FlatList
        data={radioButtonValues}
        renderItem={({item}) => <RadioButton onPress={handleToggle} selected={isSelected(item)} value={item}/>}
        horizontal={true}
        style={styles.list}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};