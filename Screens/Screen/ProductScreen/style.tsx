import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import color from '../colors';
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  forLeftIcon: {
    marginLeft: (width * 3) / 100,
    marginTop: (width * 3) / 100,
    width: (width * 7) / 100,
    height: (width * 7) / 100,
    resizeMode: 'stretch',
  },
  forProductName: {
    marginTop: (width * 0) / 100,
    textAlign: 'center',
    width: width,
    fontSize: (width * 8) / 100,
    color: color.yellow,
  },
  forProductImage: {
    marginTop: (width * 0) / 100,
    marginLeft: (width * 10) / 100,
    width: (width * 80) / 100,
    height: (width * 50) / 100,
  },
  forProductPrice: {
    marginTop: (width * 6) / 100,
    textAlign: 'center',
    width: width,
    fontSize: (width * 6) / 100,
    color: color.yellow,
  },
  forProductDesciption: {
    marginLeft: (width * 5) / 100,
    marginTop: (width * 5) / 100,
    textAlign: 'center',
    width: (width * 90) / 100,
    fontSize: (width * 6) / 100,
    color: color.yellow,
  },
  forBuyButton: {
    marginTop: (width * 5) / 100,
    paddingVertical: 5,
    borderRadius: 15,
    marginLeft: '10%',
    width: '80%',
    backgroundColor: color.yellow,
    alignItems: 'center',
  },
  forTextInButton: {
    color: color.dark_brown,
    fontSize: 15,
  },
});

export default styles;
