import React from 'react'
import {BackButton} from '../../components/BackButton/BackButton'
import { SafeAreaView, ScrollView } from 'react-native'
import style from './style'
import { useSelector } from 'react-redux'
import { globalStyle } from '../../styles/globalStyle'
import {HomeProps} from '../../navigation/MainNavigation'


const SingleDonationItem: React.FC<HomeProps> = ({ navigation }) => {

    const donationItemInformation = useSelector( (state ) => state.donations.selectedDonationInformation)
    console.log(donationItemInformation)

    return <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <BackButton onPress={() => navigation.goBack()}/>
        </ScrollView>
    </SafeAreaView>;
}

export default SingleDonationItem