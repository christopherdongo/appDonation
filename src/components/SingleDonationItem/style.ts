import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale } from '../../styles/scaling'


export const styles = StyleSheet.create({
    image: {
   width: horizontalScale(155),
   height: verticalScale(170),
   borderRadius: horizontalScale(20)
    },
    badge: {
        position: 'absolute',
        zIndex: 1,
        top: verticalScale(13),
        left: horizontalScale(10),
        marginHorizontal: 5

    },
    donationInformation: {
        marginTop: verticalScale(16)
    },
    price: {
        marginTop: verticalScale(5)
    },
    title: {
        fontSize: 16,

    }
})