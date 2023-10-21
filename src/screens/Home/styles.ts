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
    },
    highlightImageContainer:{
        marginHorizontal: horizontalScale(24)
    },
    highlight: {
        width: '100%',
        height: verticalScale(160),
    },
    categories: {
        marginLeft: horizontalScale(24)
    },
    categoryItem:{
        marginRight: horizontalScale(10)
    },
    categoryHeader: {
        marginHorizontal: horizontalScale(24),
        marginBottom: verticalScale(16),
        marginTop: verticalScale(6)
    }
})