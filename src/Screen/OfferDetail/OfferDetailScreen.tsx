/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import {styles} from './styles';
import {Icons, Images} from '../../constant/Image';
import {scale} from '../../constant/Scaling';
import {Fonts} from '../../constant/Font';
import {Color} from '../../constant/Color';
import CustomButton from '../../component/CustomButton';
import {ButtonName} from '../../constant/String';
import TagView from '../../component/TagView';

const OfferDetailScreen = (props: any) => {
  const renderKeyPoint = ({item, index}: any) => {
    return (
      <View style={styles.keyPointView}>
        <Image source={Icons.tickCircle} style={styles.tickImage} />

        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet consectetur. Cras elit nam mauris vitae
          euismod purus.
        </Text>
      </View>
    );
  };

  const renderHowToUse = ({item, index}: any) => {
    return (
      <View style={styles.keyPointView}>
        <View style={styles.howToUseView}>
          <Text
            style={{
              fontSize: scale(14),
              fontFamily: Fonts.Medium,
              color: Color.black,
            }}>
            {index + 1}
          </Text>
        </View>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet consectetur. Cras elit nam mauris vitae
          euismod purus.
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Color.yellow} />
      <ScrollView
        style={{backgroundColor: Color.yellow}}
        nestedScrollEnabled={true}>
        <View style={styles.headerView}>
          <TouchableOpacity
            style={styles.leftView}
            onPress={() => props.navigation.goBack()}>
            <Image source={Icons.Actions} style={styles.backImage} />
          </TouchableOpacity>
          <View style={styles.centerView}>
            <Text style={styles.headerText}>Offer Details</Text>
          </View>

          <View style={{flex: 1}} />
        </View>
        <View style={styles.topImageView}>
          <ImageBackground
            source={Images.background}
            resizeMode="contain"
            style={styles.backGroundImage}>
            <Image source={Images.productImage} style={styles.topImage} />
          </ImageBackground>
        </View>

        <Image source={Images.productType} style={styles.productTypeImage} />
        <View style={{marginHorizontal: 15}}>
          <Text style={{color: Color.black, fontSize: 12}}>BURGER KING</Text>
          <Text style={styles.productOfferText}>
            Buy 1 Get 1 Everything at ₹199
          </Text>
        </View>
        <View style={styles.mainView}>
          <View style={styles.titleView}>
            <View style={styles.leftView}>
              <Image source={Icons.coin} style={{width: 28, height: 28}} />
            </View>
            <View style={[styles.centerView, {alignItems: 'flex-start'}]}>
              <Text style={styles.subDetailsTitleText}>
                For 25 Waakif Coins
              </Text>
            </View>
            <View style={[styles.leftView, {flex: 3, alignItems: 'flex-end'}]}>
              <View style={styles.lastView}>
                <Image source={Icons.unlock} style={styles.lockImage} />
                <Text style={styles.unlockImage}>Unlocked</Text>
              </View>
            </View>
          </View>
          <View style={[styles.titleView, styles.extraStyle]}>
            <Text
              style={{fontSize: 14, color: 'black', fontFamily: Fonts.Bold}}>
              KEY POINTS
            </Text>
            <FlatList
              data={[0, 1, 2, 3]}
              renderItem={renderKeyPoint}
              contentContainerStyle={{flexWrap: 'wrap', paddingVertical: 10}}
            />
          </View>
          <View style={[styles.titleView, styles.extraStyle]}>
            <Text
              style={{fontSize: 14, color: 'black', fontFamily: Fonts.Bold}}>
              HOW TO USE
            </Text>
            <FlatList
              data={[0, 1, 2, 3]}
              renderItem={renderHowToUse}
              contentContainerStyle={{flexWrap: 'wrap', paddingVertical: 10}}
            />
          </View>
          <View style={styles.TagView}>
            <TagView
              name={'TERMS & CONDITIONS'}
              rightImageVisible={true}
              textStyle={undefined}
              rightImageStyle={{
                transform: [{rotate: '90deg'}],
              }}
            />
          </View>
          <View style={[styles.TagView, {marginTop: scale(15)}]}>
            <TagView
              name={'FAQ’s'}
              rightImageVisible={true}
              textStyle={undefined}
              rightImageStyle={{
                transform: [{rotate: '90deg'}],
              }}
            />
          </View>
        </View>
      </ScrollView>
      <CustomButton buttonName={ButtonName.VisitWebsite} onPress={() => {}} />
    </View>
  );
};
export default OfferDetailScreen;
