import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {SvgFromUri} from 'react-native-svg';

import colors from '../styles/colors';

interface IButtonProps extends RectButtonProps {
  image: string;
  title: string;
}

export function PlantCardPrimary({image, title, ...rest}: IButtonProps) {
  return(
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri uri={image} height={100} width={100} />
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 155,
    borderRadius: 20,
    backgroundColor: colors.shape,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10
  },
  title: {
    fontWeight: '700',
    color: colors.heading
  }
})
