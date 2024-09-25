import { Text, View, Image, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';

function App() {
  return (
    <View style={style.container}>
      <View style={[style.row, { flex: 2, justifyContent: 'center', alignItems: 'center'}]}>
        <Image 
          source={{ uri: 'https://pngimg.com/uploads/circle/circle_PNG63.png' }}
          style={{ width: 150, height: 150 }}
        />
      </View>

      <View style={style.row}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>
          GROW YOUR BUSSINESS
        </Text>
      </View>

      <View style={style.row}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>
          We will help you to grow your business using online server
        </Text>
      </View>

      <View style={[
        style.row, 
        {
          flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-evenly'
        }
      ]}>
        <Pressable style={style.button}>
          <Text style={style.buttonText}>LOGIN</Text>
        </Pressable>
        <Pressable style={style.button}>
          <Text style={style.buttonText}>SIGN UP</Text>
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#00ccf9',
    paddingVertical: 5,
    paddingHorizontal: 10,
    display: 'flex',
    flex: 1,
  },
  row: {
    flex: 1,
  },
  button: {
    backgroundColor: '#E3C000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;