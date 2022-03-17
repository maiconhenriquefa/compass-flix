import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {getMovie, getAccountDetails, getChangeMovies} from '../../service/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../../components/Loading';
import style from './style';

export default function Home({navigation}) {
  const [name, setName] = useState(false);
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
  const [icon, setIcon] = useState();
=======
  const [notify, setNotify] = useState([]);
  const [icon, setIcon] = useState([]);
>>>>>>> 06dd10ae13b5abbbbe5c58f8e8a7bfe402db1e77

  async function awaitMovie() {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const results = await getMovie(page);
      setMovie([...movie, ...results]);
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    awaitMovie();
  }, []);

  useEffect(() => {
    async function awaitUser() {
      const sessionId = await AsyncStorage.getItem('@CodeApi:session');
      const account = await getAccountDetails(sessionId);
<<<<<<< HEAD

      if (account.name) {
        setName(account.name);
        setIcon(
          account.avatar.tmdb.avatar_path === null
            ? name[0]
            : account.avatar.tmdb.avatar_path,
        );
      } else {
        setName(account.username);
        setIcon(
          account.avatar.tmdb.avatar_path === null
            ? name[0]
            : account.avatar.tmdb.avatar_path,
        );
=======
      console.warn(account);
      if (account.name) {
        setName(account.name);
      } else {
        setName(account.username);
>>>>>>> 06dd10ae13b5abbbbe5c58f8e8a7bfe402db1e77
      }
      setIcon(
        account.avatar.tmdb.avatar_path === null
          ? account.name[0]
          : account.avatar.tmdb.avatar_path,
      );
    }
    async function awaitChange() {
      const newMovies = await getChangeMovies(new Date());
      setNotify(newMovies.results);
    }
    awaitChange();
    awaitUser();
  }, []);

  const renderHeader = () => {
    return (
      <View style={styles.boxHeader}>
        <Text style={styles.greetingText}>
          Olá, <Text style={styles.greetingText__username}>{name && name}</Text>
        </Text>
        <Text style={styles.textDescription}>
          Reveja ou acompanhe os filmes que você assistiu...
        </Text>
        <Text style={styles.textPopularMovies}>Filmes populares este mês</Text>

<<<<<<< HEAD
        <View>
          <Image
            style={style.userImage}
            source={{
              uri: `http://image.tmdb.org/t/p/w45/${icon && icon}`,
            }}
          />
=======
        <View style={style.containerNotify}>
          {console.warn(notify)}
          {notify.length > 0 ? (
            <View style={style.notifyActive}></View>
          ) : (
            <View></View>
          )}
          {icon.length === 1 ? (
            <Text style={style.userText}>{icon}</Text>
          ) : (
            <Image
              style={style.userImage}
              source={{
                uri: `http://image.tmdb.org/t/p/w45/${icon}`,
              }}
            />
          )}
>>>>>>> 06dd10ae13b5abbbbe5c58f8e8a7bfe402db1e77
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return <Loading />;
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.containerMovie}
        onPress={() => {
          navigation.navigate('Movies', item.id);
        }}>
        <View style={styles.styleApiMovie}>
          <Image
            style={styles.imgstyle}
            source={{
              uri: `http://image.tmdb.org/t/p/w92/${item.poster_path}`,
            }}
          />
          <View style={styles.containerAvaluation}>
            <Icon style={styles.icon} name="star" />
            <Text style={styles.avaluationstyle}>{item.vote_average}/10</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {name ? (
        <FlatList
          data={movie}
          contentContainerStyle={styles.containerFlatList}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          onEndReached={page < 500 ? awaitMovie : null}
          onEndReachedThreshold={0.3}
          numColumns={4}
          renderItem={renderItem}
        />
      ) : (
        <Loading />
      )}
    </View>
  );
}
