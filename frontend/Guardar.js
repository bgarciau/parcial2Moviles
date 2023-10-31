import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Menu from './Menu';



export default function Guardar() {
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [service, setService] = useState('');
  const navigation = useNavigation();

  const handleGuardar = () => {
    axios.post('http://192.168.56.2:8000/api/mascotas', {
        name: name,
        age: age,
        service: service,
    }).then((response) => {
      navigation.navigate('Guardar');
      setName('');
      setAge();
      setService('');
  })
  .catch((error) => {
          navigation.navigate('Guardar');
          setName('');
          setAge();
          setService('');
  });
};
  return (
    <View style={styles.container}>
      <Text>Guardar datos en el bakckend de laravel</Text>
      <TextInput placeholder='Nombre' onChangeText={(text) => setName(text)} value={name} ></TextInput>
      <TextInput placeholder='Edad' onChangeText={(text) => setAge(text)} value={age}></TextInput>
      <TextInput placeholder='Descripcion del servicio' onChangeText={(text) => setService(text)} value={service}></TextInput>
      <Button title="GUARDAR DATOS" onPress={handleGuardar} color="#000000" />
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