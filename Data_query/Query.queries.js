import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useEffect} from 'react';
import {Dimensions, ToastAndroid} from 'react-native';

import color from '../Screens/Screen/colors';
import axios from 'axios';
import loginstyles from '../Screens/Screen/LoginScreen/style';
import chaningstyles from '../Screens/Screen/ChangingScreen/style';
import addingstyles from '../Screens/Screen/AddingScreen/style';
import signupstyles from '../Screens/Screen/SignupScreen/style';
import userinfostyles from '../Screens/Screen/UserInfoScreen/style';

const width = Dimensions.get('screen').width;

//const ip = await Network.getIpAddressAsync();

//const my_API = `http://${manifest.debuggerHost.split(":").shift()}:7116/`;
const my_API = 'https://firstbrasshen89.conveyor.cloud/';

export const UseGetUser = () => {
  const [data, setData] = useState([]);

  async function Login(account) {
    //console.log(my_API + 'useraccount/' + account);
    if (account) {
      return await axios
        .get(my_API + 'useraccount/' + account)
        .then(response => {
          setData(response.data);
          var password = response.data.user_password;
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
  var return_data = [];
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

  var return_data = [];

  return data;
};

export const UseGetAProduct = id_product => {
  const [data, setData] = useState([]);
  var url_key = my_API + 'product/' + id_product;
  console.log(url_key);
  useEffect(async () => {
    await axios.get(url_key).then(response => setData(response.data));
  }, []);
  var return_data = [];
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
      .put(my_API + 'product/' + product.id_product, sent_product)
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
      .delete(my_API + 'product/' + product.id_product)
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
      user_account: user_info.user_account,
      user_password: user_info.user_password,
    };
    var sent_user_info = {
      user_account: user_info.user_account,
      user_name: user_info.user_account,
      user_phone: user_info.user_phone,
      user_mail: user_info.user_mail,
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
    if (!sent_userinfo.user_account || sent_userinfo.user_account == '') {
      sent_userinfo.user_account = global.oldinformation.user_account;
    }
    if (!sent_userinfo.user_name || sent_userinfo.user_name == '') {
      sent_userinfo.user_name = global.oldinformation.user_name;
    }
    if (!sent_userinfo.user_phone || sent_userinfo.user_phone == '') {
      sent_userinfo.user_phone = global.oldinformation.user_phone;
    }
    if (!sent_userinfo.user_mail || sent_userinfo.user_mail == '') {
      sent_userinfo.user_mail = global.oldinformation.user_mail;
    }
    console.log(my_API + 'user/' + sent_userinfo.user_account);
    //console.log(sent_userinfo);
    //var sent_product = product;
    axios
      .put(my_API + 'user/' + sent_userinfo.user_account, sent_userinfo)
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
  var return_data = [];
  if (data.length > 0) {
    <Text>{data.length}</Text>;
  }
  return data;
};
