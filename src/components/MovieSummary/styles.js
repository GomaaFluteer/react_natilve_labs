import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../common';

export default StyleSheet.create({
  

    contentContainer: {
        borderStartColor: COLORS.sun,
        paddingBottom:"6%",
        marginBottom:"6%",
         borderStartWidth: 3,
         backgroundColor:COLORS.spaceCadet,
         padding:"3%",
    },

    description: {
        color: COLORS.white,
        paddingVertical:5,
        fontSize: 15,
        fontFamily: FONTS.bold,
    },

    headTitle: {
          color: COLORS.white,
            fontSize: 18,
            fontFamily: FONTS.bold,
        },

});
