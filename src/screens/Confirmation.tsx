import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {Button} from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
  const navigation = useNavigation();

  return(
    <SafeAreaView style={styles.container}>

      <Text style={styles.emoji}>😄</Text>

      <Text style={styles.title}>Prontinho</Text>

      <Text style={styles.description}>Agora vamos começar a cuidar das suas{'\n'}plantinhas com muito cuidado.</Text>

      <Button title="Começar" width={'70%'} onPress={() => navigation.navigate('RoutesBottomTab')} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  emoji: {
    fontSize: 96
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    textAlign: 'center',
    marginTop: 50
  },
  description: {
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
    color: '#5C6660',
    fontFamily: fonts.text,
    marginTop: 15,
    marginBottom: 40
  }
})
