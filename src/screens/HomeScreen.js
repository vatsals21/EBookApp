import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {COLORS} from '../assets/colors';
import {CartIconComp, SearchBarComp} from '../components';
import md5 from 'md5';
import {API_KEYS} from '../assets/keys';

const HomeScreen = props => {
  const {navigation} = props;
  const [comics, setComics] = useState([]);

  function getData() {
    const ts = 1;
    const md5_hash_value = md5(ts + API_KEYS.private_key + API_KEYS.public_key);
    // console.log(md5_hash_value);
    const url =
      'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=' +
      API_KEYS.public_key +
      '&hash=' +
      md5_hash_value;
    console.log(url);
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        return json.data.results;
      });
  }

  useEffect(() => {
    console.log('use effect');
    getData().then(data => {
      setComics(data);
    });
  }, []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.white,
      height: '100%',
      width: '100%',
      paddingTop: '5%',
      padding: '2%',
    },
    headerContainer: {
      flexDirection: 'row',
    },
    text: {
      color: COLORS.blueIcon,
      fontFamily: 'NotoSans-Regular',
      fontSize: 30,
      padding: '3%',
    },
    comicStyle: {
      padding: 5,
      margin: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: COLORS.uranianblue,
      height: 220,
      borderRadius: 7,
    },
    comicTitleStyle: {
      width: 150,
      color: COLORS.oxfordblue,
      fontFamily: 'NotoSans-Regular',
      fontSize: 15,
      marginTop: 7,
    },
    comicPriceStyle: {
      padding: 5,
      marginTop: 5,
      color: COLORS.white,
      backgroundColor: COLORS.spanishgreen,
      fontFamily: 'NotoSans-Regular',
      fontWeight: 'bold',
      fontSize: 16,
      borderRadius: 9,
      width: '55%',
    },
    comicImageStyle: {
      width: 90,
      height: 95,
    },
  });

  const Item = ({title, id, path, extension, description}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('description', {
          id: id,
          path: path,
          extension: extension,
          description: description,
          title: title,
        });
      }}>
      <View style={styles.comicStyle}>
        <Image
          source={{
            uri: `${path}.${extension}`,
          }}
          style={styles.comicImageStyle}
        />
        <Text style={styles.comicTitleStyle} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.comicPriceStyle}>Rs. 2100</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Explore Books</Text>
        <CartIconComp navigation={navigation} />
      </View>
      <SearchBarComp></SearchBarComp>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <SafeAreaView>
          <FlatList
            data={comics}
            renderItem={({item}) => (
              <Item
                id={item.id}
                title={item.title}
                path={item.thumbnail.path}
                extension={item.thumbnail.extension}
                description={item.description}
              />
            )}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
