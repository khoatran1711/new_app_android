import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import color from '../colors';
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  forImage: {
    alignContent: 'center',
    alignItems: 'center',
    width: (width * 95) / 100,
    height: (width * 15) / 100,
    marginTop: '10%',
    marginBottom: '10%',
    resizeMode: 'stretch',
  },
  forButton: {
    padding: 5,
    backgroundColor: '#301D0E',
    width: '40%',
    borderRadius: 20,
    marginLeft: '30%',
    marginTop: '10%',
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
    width: 100,
    height: 100,
    marginTop: '5%',
    justifyContent: 'center',
    resizeMode: 'stretch',
  },
  forSuggestion: {
    marginRight: '5%',
    textAlign: 'right',
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',
  },
});

export default styles;
