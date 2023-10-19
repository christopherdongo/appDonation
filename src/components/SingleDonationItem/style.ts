import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale } from '../../styles/scaling'


export const styles = StyleSheet.create({
    image: {
   width: horizontalScale(155),
   height: verticalScale(170)
    },
    badge: {
        position: 'absolute',
        zIndex: 1,
        top: verticalScale(13),
        left: horizontalScale(10),

    },
    donationInformation: {
        marginTop: verticalScale(16)
    },
    price: {
        marginTop: verticalScale(5)
    }
})