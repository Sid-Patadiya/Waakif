import {StyleSheet} from 'react-native';
import {scale} from '../../constant/Scaling';
import {Color} from '../../constant/Color';
import {Fonts} from '../../constant/Font';

export const styles = StyleSheet.create({
  container: {flex: 1},
  header_container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.white_two,
    borderRadius: scale(30),
    marginHorizontal: scale(5),
    padding: scale(10),
    borderWidth: 2,
  },
  header_Image: {
    height: scale(20),
    width: scale(20),
  },
  header_Text: {
    color: Color.black,
    fontFamily: Fonts.Medium,
    fontSize: scale(17),
    marginLeft: scale(10),
  },
  itemImageStyle: {
    height: scale(70),
    width: scale(100),
  },
  menuItemView: {
    backgroundColor: Color.white_two,
    borderRadius: scale(18),
    borderWidth: 1.5,
    borderColor: Color.white,
  },
  companyText: {
    color: Color.gray_three,
    fontFamily: Fonts.Regular,
    fontSize: scale(12),
  },
  lockImage: {
    height: scale(13),
    width: scale(10),
  },
  lockText: {
    fontFamily: Fonts.Regular,
    fontSize: scale(10),
    marginLeft: scale(2),
  },
  descriptionText: {
    color: Color.black,
    fontFamily: Fonts.Bold,
    fontSize: scale(14),
    width: scale(130),
    marginTop: scale(10),
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
});
