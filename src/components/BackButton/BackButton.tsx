import React from 'react'
import { Pressable} from 'react-native'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { styles } from './style';

type PropsBackButton = {
    onPress: () => void;
}

export const BackButton: React.FC<PropsBackButton> = ({onPress}) => {
    return (
        <Pressable
        style={styles.container}
    onPress={onPress}
    >
       <FontAwesomeIcon  icon={faArrowLeft} />
        </Pressable>
    )

    
}