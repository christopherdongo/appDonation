import {StyleSheet} from 'react-native';
import {horizontalScale,scaleFontSize,verticalScale} from '../../styles/scaling';

export const styles = StyleSheet.create({
 button:{
    backgroundColor:'#2979f2',
    borderRadius:horizontalScale(50),
    justifyContent:'center',
    height:verticalScale(55),
    with:horizontalScale(327),
    
 },
 disabled:{
 opacity: 0.5,
 },
 title:{
    fontFamily:'Inter',
    color:'#fff',
    fontWeight:'500',
    fontSize:scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    textAlign:'center',
 }
})