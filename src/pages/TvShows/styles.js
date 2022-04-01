import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  //Header FlatList---
  backGroundHeader: {
    width: '100%',
    height: 170,
  },

  containerButtonStar: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
    right: 20,
    borderRadius: 40,
    width: 30,
    height: 30,
    backgroundColor: 'white',
  },
  detailsTvShow: {
    flexDirection: 'row',
    width: '100%',
    height: 128,
    paddingHorizontal: 20,
  },
  posterTvShow: {
    position: 'relative',
    top: -60,
    width: 120,
    height: 188,
    borderRadius: 8,
  },
  containerDetails: {
    width: '65%',
    paddingHorizontal: 14,
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  detailsTvShowTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  detailsTvShowAge: {
    fontSize: 10,
    color: 'white',
  },
  criatedText: {
    fontSize: 10,
    color: 'white',
  },
  criatedName: {
    fontWeight: '700',
  },
  boxDetailsIcons: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  tvShowsRate: {
    color: '#E9A6A6',
    fontSize: 30,
    fontWeight: '400',
    marginRight: 30,
  },
  detailsLiked: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  heartIcon: {
    color: 'red',
    alignSelf: 'center',
  },
  liked: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontSize: 10,
  },
  textDetailsTvDescription: {
    textAlign: 'justify',
    fontSize: 12,
    marginHorizontal: 20,
    marginVertical: 25,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    justifyContent: 'center',
    color: 'white',
  },

  //End Header FaltList

  //Render Item
  buttonSeason: {
    marginHorizontal: 20,
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#FFFFFF80',
    borderRadius: 5,
    flexDirection: 'row',
    borderBottomWidth: 4,
    borderBottomColor: '#E9A6A6',
  },
  listContainerSeasons: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 5,
  },
  textSeasons: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  containerEpisodes: {
    alignContent: 'center',
    backgroundColor: '#FFFFFF80',
    borderRadius: 5,
    marginHorizontal: 20,
    padding: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
  },
  containerText: {
    height: 25,
  },
  textEpisode: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
  },
  textTitleEpisode: {
    fontSize: 8,
    fontWeight: '40',
    color: '#fff',
  },
});

export default styles;
