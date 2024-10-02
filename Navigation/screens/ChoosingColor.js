import * as React from 'react';
import { Text, View, Image, Pressable, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import Styles from '../assets/stylesheets/styles';
import data from '../data';

function ChoosingColorScreen({ navigation, route }) {

	if (route.params?.selectedColor === undefined) {
		route.params = { ...route.params, selectedColor: "Red" };
	}

	const selectedPhoneColor = data.colors.find(color => color.name === route.params.selectedColor)

	const [color, setColor] = React.useState('');

	const [imageSrc, setImageSrc] = React.useState('');

	React.useEffect(() => {
		if (selectedPhoneColor) {
			setColor(selectedPhoneColor.name);
			setImageSrc(selectedPhoneColor.src);
		}
	}, [selectedPhoneColor]);

	const handleColorChange = (newColor) => {
		setColor(newColor.name);
		setImageSrc(newColor.src);
		route.params.selectedColor = newColor.name;
	};

	return (
		<SafeAreaView>
			<View style={Styles.container}>

				<View style={[Styles.section, {
					justifyContent: 'flex-start',
					flexDirection: 'row'
				}]}>
					<Image
						source={imageSrc}
						style={[Styles.phoneImage, {
							width: 90,
							height: 120
						}]}
						resizeMode="contain"
					></Image>
					<View style={{
						display: 'flex',
						alignSelf: 'stretch',
						justifyContent: 'space-between',
						flexShrink: 1,
						paddingLeft: 10
					}}>
						<Text>{data.phoneName}</Text>
						<Text>
							Màu: {color}
						</Text>
						<Text>
							Cung cấp bởi: {data.provider}
						</Text>
						<Text style={{ fontWeight: 'bold' }}>{data.price}</Text>
					</View>
				</View>

				<View style={Styles.section}>
					<Text style={{ marginBottom: 10 }}>Chọn màu khác:</Text>
					<FlatList
						data={data.colors}
						horizontal
						keyExtractor={item => item.name}
						renderItem={({ item }) => (
							<TouchableOpacity
								style={{
									padding: 10,
									borderWidth: item.name === color ? 2 : 1,
									borderColor: item.name === color ? 'blue' : 'gray',
									marginRight: 10
								}}
								onPress={() => handleColorChange(item)}
							>
								<View style={{ backgroundColor: item.colorCode, width: 40, height: 40, borderRadius: 20 }} />
								<Text style={{ textAlign: 'center' }}>{item.name}</Text>
							</TouchableOpacity>
						)}
					/>
				</View>

				<View style={Styles.section}>
					<Pressable
						style={({ pressed }) => [
							{
								backgroundColor: pressed ? '#b20000' : 'red',
								borderColor: '#b20000'
							},
							Styles.button,
						]}
						onPress={() => navigation.navigate({
							name: 'Home',
							params: { selectedColor: color },
							merge: true
						})
						}
					>
						<Text style={[Styles.buttonText, { color: '#fff' }]}>
							Hoàn tất
						</Text>
					</Pressable>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default ChoosingColorScreen;