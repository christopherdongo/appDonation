import { Dimensions } from "react-native";
import  DeviceInfo from 'react-native-device-info';
const {width, height} = Dimensions.get('window');




const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const guidelineBaseWith =()=>{
  
    if (isSmall) return 330;
    return 350;
}

 const guidelineBaseHeight=()=>{
    if (isSmall) return 550;
    else if (width>410) return 620;
    return 680;
}

 const guidelineBaseFonts = () => {
    if (width>410) return 430
    return 400;
}

export const horizontalScale = (size: number) => (width / guidelineBaseWith()) * size;
export const verticalScale = (size: number )=> (height / guidelineBaseHeight()) * size;

export const scaleFontSize = (size: number) => Math.round((size* width) / guidelineBaseFonts())