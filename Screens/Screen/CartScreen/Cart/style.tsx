import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import color from './../../colors';
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  forLine: {
    marginTop: (width * 3) / 100,
    width: (width * 94) / 100,
    marginLeft: (width * 3) / 100,
    height: 2,
    resizeMode: 'stretch',
  },
  forProductArea: {
    marginTop: (width * 5) / 100,
    height: '85%',
  },
  forResultContainer: {width: width},
  forProductContainer: {
    marginBottom: 20,
    marginLeft: (width * 5) / 100,
    width: (width * 90) / 100,
    height: width / 3,
    resizeMode: 'stretch',
    flexDirection: 'row',
  },
  forProductImage: {
    top: '4%',
    marginLeft: '5%',
    width: '40%',
    height: '80%',
  },
  forProductInfo: {
    width: '40%',
    height: '80%',
    marginLeft: '5%',
    top: '4%',
  },
  forProductName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: color.dark_brown,
  },
  forProductPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: color.dark_brown,
  },
  forProductAmount: {
    fontSize: 20,
    color: color.dark_brown,
  },
  forIcon: {
    marginTop: (width * 1) / 100,
    width: (width * 6) / 100,
    height: (width * 6) / 100,
  },
  forAmountProduct: {
    marginTop: (width * 1) / 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forNumberofProduct: {
    marginTop: (width * 5) / 100,
    marginLeft: (width * 5) / 100,
  },
  forButton: {
    marginTop: (width * 1) / 100,
    backgroundColor: color.dark_brown,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  forTextinButton: {
    color: color.yellow,
  },
});

export default styles;
