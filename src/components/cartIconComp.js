import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../assets/colors';

const CartIconComp = props => {
  const {navigation} = props;
  const styles = StyleSheet.create({
    cartIcon: {
      marginRight: 0,
      marginLeft: '20%',
      marginTop: '6%',
    },
  });
  return (
    <Icon
      name="shopping-cart"
      color={COLORS.black}
      style={styles.cartIcon}
      size={40}
      onPress={() => {
        navigation.navigate('cart');
      }}
    />
  );
};

export default CartIconComp;
