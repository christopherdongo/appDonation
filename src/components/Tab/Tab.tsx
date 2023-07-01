import React, {useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';
import { styles } from './style';
import { horizontalScale } from '../../styles/scaling';


type PropsButton = {
    title: string,
    isDisabled?: boolean,
    onPress?:() => void,
}


export const Tab = ({title, onPress, isDisabled}:PropsButton)=> {

    const [width, setWith] = useState(0);

    const textRef = useRef(null);
    const paddingHorizontal = 33;

    const tabWith = {
        width: horizontalScale(paddingHorizontal*2+width)
    }

    return (
        <Pressable
        disabled={isDisabled}
        style={[styles.tab, isDisabled && styles.inactiveTab, tabWith]}
        onPress={onPress}
        >
              <Text
              onTextLayout={event => {
                setWith(event.nativeEvent.lines[0].width)
              }}
              ref={textRef}
              style={[styles.title, isDisabled && styles.inactiveTitle]}
              >{title}</Text>
        </Pressable>
    )
}

Tab.defaultProps = {
  isDisabled: false,
  onPress: () => console.log('onPress'),
}