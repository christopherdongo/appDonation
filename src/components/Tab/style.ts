import {StyleSheet} from 'react-native';
import {horizontalScale,scaleFontSize,verticalScale} from '../../styles/scaling';

export const styles = StyleSheet.create({
 tab:{
    backgroundColor:'#2979f2',
    borderRadius:horizontalScale(50),
    justifyContent:'center',
    height:verticalScale(50),
 },
 inactiveTab:{
 backgroundColor:'#F3F5F9',
 },
 title:{
    fontFamily:'Inter',
    color:'#fff',
    fontWeight:'500',
    fontSize:scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    textAlign:'center',
 },
 inactiveTitle:{
   color:'#79869F',
 }
})