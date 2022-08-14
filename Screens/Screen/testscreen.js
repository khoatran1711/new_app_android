import React from 'react';
import {Text} from 'react-native';

import {UseGetAllMydata} from '../../Data_query/Query.queries';

const testscreen = () => {
  const listofData = UseGetAllMydata();
  console.log(listofData);
  return listofData.map(item => <Text>{item.my_name}</Text>);
};

export default testscreen;
