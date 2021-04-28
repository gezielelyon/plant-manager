import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {api} from '../services/api';
import colors from '../styles/colors';

import {Header} from '../components/Header';
import {EnvironmentButton} from '../components/EnvironmentButton';
import {PlantCardPrimary} from '../components/PlantCardPrimary';
import { Load } from '../components/Load';
import { isLoading } from 'expo-font';

type IEnvironmentProps = {
  key: string;
  title: string;
}

type IPlantProps = {
  id: number,
  name: string,
  about: string,
  water_tips: string,
  photo: string,
  environments: string[],
  frequency: {
    times: number,
    repeat_every: string
  }
}

export function PlantSelect() {
  const [environments, setEnvironments] = useState<IEnvironmentProps[]>([]);
    const [plants, setPlants] = useState<IPlantProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<IPlantProps[]>([]);
    const [environmentSelected, setEnvironmentSelected] = useState('all');
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);

    const navigation = useNavigation();

    function handleEnvironmentSelected(environment: string) {
        setEnvironmentSelected(environment);

        if (environment == 'all')
            return setFilteredPlants(plants);

        const filtered = plants.filter(plant =>
            plant.environments.includes(environment)
        );

        setFilteredPlants(filtered);
    }

    async function fecthPlants() {
        const { data } = await api.get(`plants?_sort=name&order=asc&_page=${page}&_limit=8`);

        if (!data)
            return setLoading(true);

        if (page > 1) {
            setPlants(oldValue => [...oldValue, ...data])
            setFilteredPlants(oldValue => [...oldValue, ...data])
        } else {
            setPlants(data);
            setFilteredPlants(data);
        }

        setLoading(false);
        setLoadingMore(false);
    }

    function handleFetchMore(distance: number) {
        if (distance <= 1)
            return;

        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
        fecthPlants();
    }

    function handlePlantSelect(plant: IPlantProps) {
        navigation.navigate('Plant', { plant });
    }

    useEffect(() => {
        async function fecthEnvironment() {
            const { data } = await api.get('plants_environments?_sort=title&order=asc');
            setEnvironments([
                {
                    key: 'all',
                    title: 'Todos',
                },
                ...data
            ]);
        }

        fecthEnvironment();
    }, [])

    useEffect(() => {


        fecthPlants();
    }, [])

  if (loading){
    return <Load/>
  }

  return(
    <SafeAreaView style={styles.container}>

    <Header firstText="Olá,"/>

    <View style={styles.titleView}>
      <Text style={styles.title}>Em qual ambiente</Text>
      <Text style={styles.subTitle}>você quer colocar sua planta?</Text>
    </View>

    <View>
      <FlatList
        data={environments}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.environmentList}
        keyExtractor={(value) => value.key}
        renderItem={({item}) => (
          <EnvironmentButton
            title={item.title}
            onPress={() => handleEnvironmentSelected(item.key)}
            activity={environmentSelected === item.key ? true : false}
          />
        )}
      />
    </View>

    <View style={{flex: 1, marginTop: 15}}>
      <FlatList
        data={filteredPlants}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={styles.plantsList}
        keyExtractor={(value) => String(value.id)}
        renderItem={({item: plant}) => (
          <PlantCardPrimary
            image={plant.photo}
            title={plant.name}
            onPress={() => handlePlantSelect(plant)}
          />
        )}
        onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
        onEndReachedThreshold={0.5}
      />
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  titleView: {
    paddingHorizontal: 32,
    marginTop: 40,
  },
  title: {
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '700',
    color: colors.heading,
  },
  subTitle: {
    fontSize: 17,
    lineHeight: 23,
    color: colors.heading,
  },
  environmentList: {
    height: 40,
    marginLeft: 32,
    paddingRight: 40,
    marginTop: 20,
    justifyContent: 'center'
  },
  plantsList: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  }
})
