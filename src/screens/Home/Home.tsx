import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import {Header} from '../../components/Header/Header';
import {globalStyle} from '../../styles/globalStyle';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store';
import {
  updateFirstName,
  updateLastName,
  resetTopInitialState,
} from '../../redux/reducers/User';
import {
  Categories,
  resetCategories,
  updateSelectedCategoryId,
  CategoriesType,
} from '../../redux/reducers/Categories';
import {resetDonations, DonationsType} from '../../redux/reducers/Donations';
import {Button} from '../../components/Button/Button';
import {styles} from './styles';
import {Search} from '../../components/Search/Search';
import {Tab} from '../../components/Tab/Tab';
import { SingleDonationItem } from '../../components/SingleDonationItem/SingleDonationItem';

export const Home: React.FC = () => {
  const {firstName, lastName, profileImage} = useSelector(
    (state: RootState) => state.user,
  );
  const {categories, selectedCategoryId} = useSelector(
    (state: RootState) => state.categories,
  );
  const {donations, selectedDonationId} = useSelector(
    (state: RootState) => state.donations,
  );

  const dispatch = useDispatch();

  const [donationItems, setDonationsItems] = useState<DonationsType[]>([]);
  const [categoryPage, setCategoryPage] = useState<number>(1);
  const [categoryList, setCategoryList] = useState<CategoriesType[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);

  const categoryPageSize: number = 4;

  console.log(donationItems)

  useEffect(() => {
    const filterdItems = donations.filter(value =>
      value.categoryIds.includes(selectedCategoryId),
    );
    setDonationsItems(filterdItems);
  }, [selectedCategoryId]);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(pagination(categories, categoryPage, categoryPageSize));
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  const pagination = (
    items: CategoriesType[],
    pageNumber: number,
    pageSize: number,
  ) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= items.length) {
      return [];
    }

    return items.slice(startIndex, endIndex);
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerIntroText}>Hello, </Text>
            <View style={styles.username}>
              <Header title={firstName + ' ' + lastName[0] + '.'} />
            </View>
          </View>
          <Image
            source={{uri: profileImage}}
            style={styles.profileImage}
            resizeMode={'contain'}
          />
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
          <Header title="Select Category" type={2} />
        </View>
        <View style={styles.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              console.log('aquiii');
              if (isLoadingCategories) {
                return;
              }
              console.log('user has reached the end and we are', categoryPage);
              setIsLoadingCategories(true);
              let newData = pagination(
                categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prevState => [...prevState, ...newData]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({item}) => (
              <View style={styles.categoryItem} key={item.categoryId}>
                <Tab
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                  title={item.name}
                  tabId={item.categoryId}
                  isDisabled={item.categoryId !== selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
         {
          donationItems.length > 0 && (
            <View style={styles.donationItemsContainer}> 
              {
                donationItems.map((value, index) => (
                  <SingleDonationItem 
                  key={index}  
                  uri={value.image}
                  price={parseFloat(value.price)}
                  title={value.name}
                  badgeTitle={categories.filter(val => val.categoryId === selectedCategoryId)[0].name}
                  /> 
                ))
              }
            </View>
          )
         }
      </ScrollView>
    </SafeAreaView>
  );
};
