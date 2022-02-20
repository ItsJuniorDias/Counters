import React, {useState } from 'react';
import { FlatList, View, Text } from 'react-native';

import { Container, Card, ContentFlat, TitleCard } from './styles';

import Header from '../../components/Header';

const Dashboard = () => {
  const [ activeId, setActiveId ] = useState(null);

  const [ data, setData ] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      selected: false,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      selected: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      selected: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d724',
      title: 'Four Item',
      selected: false,
    },
  ]);

  const Item = ({ title, onPress, selectedItem }) => (
    <Card onPress={onPress} active={selectedItem} >
      <TitleCard active={selectedItem}>{title}</TitleCard>
    </Card>
  );

  const renderItem = ({ item }) => {
    const handleActive = (id) => {
      console.log(id, 'ID');

      const selectedData = data.map(item => {
        if (item.id === id && item.selected === false) {
          return {...item, selected: true};
        }

        if (item.selected === true && item.id === id) {
          return {...item, selected: false};
        }

        return item;
      });

      setData(selectedData);
      console.log(selectedData);
    };


    return (
      <Item
        title={item.title}
        onPress={() => handleActive(item.id)}
        selectedItem={item.selected}
     />
    );
  };


  return (
    <Container>
      <Header />

      <ContentFlat>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ContentFlat>
    </Container>
  );
};

export default Dashboard;
