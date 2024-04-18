import React from 'react'
import {View, Text, Image, Pressable } from 'react-native'
import {Badge} from '../Badge/Badge'
import { Header } from '../Header/Header'
import {styles} from './style'

type PropsSingleDonationItem = {

    uri: string,
    badgeTitle: string,
    donationTitle: string,
    price: number,
    donationItemId: number,
    onPress: ( val: number) => void
}

export const SingleDonationItem: React.FC<PropsSingleDonationItem> = ({uri, badgeTitle, donationTitle, price, donationItemId, onPress}) => {
  return (
    <Pressable
    onPress={ () => onPress(donationItemId)}
    >
    <View>
     <View>
     <View style={styles.badge}>
            <Badge title={badgeTitle} />
        </View>
        <Image resizeMode={'cover'} source={{uri}} style={styles.image} />
     </View>
     <View style={styles.donationInformation}>
     <Header title={donationTitle} type={3} color='#0A043C' numberOfLines={1} />
     <View style={styles.price}>
    <Text style={styles.title}>dfsdfsdfsdfsdf</Text>
    </View>
    <View style={styles.price}>
    <Header title={'$' + price.toFixed(2)} type={3} color={'#156CF7'} numberOfLines={2}/>
    </View>
     </View>

    </View>
    </Pressable>
  )
}
