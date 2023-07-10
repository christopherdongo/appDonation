import React,{useRef} from 'react';
import {styles} from './style';
import {View, TextInput, Pressable} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const Search = ()=>{

    const textInputRef: React.MutableRefObject<null> = useRef(null);

    const handleFocus = () =>{
          textInputRef.current.focus();
    }


    return(
        <Pressable style={styles.searchInputContainer} onPress={handleFocus}>
       <FontAwesomeIcon  icon={faSearch} />
       <TextInput 
       ref={textInputRef}
       placeholder='Search'
       style={styles.searchInput}
       />

        </Pressable>
    )

}