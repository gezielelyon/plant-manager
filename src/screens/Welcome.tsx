import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Entypo} from '@expo/vector-icons';

import WateringIMG from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {
  const navigation = useNavigation();

  return(
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Gerencie {'\n'} suas plantas de {'\n'} forma fácil</Text>

      <Image source={WateringIMG} style={styles.image} resizeMode="contain"/>

      <Text
        style={styles.description}
      >Não esqueça mais de regar suas {'\n'} plantas. Nós cuidamos de lembrar você {'\n'} sempre que precisar.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UserIdentification')}
        activeOpacity={0.7}
      >
        <Text>
          <Entypo name="chevron-right" color="#fff" size={24} />
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 15,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    color: colors.heading,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 38,
    fontFamily: fonts.heading
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  description: {
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.text
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 10,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
