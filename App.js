import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

const request = async (Callback) => {
  const response = await fetch('https://swapi.dev/api/starships/');
  const parsed = await response.json();
  Callback(parsed.results);
};

export default function App() {
  const [Registros, setRegistros] = useState([]);
  useEffect(() => {
    request(setRegistros);
  })

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Usando a API do star wars</Text>
      <FlatList
        data={Registros}

        keyExtractor={(item)=>item.name.toString()}

        renderItem={({item})=>
    <Text style={styles.item}>
      <Text>Nave: {item.name}{'\n'}</Text> 
      <Text>Modelo: {item.model}{'\n'}</Text> 
      <Text>USando: {item.manufacturer}{'\n'}</Text> 
    </Text>
      }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    marginVertical:50,
    fontSize:30
  },
  item:{
    fontSize:18,
    padding:10,
    margin:8,
    borderRadius:20,
    backgroundColor: '#d3d3d3'
  }
});
