import {StyleSheet} from 'react-native';
import {horizontalScale,scaleFontSize,verticalScale} from '../../styles/scaling';

export const styles = StyleSheet.create({
 badge:{
    backgroundColor:'#145855',
    borderRadius:horizontalScale(50),
    justifyContent:'center',
    height:verticalScale(22),
 },
 inactiveTab:{
 backgroundColor:'#F3F5F9',
 },
 title:{
    fontFamily:'Inter',
    color:'#fff',
    fontWeight:'600',
    fontSize:scaleFontSize(10),
    lineHeight: scaleFontSize(12),
    textAlign:'center',
 },
 inactiveTitle:{
   color:'#79869F',
 }
})