import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {Header} from '../../components/Header/Header';
import{Button} from '../../components/Button/Button';
import {Tab} from '../../components/Tab/Tab'
import {globalStyle} from '../../styles/globalStyle';
import { horizontalScale } from '../../styles/scaling';
//import styles from './styles';

export const Home: React.FC = () => {
  return (
    <SafeAreaView
    style={[globalStyle.backgroundWhite, globalStyle.flex]}
    >
      <Header title={'Azzahri A.'}  type={1}/>

      <Tab  title={'Highlight'} />
      <Tab title={'Highlight'}  isDisabled={true}/>
      

    </SafeAreaView>
  );
};
