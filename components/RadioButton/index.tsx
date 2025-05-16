import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";

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

  