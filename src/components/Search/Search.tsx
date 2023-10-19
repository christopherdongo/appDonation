import React,{useRef, useState} from 'react';
import {styles} from './style';
import {View, TextInput, Pressable} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../styles/scaling';

type PropsSearch = {
    onSearch: (args: string) => void
}

export const Search: React.FC<PropsSearch> = ({onSearch})=>{

    const textInputRef: React.MutableRefObject<null> = useRef(null);
    const [search, setSearch] = useState('')

    const handleFocus = () =>{
          textInputRef.current.focus();
    }

    const hanlerSearch = (searchValue : string) => {
    setSearch(searchValue)
    onSearch(searchValue)
    }

    return(
        <Pressable style={styles.searchInputContainer} onPress={handleFocus}>
       <FontAwesomeIcon  
       color={'#25C0FF'}
       size={scaleFontSize(22)}
       icon={faSearch} />
       <TextInput 
       ref={textInputRef}
       placeholder='Search'
       style={styles.searchInput}
       onChangeText={(value) => hanlerSearch(value)}
       />
        </Pressable>
    )

}