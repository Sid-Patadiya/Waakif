import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AppStack} from '../../../constant/String';
import {Icons, Images} from '../../../constant/Image';
import {Color} from '../../../constant/Color';
import Profile from '../../../Screen/Profile/Profile';
import Offers from '../../../Screen/Offers/Offers';
import {scale} from '../../../constant/Scaling';
import {Fonts} from '../../../constant/Font';

const Tab = createBottomTabNavigator();

export default function TabNavigator(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontFamily: Fonts.Medium,
          fontSize: scale(13),
          padding: 0,
          margin: 0,
          marginBottom: scale(10),
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === AppStack.Offers) {
            iconName = focused ? Icons.offers : Icons.offersGray;
          } else if (route.name === AppStack.Profile) {
            iconName = focused ? Icons.profile : Icons.profileGray;
          }
          return (
            <View>
              <Image
                source={iconName}
                resizeMode="contain"
                style={styles.imageStyle}
              />
            </View>
          );
        },
        tabBarStyle: {
          borderTopRightRadius: scale(20),
          borderTopLeftRadius: scale(20),
          height: scale(65),
        },
        tabBarActiveTintColor: Color.themeColor,
        tabBarInactiveTintColor: Color.gray,
      })}>
      <Tab.Screen name={AppStack.Offers} component={Offers} />
      <Tab.Screen name={AppStack.Profile} component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: scale(23),
    height: scale(23),
    resizeMode: 'contain',
    marginTop: scale(10),
  },
});
