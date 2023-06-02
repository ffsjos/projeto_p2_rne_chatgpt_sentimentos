import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { styleData } from '../data/styleData';
import { Entypo } from '@expo/vector-icons'; 

export default function NewChatModel() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                RATE MY FEELINGS CHATGPT
            </Text>

            <Text style={styles.subtitle}>
                Report a feeling
            </Text>

            <View style={styles.titleExampleContainer}>
                <Entypo name="light-up" size={18} color="white" />
                <Text style={styles.titleExample}>Examples</Text>
            </View>

            <View style={styles.exampleContainer}>
                <Text style={styles.exampleText}>
                    Estou muito feliz
                </Text>
            </View>

            <View style={styles.exampleContainer}>
                <Text style={styles.exampleText}>
                    Estou muito chateado
                </Text>
            </View>

            <View style={styles.exampleContainer}>
                <Text style={styles.exampleText}>
                    Vou ver a aula do Bossini
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 15,
    },

    titleExampleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginTop: 40
    },

    title: {
        color: styleData.colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 34,
        marginTop: 50
    },

    subtitle: {
        color: styleData.colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        marginTop: 10
    },

    titleExample: {
        color: styleData.colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },

    exampleContainer: {
        backgroundColor: styleData.colors.secondary,
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    exampleText: {
        color: styleData.colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    }
});