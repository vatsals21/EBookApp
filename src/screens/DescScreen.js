import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../assets/colors';

const DescScreen = props => {
  const {navigation, route} = props;
  const comicId = route.params.id;
  const comicPath = route.params.path;
  const comicExtension = route.params.extension;
  const comicTitle = route.params.title;
  const comicDescription = route.params.description;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.white,
      height: '100%',
      width: '100%',
      paddingTop: '5%',
      padding: '2%',
    },
    cartContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      padding: 12,
    },
    image: {
      width: '90%',
      height: '45%',
      marginTop: '3%',
      marginLeft: '5%',
      marginRight: '5%',
      marginBottom: '3%',
    },
    title: {
      fontFamily: 'Poppins-Italic',
      fontWeight: 'bold',
      fontSize: 21,
      padding: 7,
      textDecorationStyle: 'solid',
      textDecorationLine: 'underline',
      color: COLORS.darkred,
    },
    desc: {
      color: COLORS.persiangreen,
      fontSize: 15,
      padding: 7,
      marginTop: '3%',
    },
  });

  return (
    <View style={styles.container}>
      <Image
        key={comicId}
        source={{uri: `${comicPath}.${comicExtension}`}}
        style={styles.image}
      />
      <Text style={styles.title}>{comicTitle}</Text>
      <View style={styles.cartContainer}>
        <Icon name="minuscircleo" size={21} />
        <Text>Price - Rs. 2100</Text>
        <Icon name="pluscircleo" size={21} />
      </View>
      <Text style={styles.desc}>
        {comicDescription == null || comicDescription == ''
          ? 'No Description Found.'
          : comicDescription}
      </Text>
    </View>
  );
};

export default DescScreen;
