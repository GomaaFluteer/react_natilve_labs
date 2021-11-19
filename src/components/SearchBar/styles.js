import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../common';

export default StyleSheet.create({
    container: {
         alignItems: 'center',
         marginTop: 20,
         overflow: 'hidden',
         width: '100%',
         backgroundColor: COLORS.spaceCadet,
         justifyContent: 'space-between',
           height: 63,
               borderRadius: 6,
               flexDirection: 'row',
    },

    iconContainer: {
            width: '22%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderStartColor: COLORS.sun,
            borderStartWidth: 1,
            backgroundColor: COLORS.cloudBurst,
    },


     inputContainer: {
               fontFamily: FONTS.medium,
                height: '100%',
                fontSize: 17,
                color: COLORS.white,
                backgroundColor: COLORS.spaceCadet,
                width: '81%',
                paddingStart: 17,

        },
});
