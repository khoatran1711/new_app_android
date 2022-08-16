import React, {useState} from 'react';
import {TouchableOpacity, Text, Alert} from 'react-native';
import {useEffect} from 'react';
import {Dimensions, ToastAndroid} from 'react-native';

import minus from '../Screens/Pictures/minus.png';
import add from '../Screens/Pictures/add.png';

import color from '../Screens/Screen/colors';
import axios from 'axios';
import loginstyles from '../Screens/Screen/LoginScreen/style';
import chaningstyles from '../Screens/Screen/ChangingScreen/style';
import addingstyles from '../Screens/Screen/AddingScreen/style';
import signupstyles from '../Screens/Screen/SignupScreen/style';
import userinfostyles from '../Screens/Screen/UserInfoScreen/style';
import productstyles from '../Screens/Screen/ProductScreen/style';
import cartstyles from '../Screens/Screen/CartScreen/Cart/style';

const width = Dimensions.get('screen').width;

//const ip = await Network.getIpAddressAsync();

//const my_API = `http://${manifest.debuggerHost.split(":").shift()}:7116/`;
const my_API = global.myAPI
  ? global.myAPI
  : 'https://differentbrushedboard26.conveyor.cloud/';

export const UseGetUser = () => {
  const [data, setData] = useState([]);

  async function Login(account) {
    console.log(my_API + 'useraccount/' + account);
    if (account) {
      return await axios
        .get(my_API + 'useraccount/' + account)
        .then(response => {
          setData(response.data);
          var password = response.data.password;
          console.log(password);
          if (password == global.password) {
            if (account == 'admin') {
              global.navigationScreen.navigate('HomeManage');
            } else {
              global.navigationScreen.navigate('Home');
            }
          }
        })
        .catch(function (error) {
          throw error;
          console.log(error);
        });
    }
  }

  return (
    <TouchableOpacity
      style={loginstyles.forButton}
      onPress={() => Login(global.account)}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          textAlign: 'center',
        }}>
        Login
      </Text>
    </TouchableOpacity>
  );
};

export const UseGetUserInfo = () => {
  const [data, setData] = useState([]);
  var url_key = my_API + 'user/' + global.account;
  console.log(url_key);
  useEffect(() => {
    axios.get(url_key).then(response => setData(response.data));
  }, []);
  if (data.length > 0) {
    console.log('len>0', data);
  }
  return data;
};

export const UseGetAllProduct = navigation => {
  const [data, setData] = useState([]);
  var url_key = my_API + 'product';
  console.log(url_key);
  function fetchData() {
    return axios.get(url_key).then(response => setData(response.data));
  }
  useEffect(() => {
    fetchData();
    const willFocusSubscription = navigation.addListener('focus', () => {
      fetchData();
    });
    return willFocusSubscription;
  }, []);

  return data;
};

export const UseGetAProduct = id_product => {
  console.log('ID', id_product);
  const [data, setData] = useState([]);
  var url_key = my_API + 'product/' + id_product;
  console.log(url_key);
  useEffect(async () => {
    await axios.get(url_key).then(response => setData(response.data));
  }, []);
  if (data.length > 0) {
    console.log('len>0', data);
  }
  return data;
};

export const UsePutProduct = navigation => {
  const [update, setUpdate] = useState(null);
  function Change(product) {
    //console.log(product);
    var sent_product = product;
    return axios
      .put(my_API + 'product/' + product.idProduct, sent_product)
      .then(response => {
        setUpdate(response.data.updatedAt);
        console.log(response);
        navigation.navigate('HomeManage');
      });
  }

  return (
    <TouchableOpacity
      style={chaningstyles.forButton}
      onPress={() => Change(global.changingproduct)}>
      <Text style={chaningstyles.forTextInOpaTouch}>Change</Text>
    </TouchableOpacity>
  );
};

export const UsePostProduct = navigation => {
  const [update, setUpdate] = useState(null);
  function Add(product) {
    //console.log(product);
    var sent_product = product;
    return axios.post(my_API + 'product', sent_product).then(response => {
      setUpdate(response.data.updatedAt);
      console.log(response);
      global.addingproduct = '';
      navigation.navigate('HomeManage');
    });
  }

  return (
    <TouchableOpacity
      style={addingstyles.forButton}
      onPress={() => Add(global.addingproduct)}>
      <Text style={addingstyles.forTextInOpaTouch}>Add</Text>
    </TouchableOpacity>
  );
};

export const UseDeleteProduct = navigation => {
  const [update, setUpdate] = useState(null);
  function Delete(product) {
    //console.log(product.id_product);
    var sent_product = product;
    return axios
      .delete(my_API + 'product/' + product.idProduct)
      .then(response => {
        setUpdate(response.data.updatedAt);
        console.log(response);
        global.changingproduct = '';
        navigation.navigate('HomeManage');
      });
  }

  return (
    <TouchableOpacity
      style={chaningstyles.forButton}
      onPress={() => Delete(global.changingproduct)}>
      <Text style={chaningstyles.forTextInOpaTouch}>Delete</Text>
    </TouchableOpacity>
  );
};

