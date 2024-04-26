import React from 'react'
import { BackButton } from '../../components/BackButton/BackButton'
import { SafeAreaView, ScrollView, Image, View, Text } from 'react-native'
import { styles } from './styles'
import { useSelector } from 'react-redux'
import { globalStyle } from '../../styles/globalStyle'
import { ScreenProps } from '../../navigation/MainNavigation'
import { Routes } from '../../navigation/Routes'
import { Badge } from '../../components/Badge/Badge'
import {Header} from '../../components/Header/Header';
import { Button } from '../../components/Button/Button'


const SingleDonationItem: React.FC<ScreenProps> = ({ navigation, route }) => {

    const donationItemInformation = useSelector( (state: any ) => state.donations.selectedDonationInformation)
    const categoryInformation = route.params.categoryInformation


    return <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <ScrollView showsVerticalScrollIndicator={false}
        style={styles.container}
        >
            <BackButton onPress={() => navigation.goBack()}/>
            <Image 
        source={{uri: donationItemInformation.image}}
        style={styles.image}
        />
        <View
        style={styles.badge}
        >
        <Badge 
        title={categoryInformation.name}
        />
        </View>
        <Header
        type={1}
        title={donationItemInformation.name}
        />
        <Text style={styles.description}>
            {donationItemInformation.description}
            {donationItemInformation.description}
            {donationItemInformation.description}
            {donationItemInformation.description}
            {donationItemInformation.description}
            {donationItemInformation.description}
            {donationItemInformation.description}
            {donationItemInformation.description}
            {donationItemInformation.description}
            </Text>
        </ScrollView>
        <View style={styles.button}>
            <Button title="Donate" onPress={() => console.log('press')}/>
        </View>

    </SafeAreaView>;
}

export default SingleDonationItem