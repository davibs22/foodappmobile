import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, ActivityIndicator } from 'react-native';
import ProductsMin from './components/productsmin.js'
import { Container, Text, Header, Left, Body, Right, Title } from 'native-base';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('http://192.168.0.9:3000/products')
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson))
  }, []);
  //console.log(data)
  return (
    <View style={styles.container}>
      <StatusBar/>
      <View style={styles.titleContents}>
        <Text style={styles.title}>Products</Text>
      </View>
      <FlatList contentContainerStyle={{flexGrow: 1,}}
          data={data}
          renderItem={({item}) => <ProductsMin titleName = {item.title} typeName = {item.type} ratingValue = {item.rating} price = {item.price}/> }
          keyExtractor = { (item, index) => index.toString() }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  titleContents: {
    backgroundColor: '#EB5757',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 34
  },
  title: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
