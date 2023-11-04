import {StyleSheet} from 'react-native';
import {scale} from '../../constant/Scaling';
import {Fonts} from '../../constant/Font';
import {Color} from '../../constant/Color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //
    backgroundColor: Color.white_light,
  },

  //   header view
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: scale(15),
  },
  leftView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  backImage: {width: 32, height: 32},
  centerView: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {fontSize: scale(17), color: Color.black, fontFamily: Fonts.Bold},

  //   top image view
  topImageView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  backGroundImage: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 220,
    height: 210,
  },
  topImage: {width: 230, height: 230, top: 20},

  //   scrollview
  scroll: {
    flex: 1,
    zIndex: 12,
    width: '100%',
  },
  productTypeImage: {
    width: scale(70),
    height: scale(70),
    marginVertical: 5,
    marginHorizontal: 3,
  },
  productOfferText: {
    color: Color.black,
    fontSize: scale(24),
    fontFamily: Fonts.Bold,
    marginTop: 10,
  },

  howToUseView: {
    backgroundColor: '#E0E0E0',
    height: scale(20),
    width: scale(20),
    borderRadius: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },

  //    details view
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    padding: 15,
    backgroundColor: Color.white_light,
    borderColor: 'white',
    borderWidth: 2,
  },
  mainView: {
    padding: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: Color.white_light,
    marginTop: 20,
    flex: 1,
  },
  subDetailsTitleText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: Fonts.Bold,
    color: Color.black,
  },
  lastView: {
    backgroundColor: '#EBFFD1',
    paddingHorizontal: scale(10),
    paddingVertical: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: scale(30),
  },
  lockImage: {width: 14, height: 14},
  unlockImage: {
    fontSize: 14,
    color: Color.black,
    fontWeight: '500',
    marginLeft: 5,
  },

  //   keypoint view
  keyPointView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 7,
  },
  tickImage: {width: 16, height: 16, marginTop: 2},
  descriptionText: {
    fontSize: 14,
    color: '#4F4F4F',
    marginLeft: 10,
    textAlign: 'justify',
    fontFamily: Fonts.Medium,
  },
  extraStyle: {
    marginVertical: 20,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  TagView: {
    backgroundColor: Color.white_two,
    borderWidth: 1.5,
    borderColor: Color.white,
    paddingHorizontal: scale(15),
    borderRadius: scale(15),
  },
});
