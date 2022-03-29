import React, {useEffect, useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getAccountDetails, getFavoritesTvShows} from '../../service/api';
import AsyncStorage from '@react-native-community/async-storage';
import MovieImage from '../../components/Movie/MovieImage';
import {AuthContext} from '../../context/auth';
import ButtonReturn from '../../components/ButtonReturn';

export default function FavoritesTvShows({navigation}) {
  const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const [favoritesTvShows, setfavoritesTvShows] = useState([]);
  const {account} = useContext(AuthContext);
  const[name, setName] = useState();
  

  

  useEffect(() => {
    async function awaitFavoritesTvShows() {
      try {
        const sessionId = await AsyncStorage.getItem('@CodeApi:session');
        const favoritesTvShows = await getFavoritesTvShows(
          account.id,
          sessionId,
        );
        setfavoritesTvShows(favoritesTvShows);
        if(account.name) {
            setName(account.name)
    
        }
        else{
            setName(account.username)
        }
      } catch (error) {
        console.warn(error);
      }
    }
    awaitFavoritesTvShows();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ButtonReturn navigation={navigation} />
        <View style={styles.boxHeader}>
          <Text style={styles.textFavoritesTvShow}>
            Séries favoritas do <Text style={{color: 'pink'}}>{name}!</Text>
          </Text>
        </View>

          <FlatList
            data={favoritesTvShows.results}
            numColumns={4}
            keyExtractor={(item, index) => item.id}
            renderItem={item => (
              <View style={styles.boxImage}>
                <MovieImage
                  style={styles.Image}
                  pathImage={item.item.poster_path}
                  posterSize={'w92'}
                  height={130}
                />
              </View>
            )}
          />
        
      </View>
    </>
  );
}
