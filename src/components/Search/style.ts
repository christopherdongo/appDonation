import {StyleSheet} from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../styles/scaling';

export const styles = StyleSheet.create({
    searchInputContainer:{
        flexDirection:'row',
        paddingHorizontal:horizontalScale(16),
        backgroundColor:'#F3F5F9',
        alignItems:'center',
        height:verticalScale(50),
    },
    searchInput:{
        flex:1,
        marginLeft: horizontalScale(6),
        borderWidth: 1,
        height: '100%',
        fontFamily:'Inter',
        fontSize: scaleFontSize(14),
        lineHeight: scaleFontSize(14)
    }

});