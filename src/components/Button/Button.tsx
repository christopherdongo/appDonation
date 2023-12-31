import React from 'react';
import {Pressable, Text} from 'react-native';
import { styles } from './style';


type PropsButton = {
    title: string,
    isDisabled?: boolean,
    onPress(): void,
}


export const Button: React.FC<PropsButton> = ({title, onPress, isDisabled=false})=> {

    return (
        <Pressable
        disabled={isDisabled}
        style={[styles.button, isDisabled && styles.disabled]}
        onPress={() => onPress()}
        >
              <Text
              style={styles.title}
              >{title}</Text>
        </Pressable>
    )
}

