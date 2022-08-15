import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import color from '../colors';

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  forImage: {
    alignContent: 'center',
    alignItems: 'center',
    width: (width * 95) / 100,
    height: (width * 30) / 100,
    marginTop: '20%',
    marginBottom: '0%',
    resizeMode: 'stretch',
  },
  forButton: {
    padding: 5,
    backgroundColor: '#301D0E',
    width: '40%',
    borderRadius: 20,
    marginLeft: '30%',
    marginTop: '5%',
  },
  forBackgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  forIcon: {
    height: 38,
    width: 38,
  },
  forInputText: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: '70%',
    marginLeft: '5%',
    fontSize: 20,
    color: 'white',
  },
  forInputComponent: {
    flexDirection: 'row',
    marginLeft: '8%',
    marginBottom: '10%',
  },
  forLogo: {
    width: 130,
    height: 130,
    justifyContent: 'center',
    resizeMode: 'stretch',
  },
  forSuggestion: {
    marginRight: '10%',
    textAlign: 'right',
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',
    marginTop: '-3%',
  },
  forCreateAccount: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    marginTop: '15%',
  },
});

export default styles;
