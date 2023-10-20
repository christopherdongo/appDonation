import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../styles/scaling";


export const styles = StyleSheet.create({
    header:{
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(24),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerIntroText: {
        fontFamily: 'Inter',
        fontSize: scaleFontSize(16),
        lineHeight: scaleFontSize(19),
        fontWeight: '400',
        color: '#636776'
    },
    username: {
        marginTop: verticalScale(5)
    },
    profileImage: {
        width: horizontalScale(50),
        height: verticalScale(50)
    },
    searchBox:{
        marginHorizontal: horizontalScale(24)
    }
})