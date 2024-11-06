import {
    View,
    Image,
    Text
} from 'react-native';
import styles from '../Styles';

function ProductScreen({ navigation, route }) {

    const { id } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Product Screen</Text>
            <Text style={styles.text}>Product ID: {id}</Text>
        </View>
    );
}
export default ProductScreen;