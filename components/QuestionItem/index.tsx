import { IQuestions } from "@/utils/dataFetch";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { RadioButton } from "../RadioButton";

export default ({
  id,
  index,
  text,
  answerType
}: IQuestions) => {
  const [selectedObj, setSelectedObj] = useState<any>(resetSelection());
  const radioButtonValues = [0,1,2,3]

  function resetSelection () {
    return radioButtonValues?.reduce((prev, curr) => {
      return ({
        ...prev,
        [curr]: false
      })
    }, {})
  }
  const handleToggle = (tag: string) => {
    setSelectedObj({
      ...resetSelection(),
      [tag]: true
    })
  }
  const isSelected = (item: any) => {
    if(selectedObj)
      return selectedObj[String(item)]
    else
      return false
  }
  
  return (
    <View style={{ 
        display: 'flex',
        flexDirection: 'row',
        marginTop: '2%',
        alignItems: 'center'
    }}>
      <FlatList
        data={radioButtonValues}
        renderItem={({item}) => <RadioButton onPress={handleToggle} selected={isSelected(item)} value={item}/>}
        horizontal={true}
        style={{
            maxWidth: '30%'
        }}
      />
      <Text style={{
        maxWidth: '70%',
        textAlign: 'justify'
      }}>{text}</Text>
    </View>
  );
};