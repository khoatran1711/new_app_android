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
  forTextInOpaTouch: {
    textAlign: 'center',
  },
  forButton: {
    marginTop: '5%',
    width: (width * 40) / 100,
    backgroundColor: color.yellow,
    marginLeft: (width * 30) / 100,
    borderRadius: 20,
    padding: 10,
  },
  forFindingProductContainer: {
    flexDirection: 'row',
  },
  forInputProduct: {
    fontSize: (width * 5) / 100,
    marginTop: (width * 10) / 100,
    height: (width * 15) / 100,
    color: color.yellow,
    width: (width * 65) / 100,
    borderBottomColor: color.yellow,
    borderBottomWidth: 1,
    marginLeft: (width * 1) / 100,
  },
  forInputProductButton: {
    marginTop: (width * 15) / 100,
    paddingTop: (width * 1) / 100,
    height: (width * 7) / 100,
    backgroundColor: color.yellow,
    width: (width * 20) / 100,
    marginLeft: (width * 5) / 100,
  },
  forProductListContainer: {
    marginTop: (width * 3) / 100,
  },
  forProductListTitle: {
    fontSize: (width * 4) / 100,
    color: color.yellow,
    textAlign: 'center',
  },
  forProductArea: {
    marginTop: (width * 10) / 100,
  },
  forFindingProductContainer: {
    marginBottom: 20,
    marginLeft: (width * 5) / 100,
    width: (width * 90) / 100,
    height: width / 4,
    resizeMode: 'stretch',
    flexDirection: 'row',
  },
  forFindingProductImage: {
    top: '4%',
    marginLeft: '5%',
    width: '40%',
    height: '80%',
  },
  forFindingProductInfo: {
    width: '40%',
    height: '80%',
    marginLeft: '5%',
    top: '4%',
  },
  forFindingProductName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  forFindingProductPrice: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  forFindingProductDescription: {
    fontSize: 12,
  },
});

export default styles;
