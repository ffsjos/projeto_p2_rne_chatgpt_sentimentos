import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons'; 
import { Button } from '@rneui/themed';
import { styleData } from '../data/styleData';
import { useNavigation } from '@react-navigation/native';

export default function Header({message, setMessage}) {
    const navigation = useNavigation();

    console.log(message.length)

    return (
      <View style={styles.container}>
            <Button 
                icon={<MaterialIcons name="history" size={24} color={styleData.colors.white} />}
                type="clear"
                onPress={() => navigation.navigate('History')}
            />
            <Text style={styles.title}>
                {
                    message === '' 
                        ? 'New Chat' 
                        :
                            message.length <= 30
                                ? message
                                : message.slice(0, 30) + "..."
                }
            </Text>
            <Button 
                icon={<Entypo name="plus" size={24} color={styleData.colors.white} />}
                type="clear"
                onPress={() => setMessage('')}
            />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: StatusBar.currentHeight,
      height: 50,
      borderBottomColor: 'white',
      borderBottomWidth: 0.6,
      paddingLeft: 5
    },
    title: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    }
});
