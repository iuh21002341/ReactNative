import {
    View,
    Image,
    Text,
    Pressable
} from 'react-native';

import styles from '../Styles';

const GettingStartedScreen = ({ navigation, route }) => {
    return (
        <View style={[styles.container, { justifyContent: 'space-evenly' } ]}>
            <Text style={{fontSize: 30, textAlign: 'center'}}>A premium online store for sporter and their stylish choice</Text>
            <Image
                source={require('../assets/bike.png')}
                style={{ width: 300, height: 300 }}
            />
            <Text style={{fontSize: 50, fontWeight: 'bold'}}>Power Bike Shop</Text>

            <Pressable style={[styles.button, { width: '100%' }]} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>

        </View>
    );
}
export default GettingStartedScreen;