export const UsePostUser = navigation => {
  const [update, setUpdate] = useState(null);
  function Add_User(user_info) {
    //console.log(user_info);
    var sent_account = {
      Account: user_info.account,
      Password: user_info.password,
    };
    var sent_user_info = {
      userAccount: user_info.userAccount,
      userName: user_info.userAccount,
      userPhone: user_info.userPhone,
      userMail: user_info.userMail,
    };

    //console.log("account", sent_account);
    //console.log("info ", sent_user_info);
    axios.post(my_API + 'useraccount', sent_account).then(response => {
      setUpdate(response.data.updatedAt);
      console.log(response);
    });
    axios.post(my_API + 'user', sent_user_info).then(response => {
      setUpdate(response.data.updatedAt);
      console.log(response);
      navigation.goBack();
    });
  }

  return (
    <TouchableOpacity
      title="Login"
      style={signupstyles.forButton}
      onPress={() => Add_User(global.regis_user)}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          textAlign: 'center',
        }}>
        Sign up
      </Text>
    </TouchableOpacity>
  );
};

export const UsePutUserInfo = navigation => {
  const [update, setUpdate] = useState(null);
  function ChangeInfo(user) {
    var sent_userinfo = user;
    if (!sent_userinfo.useAccount || sent_userinfo.userAccount == '') {
      sent_userinfo.userAccount = global.oldinformation.userAccount;
    }
    if (!sent_userinfo.userName || sent_userinfo.userName == '') {
      sent_userinfo.userName = global.oldinformation.userName;
    }
    if (!sent_userinfo.userPhone || sent_userinfo.userPhone == '') {
      sent_userinfo.userPhone = global.oldinformation.userPhone;
    }
    if (!sent_userinfo.user_mail || sent_userinfo.user_mail == '') {
      sent_userinfo.userMail = global.oldinformation.userMail;
    }
    console.log(my_API + 'user/' + sent_userinfo.userAccount);
    //console.log(sent_userinfo);
    //var sent_product = product;
    axios
      .put(my_API + 'user/' + sent_userinfo.userAccount, sent_userinfo)
      .then(response => {
        setUpdate(response.data.updatedAt);
        navigation.goBack();
      });
  }

  return (
    <TouchableOpacity
      style={userinfostyles.forButtonChange}
      onPress={() => ChangeInfo(global.changinguser)}>
      <Text
        style={{
          textAlign: 'center',
          color: color.dark_brown,
          fontSize: (width * 5) / 100,
        }}>
        Update
      </Text>
    </TouchableOpacity>
  );
};

//test
export const UseGetAllMydata = () => {
  const [data, setData] = useState([]);
  var url_key = my_API + 'mydata';
  console.log(url_key);
  useEffect(async () => {
    await axios.get(url_key).then(response => setData(response.data));
  }, []);
  if (data.length > 0) {
    <Text>{data.length}</Text>;
  }
  return data;
};

export const UsePostProductToCart = (idProduct, priceProduct) => {
  const [update, setUpdate] = useState(null);
  function Add_Product_to_Cart() {
    var sent_cart = {
      cartID: global.account + idProduct,
      userID: global.account,
      productID: idProduct,
      productPrice: priceProduct,
      productAmount: 1,
      totalAmount: priceProduct,
    };

    axios.post(my_API + 'cart/', sent_cart).then(response => {
      setUpdate(response.data.updatedAt);
      console.log(response);
    });
  }

  return (
    <TouchableOpacity
      style={productstyles.forBuyButton}
      onPress={() => Add_Product_to_Cart()}>
      <Text style={productstyles.forTextInButton}>Add to Cart</Text>
    </TouchableOpacity>
  );
};

export const UseGetCartByUser = idUser => {
  const [data, setData] = useState([]);
  var url_key = my_API + 'cart/getbyuser/' + idUser;
  console.log(url_key);
  function fetchData() {
    return axios.get(url_key).then(response => setData(response.data));
  }
  useEffect(() => {
    fetchData();
    const willFocusSubscription = global.navigationScreen.addListener(
      'focus',
      () => {
        fetchData();
      },
    );
    return willFocusSubscription;
  }, []);

  return data;
};

export const UsePutProductToCart = (cart, amount) => {
  const [update, setUpdate] = useState(null);
  function Change_Product_to_Cart() {
    //console.log(amount);
    var sent_cart = cart;
    sent_cart.productAmount = amount;
    sent_cart.totalAmount = amount * sent_cart.productPrice;

    function Change() {
      axios
        .put(my_API + 'cart/' + sent_cart.cartID, sent_cart)
        .then(response => {
          setUpdate(response.data.updatedAt);
          console.log(response);
          ToastAndroid.show('Updated successfully!', ToastAndroid.SHORT);
        });
    }

    const ConfirmAlert = () => {
      Alert.alert(
        'Update your cart?',
        'Your products in your cart will be updated?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => Change()},
        ],
      );
    };
    ConfirmAlert();
  }

  return (
    <TouchableOpacity
      style={cartstyles.forButton}
      onPress={() => Change_Product_to_Cart()}>
      <Text style={cartstyles.forTextinButton}>Confirm</Text>
    </TouchableOpacity>
  );
};

export const UseDeleteCart = idCart => {
  const [update, setUpdate] = useState(null);
  function Delete() {
    function Delete_product() {
      axios.delete(my_API + 'cart/' + idCart).then(response => {
        setUpdate(response.data.updatedAt);
        console.log(response);
        ToastAndroid.show('Delete successfully!', ToastAndroid.SHORT);
        global.navigationScreen.goBack();
      });
    }

    const ConfirmAlert = () => {
      Alert.alert(
        'Delete this product?',
        'This product will be moved out of your cart?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => Delete_product()},
        ],
      );
    };

    ConfirmAlert();
  }

  return (
    <TouchableOpacity style={cartstyles.forButton} onPress={() => Delete()}>
      <Text style={cartstyles.forTextinButton}>Delete</Text>
    </TouchableOpacity>
  );
};
