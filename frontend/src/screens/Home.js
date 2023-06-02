import { StyleSheet, View, StatusBar } from 'react-native';
import Header from './../components/Header';
import Chat from './../components/Chat';
import NewChatModel from '../components/NewChatModel';
import Footer from '../components/Footer';
import { useState } from 'react';
import { styleData } from '../data/styleData';

export default function Home({ history, setHistory }) {

  const [message, setMessage] = useState('i');

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header message={message} setMessage={setMessage}/>
      { message === '' 
        ? <NewChatModel/>
        : <Chat message={message} history={history} setHistory={setHistory}/> 
      }
      <Footer message={message} setMessage={setMessage}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: styleData.colors.primary,
    },
});