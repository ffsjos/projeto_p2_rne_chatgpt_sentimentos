import {
    KeyboardAvoidingView, View, StyleSheet, Text, Linking
} from 'react-native';
import { Input, Button } from '@rneui/themed';
import { Feather } from '@expo/vector-icons'; 
import { styleData } from '../data/styleData';
import { useState } from 'react';

export default function Footer( {message, setMessage} ) {

    const [inputText, setInputText] = useState('');
    
    return (
        <View style={styles.footer}>
            {
                message === ''
                ? 
                <KeyboardAvoidingView
                    behavior='padding'
                    style={styles.footer}
                >
                    <View style={styles.container}>
                        <View style={styles.boxMessage}>
                            <Input
                                placeholder='Send a message...'
                                style={styles.input}
                                onChangeText={setInputText}
                                value={inputText}
                            />
                            <Button
                                type='clear'
                                title={<Feather name="send" size={18} color="white" />}
                                onPress={() => {
                                    setMessage(inputText)
                                    setInputText('')
                                }
                                }
                            />  
                        </View>
                        <Text style={styles.description}>
                            Free Research Preview. ChatGPT may produce inaccurate information about people, 
                            places, or facts. 
                            <Text
                                style={styles.descriptionLink}
                                onPress={() => { 
                                    Linking.openURL('https://help.openai.com/en/articles/6825453-chatgpt-release-notes'); 
                                }} 
                            >
                                ChatGPT May 24 Version
                            </Text>
                        </Text>
                    </View>
                </KeyboardAvoidingView>
                :
                <View style={styles.container}>
                    <Button
                        type='clear'
                        title='New Chat'
                        titleStyle={styles.titleButtonNewChat}
                        onPress={() => setMessage('')}
                        containerStyle={styles.buttonNewChat}
                    />
                    <Text style={styles.description}>
                        Free Research Preview. ChatGPT may produce inaccurate information about people, 
                        places, or facts. 
                        <Text
                            style={styles.descriptionLink}
                            onPress={() => { 
                                Linking.openURL('https://help.openai.com/en/articles/6825453-chatgpt-release-notes'); 
                            }} 
                        >
                            ChatGPT May 24 Version
                        </Text>
                    </Text>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },

    container: {
        height: 120,
        borderTopWidth: 1,
        borderTopColor: styleData.colors.white,
        backgroundColor: styleData.colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 5,
        gap: 10
      },
    
      boxMessage: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 50,
        height: 65,
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: styleData.colors.secondary,
      },
    
      description: {
        color: styleData.colors.white,
        fontSize: 10,
        textAlign: 'center',
        paddingHorizontal: 10
      },
    
      descriptionLink: {
        textDecorationLine: 'underline',
      },
    
      input: {
        color: styleData.colors.white,
      },

      buttonNewChat: {
        marginTop: 5,
        borderColor: styleData.colors.white,
        borderWidth: 2,
        borderRadius: 10,
        color: styleData.colors.white,
      },

      titleButtonNewChat: {
        color: styleData.colors.white,
        fontWeight: 500
      }
});