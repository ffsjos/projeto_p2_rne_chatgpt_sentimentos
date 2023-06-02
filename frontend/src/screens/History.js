import React from 'react';
import { View, StyleSheet, StatusBar, FlatList, Text } from 'react-native';
import { ListItem, Avatar } from '@rneui/themed';
import { styleData } from '../data/styleData';
import IconChatGPT from './../../assets/icon.png';
import IconUser from './../../assets/iconUser.jpg';

export default function History({ history, setHistory}) {

    const handleRemoveItem = (item) => {
        const updatedList = history.filter((i) => i !== item);
        setHistory(updatedList);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            {
                Object.keys(history).length !== 0
                ? 
                <FlatList
                    style={styles.list}
                    data={history}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.listContainer}>
                            <ListItem onLongPress={() => handleRemoveItem(item)} containerStyle={styles.listForYou}>
                                <Avatar

                                    containerStyle={styles.avatar}
                                    rounded
                                    source={IconUser}
                                />
                                <ListItem.Content>
                                    <ListItem.Title style={styles.listTitle}>You</ListItem.Title>
                                    <ListItem.Subtitle style={styles.listSubtitle}>
                                        {item.text}
                                    </ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>

                            <ListItem onLongPress={() => handleRemoveItem(item)} containerStyle={styles.listForChat}>
                                <Avatar
                                    rounded
                                    containerStyle={styles.avatar}
                                    source={IconChatGPT}
                                />
                                <ListItem.Content>
                                    <ListItem.Title style={styles.listTitle}>ChatGPT</ListItem.Title>
                                    <ListItem.Subtitle style={styles.listSubtitle}>
                                        {item.answer}
                                    </ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        </View>
                    )}
                />
                :
                <View style={styles.containerWarning}>
                    <Text style={styles.textWarning}>
                        Empty history! 
                    </Text>
                    <Text style={styles.textWarning}>
                        Send a text to view your history here! 
                    </Text>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: styleData.colors.primary,
        position: 'absolute',
        width: '100%',
        height: '100%'
    },

    containerWarning: {
        marginTop: 55,
    },
    
    textWarning: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },

    listContainer: {
        overflow: 'hidden',
        marginTop: 35,
        marginLeft: 65,
        marginRight: 65,
       
    },


    listForYou: {
        backgroundColor: styleData.colors.primary,
        borderColor: styleData.colors.white,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        
    },

    listForChat: {
        backgroundColor: styleData.colors.secondary,
        borderColor: styleData.colors.white,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },

    listTitle: {
        color: styleData.colors.white,
        fontWeight: 'bold'
    },

    listSubtitle: {
        color: styleData.colors.white
    },

    avatar: {
        borderColor: 'white',
         borderWidth: 1
    }
});