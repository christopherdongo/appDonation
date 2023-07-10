import React, {useRef, useState} from 'react';
import {Pressable, View,Text} from 'react-native';
import {styles} from './style';
import {horizontalScale} from '../../styles/scaling';

type PropsButton = {
  title: string;
  isDisabled?: boolean;
  onPress?: () => void | undefined;
};

export const Badge = ({
  title,
  onPress = () => console.log('onPress'),
  isDisabled = false,
}: PropsButton) => {
  const [width, setWith] = useState(0);

  const textRef = useRef(null);
  const paddingHorizontal = 10;

  const tabWith = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <View
      style={[styles.badge, tabWith]}
      >
      <Text
        onTextLayout={event => {
          setWith(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[styles.title, isDisabled && styles.inactiveTitle]}>
        {title}
      </Text>
    </View>
  );
};
