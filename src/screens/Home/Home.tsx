import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Image, Pressable, FlatList, ScrollView} from 'react-native';
import {Header} from '../../components/Header/Header';
import {globalStyle} from '../../styles/globalStyle';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { updateFirstName, updateLastName, resetTopInitialState } from '../../redux/reducers/User'
import { Categories, resetCategories, updateSelectedCategoryId } from '../../redux/reducers/Categories'
import { Button } from '../../components/Button/Button'
import {styles} from './styles';
import { Search } from '../../components/Search/Search';
import { Tab } from '../../components/Tab/Tab';


export const Home: React.FC = () => {

  const { firstName, lastName, profileImage } = useSelector( (state: RootState) => state.user)
  const { categories, selectedCategoryId}  = useSelector((state: RootState) => state.categories)

  const dispatch = useDispatch()

  const [categoryPage, setCategoryPage] = useState(1)
  const [categoryList, setCategoryList] = useState([])

  const categoryPageSize = 4

  useEffect(() => {
    dispatch(resetTopInitialState())
  }, [])

  useEffect(() => {
       setCategoryList(pagination(categories, categoryPage, categoryPageSize))
       setCategoryPage(prev => prev + 1)
  }, [])

  const pagination  = (items: {][], pageNumber: number, pageSize: number) => {
    const startIndex = (pageNumber - 1) * pageSize
    const endIndex = startIndex + pageSize

    if(startIndex >= items.length) return []

    return items.slice(startIndex, endIndex)
  }



  return (
    <SafeAreaView
    style={[globalStyle.backgroundWhite, globalStyle.flex]}
    >
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
      <Pressable style={styles.highlightImageContainer}>
        <Image 
        style={styles.highlight}
        source={require('../../../assets/images/highlighted_image.png')}
        resizeMode={'contain'}
        />
      </Pressable>
      <View style={styles.categoryHeader}>
        <Header title='Select Category' type={2}/>
      </View>
      <View style={styles.categories}>
       <FlatList 
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       data={categories}
       renderItem={({item}) => <View style={styles.categoryItem} key={item.categoriId}>
        <Tab
        onPress={(value) => dispatch(updateSelectedCategoryId(value))}
        title={item.name} 
        tabId={item.categoriId}
       isDisabled={item.categoriId !== selectedCategoryId}
       /></View>}
       
       
       />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};
