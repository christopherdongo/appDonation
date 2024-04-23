import React from 'react'
import { Pressable} from 'react-native'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

type PropsBackButton = {
    onPress: () => void;
}

export const BackButton: React.FC<PropsBackButton> = ({onPress}) => {

    return <Pressable
    onPress={() => onPress}
    >
       <FontAwesomeIcon  icon={faArrowLeft} />
        </Pressable>

    
}