import {
    View,
    Image,
    Text,
    ScrollView,
    FlatList,
    Pressable
} from 'react-native';

import styles from '../Styles';

import React from 'react';

import data from '../Data';

function HomeScreen({ navigation, route }) {

    return (
        <View style={[styles.container, {alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: 30}]}>
            <View>
                <Text style={[styles.text, {textAlign: 'left', fontSize: 40, color: 'red'}]}>The world's Best Bike</Text>
            </View>

            <ScrollView>   
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Pressable style={{flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#cccccc'}}
                            onPress={() => navigation.navigate('Product', { id: item.id })}
                        >
                            <Image
                                source={{ uri: item.image }}
                                style={{ width: 100, height: 100 }}
                            />
                            <View style={{flex: 1, justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 20}}>{item.name}</Text>
                                <Text style={{fontSize: 16, color: 'red'}}>{item.price}</Text>
                            </View>
                        </Pressable>
                    )}
                />
            </ScrollView>

        </View>
    );
}
export default HomeScreen;