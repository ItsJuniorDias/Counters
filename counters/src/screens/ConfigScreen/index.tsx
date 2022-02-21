import React, { useState } from 'react';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/Header';
import Button  from '../../components/Button';

import { Container, Content, TitleHeader } from './styles';

const ConfigScreen = () => {
  const [counter, setCounter] = useState(0);

  const handleCreateCounter = async () => {
    setCounter(counter + 1);

   const data = {
      id: uuid.v4(),
      title: `Counter ${counter}`,
      selected: false,
    };

    try {
      const dataKey = '@counter:create';
      const dataAsync = await AsyncStorage.getItem(dataKey);
      const currentData = dataAsync ? JSON.parse(dataAsync!) : [];

      const dataFormatted = [
        ...currentData,
        data,
      ];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
      Alert.alert('Counter created successfully!');
    } catch (e) {
      console.log(e);
      Alert.alert('Could not save');
    }

    console.log(data);
  };

  const handleRemoveCounter = async() => {
    try {
      const dataRemoveKey = '@counter:list_remove';
      const dataCreateKey = '@counter:create';

      const dataStore = await AsyncStorage.getItem(dataRemoveKey);
      const currentData: [] = dataStore ? JSON.parse(dataStore!) : [];

      const dataLength = currentData.filter((item) => item.selected === true);
      setCounter(counter - dataLength.length);

      const dataFiltered = currentData.filter((item) => item.selected !== true);
      await AsyncStorage.setItem(dataCreateKey, JSON.stringify(dataFiltered));


      console.log(dataFiltered, 'DATA REMOVE');
      Alert.alert('Counter removed with successfully!');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
     <Header title="Config" />

      <TitleHeader>
        Counters
      </TitleHeader>

     <Content>
        <Button
          type="up"
          title="Create"
          onPress={() => handleCreateCounter()}
        />
          <Button
          type="down"
          title="Remove"
          onPress={() => handleRemoveCounter()}
        />
     </Content>
    </Container>
  );
};

export default ConfigScreen;
