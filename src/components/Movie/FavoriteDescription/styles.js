import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonBack: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 40,
    position: 'absolute',
    top: 30,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxButtonAndText: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    fontSize: 20,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
    marginTop: 100,
  },
  userText: {
    fontSize: 20,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    position: 'absolute',
    top: 122,
    right: 65,
    left: 65,
    color: 'pink',
  },
});
export default styles;
