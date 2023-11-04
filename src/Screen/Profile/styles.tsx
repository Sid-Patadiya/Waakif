import {StyleSheet} from 'react-native';
import {height, scale, width} from '../../constant/Scaling';
import {Color} from '../../constant/Color';
import {Fonts} from '../../constant/Font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileFrame: {
    width: width / 1.1,
    height: height / 9.2,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  totalView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: scale(10),
  },
  sortNameView: {
    backgroundColor: Color.light_pink,
    borderRadius: scale(100),
    // padding: scale(15),
    width: width / 7,
    height: height / 15,
    marginHorizontal: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sortNameText: {
    color: Color.purple,
    fontFamily: Fonts.Medium,
    fontSize: scale(22),
  },
  nameText: {
    color: Color.black,
    fontFamily: Fonts.Bold,
    fontSize: scale(18),
    marginBottom: scale(5),
  },
  numberText: {
    color: Color.gray_three,
    fontFamily: Fonts.Regular,
    fontSize: scale(12),
  },
  editTextView: {height: '100%', padding: 10},
  editText: {
    color: Color.themeColor,
    fontFamily: Fonts.Medium,
    fontSize: scale(18),
    top: 10,
    right: 10,
  },

  TagView: {
    backgroundColor: Color.white_two,
    borderWidth: 1.5,
    borderColor: Color.white,
    paddingHorizontal: scale(15),
    borderRadius: scale(15),
    margin: scale(15),
  },
  heading: {
    color: Color.black,
    fontFamily: Fonts.Bold,
    fontSize: scale(19),
    marginHorizontal: scale(15),
    marginTop: scale(10),
  },
});
