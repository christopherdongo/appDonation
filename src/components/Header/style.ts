import {StyleSheet} from 'react-native';
import {scaleFontSize, } from '../../styles/scaling';


export const styles = StyleSheet.create({
    title1:{
        fontSize:scaleFontSize(24),
        lineHeight: scaleFontSize(29),
        fontFamily: 'Inter',
        fontWeight: '600',
    },
    title2:{
        color:'#022150',
        fontSize: scaleFontSize(18),
        fontFamily: 'Inter',
        fontWeight: '600',
        lineHeight: scaleFontSize(22),
    },
    title3:{
        color:'#022150',
        fontSize: scaleFontSize(16),
        fontFamily: 'Inter',
        fontWeight: '600',
        lineHeight: scaleFontSize(19),
    }
})