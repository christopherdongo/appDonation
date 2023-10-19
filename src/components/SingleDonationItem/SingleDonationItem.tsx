import React from 'react'
import {View, Text, Image} from 'react-native'
import {Badge} from '../Badge/Badge'
import { Header } from '../Header/Header'
import {styles} from './style'

type PropsSingleDonationItem = {

    uri: string,
    badgeTitle: string,
    donationTitle: string,
    price: number
}

export const SingleDonationItem: React.FC<PropsSingleDonationItem> = ({uri, badgeTitle, donationTitle, price}) => {
  return (
    <View>
     <View>
     <View style={styles.badge}>
            <Badge title={badgeTitle} />
        </View>
        <Image resizeMode={'contain'} source={{uri}} style={styles.image} />
     </View>
     <View style={styles.donationInformation}>
     <Header title={donationTitle} type={3} color={'#0A043C'}/>
    <View style={styles.price}>
    <Header title={'$' + price.toFixed(2)} type={3} color={'#156CF7'}/>
    </View>
     </View>

    </View>
  )
}
