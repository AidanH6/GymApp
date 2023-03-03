import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ( props ) => {
    return (
        <TouchableOpacity style={ styles.buttonBody }
            onPress = { props.onPress } >
            <Text style={ styles.buttonText }>
                { props.children }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonBody: {
        backgroundColor: '#176f8f',
        width: '100%',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        margin: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    }
} );

export { Button };