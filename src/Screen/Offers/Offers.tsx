/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import HeaderView from '../../component/HeaderView';
import SearchInput from '../../component/SearchInput';
import {AppStack, Placeholder} from '../../constant/String';
import {offerHeader, offersData} from '../../constant/Array';
import {scale} from '../../constant/Scaling';
import {Color} from '../../constant/Color';
import {styles} from './styles';
import {Icons, Images} from '../../constant/Image';
import CustomModel from '../../component/CustomModel';

export default function Offers(props: any): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [swipeStatus, setSwipeStatus] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<any>(null);
  const flatListRef: any = useRef();

  function headerRenderItem({item, index}: any) {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.header_container,
          {
            borderColor:
              currentIndex === index ? Color.themeColor : Color.white,
          },
        ]}
        onPress={() => {
          setCurrentIndex(index);
          flatListRef.current.scrollToIndex({
            animated: true,
            index: index,
          });
        }}>
        <Image
          source={item.image}
          style={styles.header_Image}
          resizeMode="contain"
        />
        <Text style={styles.header_Text}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  function renderItem({item, index}: any) {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.offer === 'Locked') {
            setIsModalVisible(true);
          } else {
            props.navigation.navigate(AppStack.OfferDetailScreen);
          }
          // setSelectItem(item);
        }}
        activeOpacity={0.9}
        key={index}
        style={[
          styles.menuItemView,
          {marginTop: (index + 1) % 4 === 0 ? -40 : 15},
        ]}>
        <Image
          source={item.image}
          style={{
            height:
              (index + 1) % 4 === 1 || (index + 1) % 4 === 0
                ? scale(143)
                : scale(95),
            width: scale(150),
          }}
          resizeMode="contain"
        />
        <View style={{margin: scale(10)}}>
          <View style={styles.menuItemContainer}>
            <Text style={styles.companyText}>{item.title}</Text>
            <View style={styles.row}>
              <Image
                source={item.offer === 'Locked' ? Icons.lock : Icons.unlock}
                style={styles.lockImage}
              />
              <Text
                style={[
                  styles.lockText,
                  {color: item.offer === 'Locked' ? Color.red : Color.green},
                ]}>
                {item.offer}
              </Text>
            </View>
          </View>
          <Text style={[styles.descriptionText]}>{item.offerTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <HeaderView>
      <View style={styles.container}>
        <SearchInput
          searchIcon={true}
          placeholder={Placeholder.SearchName}
          value={searchValue}
          onChangeText={setSearchValue}
          InputStyle={undefined}
          keyboardType={''}
        />

        <View>
          <FlatList
            ref={flatListRef}
            data={offerHeader}
            renderItem={headerRenderItem}
            contentContainerStyle={{
              marginVertical: scale(20),
              paddingHorizontal: scale(15),
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{flex: 1}}>
          <FlatList
            data={offersData}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <CustomModel
          isModalVisible={isModalVisible}
          headerImage={swipeStatus ? Images.Congratulation : Images.Gift}
          heading={swipeStatus ? 'Congratulations' : 'Unlock The Offer Now!'}
          description={
            swipeStatus
              ? 'We have successfully unlocked the offer for'
              : 'Unlock the offer now for'
          }
          descriptionTwo={
            swipeStatus ? ' 25 Waakif Coins.' : ' 25 Waakif Coins.'
          }
          swipeButton={swipeStatus ? false : true}
          onRequestClose={
            swipeStatus
              ? () => {}
              : () => {
                  setIsModalVisible(false);
                  setSwipeStatus(false);
                }
          }
          swipeStatus={swipeStatus}
          onSwipeSuccess={() => setSwipeStatus(true)}
          buttonName="See the details"
          onPress={() => {
            setIsModalVisible(false);
            setSwipeStatus(false);
            props.navigation.navigate(AppStack.OfferDetailScreen);
          }}
        />
      </View>
    </HeaderView>
  );
}
