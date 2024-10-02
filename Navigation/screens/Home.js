import React from 'react';
import { Text, View, Image, Pressable, SafeAreaView } from 'react-native';
import Styles from '../assets/stylesheets/styles';
import StarRating from '../components/StarRating';
import data from '../data';

function HomeScreen({ navigation, route }) {

	const [selectedPhoneColor, setSelectedPhoneColor] = React.useState(data.colors.find(color => color.name === "Red"));
  
	React.useEffect(() => {
	  if (route.params?.selectedColor) {
		const newSelectedColor = data.colors.find(color => color.name === route.params.selectedColor);
		if (newSelectedColor) {
		  setSelectedPhoneColor(newSelectedColor);
		}
	  }
	}, [route.params?.selectedColor]);
  
	return (
	  <SafeAreaView>
		<View style={Styles.container}>
  
		  <View style={[ Styles.section, { paddingHorizontal: 20 } ]}>
			<Image source={ selectedPhoneColor.src } style={Styles.phoneImage} resizeMode="contain"></Image>
		  </View>
  
		  <View style={ Styles.section }>
			<Text style={{ fontSize: 20 }}>{ data.phoneName }</Text>
		  </View>
  
		  <View style={[ Styles.section, { flexDirection: 'row', justifyContent: 'center' } ]}>
			<StarRating rating={ data.rating.star }></StarRating>
			<Text>(Xem {data.rating.quantity} đánh giá)</Text>
		  </View>
  
		  <View style={[ Styles.section, {flexDirection: 'row'} ]}>
			<Text style={{ color: 'red', fontWeight: 'bold' }}>
			  Ở đâu rẻ hơn hoàn tiền !
			</Text>
		  </View>
  
		  <View style={ Styles.section }>
			<Pressable
			  style={({ pressed }) => [
				{
				  backgroundColor: pressed ? '#eee' : 'white',
				  borderColor: '#ddd'
				},
				Styles.button,
			  ]}
			  onPress={ () => navigation.navigate({
				  name: 'ChoosingColor',
				  params: { selectedColor: selectedPhoneColor.name }
				})
			  }
			>
			  <Text style={ Styles.buttonText }>
				{data.colors.length} Màu - Chọn màu
			  </Text>
			</Pressable>
		  </View>
  
		  <View style={ Styles.section }>
			<Pressable
			  style={({ pressed }) => [
				{
				  backgroundColor: pressed ? '#4a1218' : 'red',
				  borderColor: '#ddd'
				},
				Styles.button,
			  ]}
			  onPress={() => {}}
			>
			  
			  <Text style={[ Styles.buttonText, { color: '#fff', fontWeight: 'bold' } ]}>
				Chọn mua
			  </Text>
			</Pressable>
		  </View>
  
		</View>
	  </SafeAreaView>
	);
  }

export default HomeScreen;