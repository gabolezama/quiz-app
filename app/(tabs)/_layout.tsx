import { Tabs } from 'expo-router';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';

import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
interface IUserData {name: string, email: string}
export interface ITabsContext {
  isContinueDisabled: boolean,
  handleSendResults: ({name, email}: IUserData) => void;
  handleSetResults: (data: any) => void;
}

interface IResultData {
  questionId: number;
  selectedObj: { [key: string]: boolean };
  topicId: number;
}
interface IResults{
  [topicId: number]: IResultData[];
}

const TabsContext = createContext<ITabsContext>({ 
  isContinueDisabled: true,
  handleSendResults: () => null,
  handleSetResults: () => null
})

export const useTabsContext = () => {
  return useContext(TabsContext)
}
export default function TabLayout() {
  const [dataResults, setDataResults] = useState<IResults>({})
  const [isContinueDisabled, setIsContinueDisabled] = useState<boolean>(true)

  const handleSetResults = (data: IResultData): void => {
    setDataResults((prevDataResults: any) => {
      const topicId = data.topicId;
      const existingResultsForTopic = prevDataResults[topicId] || [];
      const updatedResults = existingResultsForTopic.filter(
        (item: IResultData) => item.questionId !== data.questionId
      );
      return {
        ...prevDataResults,
        [topicId]: [...updatedResults, data],
      };
    });
  };

  const handleSendResults = (userData: IUserData) => {
    if (isContinueDisabled)
      Alert.alert(`Quiz's questions haven't been completed. Cannot send data.`)
    else {
      Alert.alert(`Thanks for your answers. Data it's being sending...`)
      console.log(
        'Resultados del Quiz',
        {
          userData,
          quiz: dataResults
        });
    }
  }

  const checkButtonEnabled = (): void => {
    let allTopicsHaveSelection = true;
    for (const topicId in dataResults) {
        const resultsForTopic = dataResults[topicId];
        let topicHasAllQuestionsAnswered = true;
        for (const result of resultsForTopic) {
          const selectedValues = Object.values(result.selectedObj);
          if (!selectedValues.some(value => value === true)) {
            topicHasAllQuestionsAnswered = false;
            break;
          }
        }
        if (!topicHasAllQuestionsAnswered && Object.keys(resultsForTopic[0].selectedObj).length > 0) {
          allTopicsHaveSelection = false;
          break;
        }
    }
    setIsContinueDisabled(!allTopicsHaveSelection);
  };
  
  const tabsContextValue = {
    isContinueDisabled,
    handleSendResults,
    handleSetResults
  }

  useEffect(() =>{
    checkButtonEnabled()
  }, [dataResults])

  return (
    <TabsContext.Provider value={tabsContextValue}>
      <Tabs
        screenOptions={{
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Quiz',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: 'About',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          }}
        />
      </Tabs>
    </TabsContext.Provider>
  );
}
