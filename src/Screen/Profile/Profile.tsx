/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderView from '../../component/HeaderView';
import {styles} from './styles';
import {Icons, Images} from '../../constant/Image';
import {scale} from '../../constant/Scaling';
import {Color} from '../../constant/Color';
import {ButtonName} from '../../constant/String';
import {ProfileScreenData} from '../../constant/Array';
import TagView from '../../component/TagView';
import TotalView from '../../component/TotalView';

export default function Profile(): JSX.Element {
  const renderItem = ({item, index}: any) => {
    return (
      <View key={index}>
        <Text style={styles.heading}>{item.title}</Text>
        <View style={styles.TagView}>
          <FlatList
            data={item.data}
            renderItem={({item, index}: any) => {
              return (
                <TagView
                  key={index}
                  style={{
                    borderBottomWidth: index === 2 ? 0 : 1,
                    borderBottomColor: Color.gray_five,
                  }}
                  leftImage={item.image}
                  name={item.title}
                  rightImageVisible={true}
                  textStyle={undefined}
                />
              );
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <HeaderView>
      <View style={styles.container}>
        <ImageBackground
          source={Images.profileFrame}
          resizeMode="contain"
          style={styles.profileFrame}>
          <View style={styles.sortNameView}>
            <Text style={styles.sortNameText}>JD</Text>
          </View>
          <View style={{flex: 1, marginLeft: scale(10)}}>
            <Text style={styles.nameText}>John Doe</Text>
            <Text style={[styles.numberText]}>
              +91-789526361 · johndoe@gmail.com
            </Text>
            <Text style={styles.numberText}>31/05/1996 · Female</Text>
          </View>
          <TouchableOpacity style={styles.editTextView}>
            <Text style={styles.editText}>{ButtonName.Edit}</Text>
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.totalView}>
          <TotalView
            bgImage={Images.orderView}
            title="TOTAL ORDER"
            value={'124'}
          />
          <TotalView
            bgImage={Images.coinView}
            title="TOTAL COINS"
            value={'124'}
          />
        </View>

        <FlatList
          data={ProfileScreenData}
          renderItem={renderItem}
          ListFooterComponent={
            <View style={styles.TagView}>
              <TagView
                style={undefined}
                leftImage={Icons.logout}
                name={ButtonName.LogOut}
                rightImageVisible={false}
                textStyle={{
                  color: Color.red,
                }}
              />
            </View>
          }
        />
      </View>
    </HeaderView>
  );
}
