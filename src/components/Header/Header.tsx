import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';

type PropsHeader = {
    title?: string;
    type?: number,
}


export const Header: React.FC<PropsHeader> = ({title='hola como estas',type=1}) =>{

    const ramdonTitle =() => {
        switch(type){
            case 1:
            return styles.title1;
            case 2:
             return styles.title2;
            case 3:
            return styles.title3;
           default :
           return styles.title1;
        }
    }

    return(
        <View>
            <Text 
            style={ramdonTitle()}
            >{title}</Text>
        </View>
    )
}
