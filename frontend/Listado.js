import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import axios from 'axios';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Table, Row, Rows } from 'react-native-table-component';
import Menu from './Menu';



export default function Listado() {
  const navigation = useNavigation();

  const handleListado = () => {
    axios.get('http://192.168.56.2:8000/api/mascotas',
    ).then((response) => {
      // Alert.alert('Listado', 'correcto.');
      navigation.navigate('Listado');
      const datos = response.data;
  })
  .catch((error) => {
          // Alert.alert('Error', 'Error al iniciar sesión. Inténtalo de nuevo.');
          navigation.navigate('Listado');
  });
};
  return (
    <View style={styles.container}>
      <Text>Listado datos desde bakckend de laravel</Text>
      <Button title="Listado DATOS" onPress={handleListado} color="#000000" />
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          
        </Table>
      <Menu navigation={navigation} />
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
});