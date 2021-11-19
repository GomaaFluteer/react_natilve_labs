import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../common';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.spaceCadet,
    marginBottom:"6%",
    paddingBottom:"7%"



  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent:"center",
    alignItems:"center",
    fontSize: 16,
    paddingTop: 16,
  },


   ratingText: {
      color: COLORS.white,
      fontFamily: FONTS.medium,
      paddingStart: 18,
      paddingTop: 16,
      textAlign:"center"
    }



  ratingHeader: {
    color: COLORS.sun,

     textAlign:"center"
    paddingStart: 19,
   fontFamily: FONTS.bold,
  },

});