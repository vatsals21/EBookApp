import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../assets/colors';
import {CartIconComp, SearchBarComp} from '../components';
import axios from 'axios';
import md5 from 'md5';
import {API_KEYS} from '../assets/keys';

const HomeScreen = props => {
  const {navigation} = props;

  const getData = async () => {
    const ts = 1;
    const md5_hash_value = md5(ts + API_KEYS.private_key + API_KEYS.public_key);
    console.log(md5_hash_value);
    const response = await axios.get(
      'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=' +
        API_KEYS.public_key +
        '&hash=' +
        md5_hash_value,
    );
    console.log(response.data);
    console.log('Data loading');
  };

  useEffect(() => {
    console.log('use effect');
    getData();
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
  });
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Explore Books</Text>
        <CartIconComp navigation={navigation} />
      </View>
      <SearchBarComp></SearchBarComp>
    </View>
  );
};

export default HomeScreen;
