import { COLOR_BACKDROP, COLOR_TEXT_SECONDARY } from 'constants/colors';
import { DEFAULT_PADDING_HORIZONTAL } from 'constants/size';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: DEFAULT_PADDING_HORIZONTAL,
        paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
        backgroundColor: COLOR_BACKDROP,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    textInput:{
        flex:1
    }
});
