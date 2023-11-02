import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import HeaderView from '../../component/HeaderView';
import SearchInput from '../../component/SearchInput';
import {Placeholder} from '../../constant/String';
import {offerHeader} from '../../constant/Array';
import {scale} from '../../constant/Scaling';
import {Color} from '../../constant/Color';
import {Fonts} from '../../constant/Font';

export default function Offers(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>('');
  const flatListRef: any = useRef();

  function headerRenderItem({item, index}: any) {
    return (
      <TouchableOpacity
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
      </View>
    </HeaderView>
  );
}

const styles = StyleSheet.create({
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
