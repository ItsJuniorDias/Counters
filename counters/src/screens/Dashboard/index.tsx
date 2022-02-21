import React, { useState, useEffect, useCallback  } from 'react';
import { FlatList } from 'react-native';

import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';

import { useFocusEffect } from '@react-navigation/native';

import {
  Container,
  Card,
  ContentFlat,
  TitleCard,
  ContentEmpty,
  TitleEmpty,
} from './styles';

import Header from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../../global/styles/theme';

const Dashboard = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
     async function resetItem() {
       await AsyncStorage.removeItem('@counter:create');
     }

     resetItem();
  },[]);

  useFocusEffect(useCallback(() => {
    loadData();
  }, []));

  const activeItem = (activeData: []) => {
    console.log(activeData, 'ACTIVE DATA');

    const changeItem = activeData[0].selected = true;

    const dataFormatted = [
      ...activeData,
      changeItem,
    ];

    setData(dataFormatted);

  };


  const loadData = async () => {
    const dataAsync = await AsyncStorage.getItem('@counter:create');
    const currentData: [] = dataAsync ? JSON.parse(dataAsync!) : [];

    console.log(currentData, 'CURRENT DATA');

    if ( currentData.length > 0) {
      activeItem(currentData);
    }


    setData(currentData);
  };


  const Item = ({ title, onPress, selectedItem }) => (
    <Card onPress={onPress} active={selectedItem} >
      <TitleCard active={selectedItem}>{title}</TitleCard>
    </Card>
  );

  const renderItem = ({ item }) => {
    const handleActive = async (id) => {
      const selectedData = data.map(item => {
        if (item.id === id && item.selected === false) {
          return {...item, selected: true};
        }

        if (item.selected === true && item.id === id) {
          return {...item, selected: false};
        }

        return item;
      });

      try {
        const dataKey = '@counter:list_remove';
        await AsyncStorage.setItem(dataKey, JSON.stringify(selectedData));


      } catch (e) {
        console.log(e);
      }

      setData(selectedData);
    };


    return (
      <Item
        title={item.title}
        onPress={() => handleActive(item.id)}
        selectedItem={item.selected}
     />
    );
  };

  const listEmpty = () => (
    <ContentEmpty>
      <MaterialIcons name="block" size={30} color={theme.colors.black} />
      <TitleEmpty>The list is empty</TitleEmpty>
    </ContentEmpty>
  );


  return (
    <Container>
      <Header title="Counters" />

      <ContentFlat>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => listEmpty()}
        />
      </ContentFlat>
    </Container>
  );
};

export default Dashboard;
