import React, {useContext, useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Alert,
  Animated,
  Dimensions,
} from 'react-native';
import styles from './styles';
import ButtonReturn from '../../components/ButtonReturn';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../../context/auth';
import {addList, getList} from '../../service/api';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Loading from '../../components/Loading';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MyLists({navigation}) {
  const {account, sessionId} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const [page, setPage] = useState('1');
  const [dataList, setDataList] = useState();
  const [idList,setIdList] = useState();
  const [listSucess, setListSucess] = useState(false);

  if (listSucess) {
    setTimeout(() => {
      setListSucess(false);
    }, 3000);
  }

  const [onButton, setOnButton] = useState(false);
  const [list, setList] = useState({
    name: name,
    description: description,
    language: 'pt',
  });

  useEffect(() => {
    setList({
      name: name,
      description: description,
      language: 'pt',
    });
    async function awaitList() {
      const awaitlist = await getList(account.id, sessionId, page);
      setDataList(awaitlist.results);
      setIdList(awaitlist);
    }
    awaitList();
  }, [name, description]);

  async function postList(list, sessionId) {
    const sucess = await addList(list, sessionId);
    if (sucess.success === true) {
      setName('');
      setDescription('');
      setModalVisible(false);
    } else {
      Alert.alert('Algo deu errado', 'Tente Novamente');
    }
  }
  const fadeAnim = useRef(new Animated.Value(-windowWidth)).current;

  const abrir = () => {
    Animated.timing(fadeAnim, {
      toValue: 20,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
 
  return (
    <View style={styles.container}>
      <ButtonReturn navigation={navigation} />
      <View style={styles.boxText}>
        <Text style={styles.text}>Minhas listas</Text>
      </View>
      <View style={styles.containerLista}>
        {dataList ? (
          <ScrollView contentContainerStyle={{paddingBottom: 200}}>
            {dataList &&
              dataList.map(item => (
                <TouchableOpacity style={styles.boxLista} onPress={() => navigation.navigate("ListMovies", [item.id])}>
                  <View style={styles.boxDescription}>
                    <Text style={styles.nameList}>
                      {item.name.toUpperCase()}
                    </Text>
                    <Text style={styles.numberMovies}>
                      {item.item_count} FILMES
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.del}>
                    <AntDesign name="delete" color="#EC2626" size={14} />
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
          </ScrollView>
        ) : (
          <Loading />
        )}
        {listSucess && (
          <Animated.View style={[styles.containerAnimated, {left: fadeAnim}]}>
            <View style={styles.boxAnimated}>
              <MaterialIcons
                style={styles.Icon}
                name="done"
                size={20}
                color={'#1ed92b'}
              />
              <Text style={styles.textAnimated}>Lista criada</Text>
            </View>
          </Animated.View>
        )}
      </View>
      <TouchableOpacity
        style={styles.add}
        onPress={() => setModalVisible(true)}>
        <Entypo name="plus" color="#000" size={38} />
      </TouchableOpacity>
      <View style={styles.viewplus}>
        <Modal
          style={{alignItems: 'center', justifyContent: 'center'}}
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.backgroundModal}>
            <View style={styles.containerModal}>
              <View style={styles.boxTextModal}>
                <Text style={styles.textModal}>Nova lista</Text>
              </View>

              <View style={styles.boxInputModal}>
                <TextInput
                  style={styles.nameListModal}
                  placeholder={'Nome da Lista'}
                  value={name}
                  onChangeText={text => setName(text)}
                />
                <TextInput
                  style={styles.descriptionListModal}
                  placeholder={'Descrição'}
                  value={description}
                  onChangeText={text => setDescription(text)}
                />
              </View>

              <View style={styles.boxButtonModal}>
                <TouchableOpacity
                  style={styles.buttonCancelModal}
                  onPress={() => [
                    setModalVisible(false),
                    setName(''),
                    setDescription(''),
                  ]}>
                  <Text style={[styles.textButtonModal, {color: 'black'}]}>
                    CANCELAR
                  </Text>
                </TouchableOpacity>
                {name !== '' ? (
                  <TouchableOpacity
                    style={[styles.buttonSaveModal, {backgroundColor: 'black'}]}
                    onPress={() => {
                      setListSucess(true);
                      abrir();
                      postList(list, sessionId);
                    }}>
                    <Text style={[styles.textButtonModal, {color: 'white'}]}>
                      SALVAR
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <View
                    style={[
                      styles.buttonSaveModal,
                      {backgroundColor: 'rgba(0,0,0,0.4)'},
                    ]}>
                    <Text style={[styles.textButtonModal, {color: 'white'}]}>
                      SALVAR
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
