import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

const Menu = ({ navigation }) => {
    
    const handleGuardar = () => {
        navigation.navigate('Guardar');
    };

    const handleListado = () => {
        navigation.navigate('Listado');
    };

    return (
            <View style={styles.menuContainer}>
                <TouchableButton title="Guardar" onPress={handleGuardar} style={styles.smallButton} />
                <TouchableButton title="Listado" onPress={handleListado} style={styles.smallButton} />
            </View>
    );

};

const TouchableButton = ({ title, onPress, style }) => (
    <TouchableHighlight
        style={[styles.button, style]}
        onPress={onPress}
        underlayColor="#E0E0E0"
    >
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'column',
        position: 'absolute',  
        top: 0,  
        left: 0, 
        marginTop: 100,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 5,
        margin: 5,
        borderRadius: 5,
    },
    smallButton: {
        width: 100,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default Menu;