import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colors from '../styles/colors';

import User from '../assets/user.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';

type IHeaderProps = {
  firstText: string;
  secondText?: string;
}

export function Header({firstText, secondText = ""}: IHeaderProps){
  const [userName, setUserName] = useState('');

  useEffect(() => {
    async function loadUserName() {
      const value = await AsyncStorage.getItem('@plantmanager:username');
      if (value){
        setUserName(JSON.parse(value));
      }
    }

    loadUserName();
  }, []);

  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.fistText}>{firstText}</Text>
        <Text style={styles.secondText}>{secondText ? secondText : userName}</Text>
      </View>
      <Image source={User} style={styles.avatar}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    marginTop: 50,
  },
  fistText: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '400',
    color: colors.heading
  },
  secondText: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: 'bold',
    color: colors.heading
  },
  avatar: {
    height: 56,
    width: 56,
    borderRadius: 50,
  }
})
