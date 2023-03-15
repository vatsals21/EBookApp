import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchBar} from '@rneui/themed';
import {COLORS} from '../assets/colors';

const SearchBarComp = () => {
  const [search, setSearch] = useState('');

  const styles = StyleSheet.create({
    inputContainerStyle: {
      borderRadius: 20,
      backgroundColor: COLORS.silver,
    },
    containerStyle: {
      width: '90%',
      marginLeft: '3%',
      marginRight: '5%',
      backgroundColor: COLORS.white,
    },
    inputStyle: {
      color: COLORS.spanishgreen,
    },
  });

  return (
    <SearchBar
      placeholder="Search by book name......"
      placeholderTextColor={COLORS.spanishgreen}
      onChangeText={item => {
        setSearch(item);
      }}
      value={search}
      showCancel={true}
      lightTheme={true}
      searchIcon={{
        type: 'ant-design',
        name: 'search1',
        color: COLORS.blueIcon,
      }}
      clearIcon={{
        type: 'material-icons',
        name: 'clear',
        color: COLORS.red,
      }}
      showLoading={false}
      inputContainerStyle={styles.inputContainerStyle}
      containerStyle={styles.containerStyle}
      inputStyle={styles.inputStyle}
    />
  );
};

export default SearchBarComp;
