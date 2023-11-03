import {StyleSheet} from 'react-native';
import {height, scale, width} from '../../constant/Scaling';
import {Color} from '../../constant/Color';
import {Fonts} from '../../constant/Font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.white,
  },
  sliderDot: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  imageView: {width: width, height: height / 3},
  sliderImage: {
    width: width,
    height: height / 3.5,
  },
  sliderDotView: {
    borderWidth: 1.5,
    borderColor: Color.themeColor,
    borderRadius: 30,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderTextContainer: {
    padding: scale(30),
    width: width / 1,
    alignItems: 'center',
  },
  sliderTitle: {
    color: Color.black,
    fontFamily: Fonts.Bold,
    fontSize: scale(21),
  },
  sliderDescription: {
    color: Color.light_black,
    fontFamily: Fonts.Regular,
    fontSize: scale(14),
    marginTop: scale(10),
    textAlign: 'center',
  },
  logoImage: {
    width: width / 3,
    height: height / 9,
    margin: 30,
    alignSelf: 'center',
  },
});
