import { StyleSheet } from 'react-native'
import { horizontalScale } from '../../styles/scaling'


export const styles =StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        width: horizontalScale(44),
        height: horizontalScale(44),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: horizontalScale(26)    
    }
})