import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import {scale} from '../../constant/Scaling';
import {onBoarding} from '../../constant/Array';
import {Images} from '../../constant/Image';
import {Color} from '../../constant/Color';
import CustomButton from '../../component/CustomButton';
import {AppStack, ButtonName} from '../../constant/String';
import {styles} from './styles';

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
