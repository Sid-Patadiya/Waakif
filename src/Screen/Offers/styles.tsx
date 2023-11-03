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
});
