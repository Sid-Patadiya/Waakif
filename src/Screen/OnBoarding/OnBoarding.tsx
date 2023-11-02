import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {height, scale, width} from '../../constant/Scaling';
import {onBoarding} from '../../constant/Array';
import {Images} from '../../constant/Image';
import {Color} from '../../constant/Color';
import {Fonts} from '../../constant/Font';
import CustomButton from '../../component/CustomButton';
import {AppStack, ButtonName} from '../../constant/String';

export default function OnBoarding({navigation}: any): JSX.Element {
  const renderItem = ({item, index}: any) => {
    return (
      <View>
        <View style={styles.imageView}>
          <Image
            source={item.image}
            style={styles.sliderImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.sliderTextContainer}>
          <Text style={styles.sliderTitle}>{item.title}</Text>
          <Text style={styles.sliderDescription}>{item.description}</Text>
        </View>

        <View style={styles.sliderDot}>
          {onBoarding.map((dotItem: any, dotIndex: number) => {
            return (
              <View
                key={dotIndex}
                style={[
                  styles.sliderDotView,
                  {
                    backgroundColor:
                      index === dotIndex ? Color.themeColor : Color.transparent,
                    height: index === dotIndex ? scale(12) : scale(12),
                    width: index === dotIndex ? scale(50) : scale(12),
                  },
                ]}
              />
            );
          })}
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={Images.logo}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <FlatList
        data={onBoarding}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        scrollEnabled
        showsHorizontalScrollIndicator={false}
      />
      <View style={{marginBottom: scale(30)}}>
        <CustomButton
          buttonName={ButtonName.LetStarted}
          onPress={() => {
            navigation.replace(AppStack.TabNavigation);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
