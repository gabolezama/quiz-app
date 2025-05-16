import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface RadioButtonProps {
  value: any;
  selected: boolean;
  onPress: (value: any) => void;
  style?: any;
  labelStyle?: any;
  circleStyle?: any;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
    value,
    selected,
    onPress,
    style,
    labelStyle,
    circleStyle
  }) => {
    return (
      <TouchableOpacity style={[styles.container, style]} onPress={() => onPress(value)}>
        <View style={[styles.circle, circleStyle, selected && styles.selectedCircle]} />
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
    },
    circle: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 8,
    },
    selectedCircle: {
      backgroundColor: '#007bff',
      borderColor: '#007bff',
    },
    label: {
      fontSize: 16,
    },
  });