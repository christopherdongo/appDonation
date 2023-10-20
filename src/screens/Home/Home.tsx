import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {Header} from '../../components/Header/Header';
import {globalStyle} from '../../styles/globalStyle';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { updateFirstName, updateLastName, resetTopInitialState } from '../../redux/reducers/User'
import { ScrollView } from 'react-native-gesture-handler';
import {styles} from './styles';
import { Search } from '../../components/Search/Search';

export const Home: React.FC = () => {

  const { firstName, lastName, profileImage } = useSelector( (state: RootState) => state.user)

  const dispatch = useDispatch()

  console.log(profileImage)

  useEffect(() => {
    dispatch(resetTopInitialState())
  }, [])
  

  return (
    <SafeAreaView
    style={[globalStyle.backgroundWhite, globalStyle.flex]}
    >
      {/* <Search onSearch={(value: string) => {console.log(value)}}  /> */}

      {/*<View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: horizontalScale(24)}}>
      <SingleDonationItem 
    uri={'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'} 
    badgeTitle={"Environment"} 
    donationTitle={"Tree Cactus"} 
    price={44} 
    />

<SingleDonationItem 
    uri={'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'} 
    badgeTitle={"Environment"} 
    donationTitle={"Tree Cactus"} 
    price={44} 
    />
  </View> */}
    <ScrollView
    showsVerticalScrollIndicator={false}
    >
      <View
      style={styles.header}>
        <View>
        <Text style={styles.headerIntroText}>Hello, </Text>
        <View style={styles.username}>
        <Header title={firstName + ' ' + lastName[0]+'.'}  />
        </View>
        </View>
        <Image source={{uri: profileImage}} style={styles.profileImage} resizeMode={'contain'}/>
      </View>
      <View style={styles.searchBox}>
        <Search />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};
