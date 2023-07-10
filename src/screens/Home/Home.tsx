import React from 'react';
import {SafeAreaView} from 'react-native';
import {Header} from '../../components/Header/Header';
import {Tab} from '../../components/Tab/Tab'
import {globalStyle} from '../../styles/globalStyle';

import { Badge } from '../../components/Badge/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Search } from '../../components/Search/Search';
//import styles from './styles';

export const Home: React.FC = () => {
  return (
    <SafeAreaView
    style={[globalStyle.backgroundWhite, globalStyle.flex]}
    >
      <Header title={'Azzahri A.'}  type={1}/>

      <Tab  title={'Highlight'} />
      <Tab title={'Highlight'}  isDisabled={true}/>
      <Badge title={"Enviroment"} isDisabled={false} />
      <Search />

      <FontAwesomeIcon icon={faSearch} />
      

    </SafeAreaView>
  );
};
