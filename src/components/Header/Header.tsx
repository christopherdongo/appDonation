import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

type PropsHeader = {
  title: string,
  type?: number,
  color?: string,
  numberOfLines?: number,
};

export const Header: React.FC<PropsHeader> = ({
  title = '',
  type = 1,
  color = '#000000',
  numberOfLines,
}) => {
  const ramdonTitle = (type: number) => {
    switch (type) {
      case 1:
        return styles.title1;
      case 2:
        return styles.title2;
      case 3:
        return styles.title3;
      default:
        return styles.title1;
    }
  };

  return (
    <View>
      <Text
        style={[ramdonTitle(type), {color: color && color}]}
        numberOfLines={numberOfLines && numberOfLines }>
        {title}
      </Text>
    </View>
  );
};
