import React from 'react';
import { ScrollView, View, SafeAreaView, Text, Image } from 'react-native';
import styles from '../assets/styles';
import { Pressable } from 'react-native';
import { TextInput } from 'react-native';

function HomeScreen() {

	const [foods, setFoods] = React.useState([]);

	const [displayedFoods, setDisplayedFoods] = React.useState([]);

	React.useEffect(() => {
		const URL = 'https://6705ec84031fd46a831160c0.mockapi.io/foods'

		const foods = async () => {
			const response = await fetch(URL);
			const data = await response.json();
			return data;
		};

		foods().then((data) => {
			setFoods(data);
			setDisplayedFoods(data);
		});

	}, []);

	const [selectedTab, setSelectedTab] = React.useState(0);

	const tabs = [
		{
			id: 1,
			title: 'Donut',
			type: 'type 1',
		},
		{
			id: 2,
			title: 'Pizza',
			type: 'type 2',
		},
		{
			id: 3,
			title: 'Burger',
			type: 'type 3',
		},
		{
			id: 4,
			title: 'Salad',
			type: 'type 4',
		},
		{
			id: 5,
			title: 'Drink',
			type: 'type 5',
		},
	];

	React.useEffect(() => {
		if (selectedTab === 0) {
			setDisplayedFoods(foods);
		} else {
			const filteredFoods = foods.filter((food) => food.type === tabs[selectedTab - 1].type);
			setDisplayedFoods(filteredFoods);
		}
	}, [selectedTab]);

	const [searchText, setSearchText] = React.useState('');

	const search = (text) => {
		setSearchText(text);
		const filteredFoods = foods.filter((food) => food.name.toLowerCase().includes(text.toLowerCase()));
		setDisplayedFoods(filteredFoods);
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.navbar}>
				<Text style={styles.welcomeText}>Welcome, Jula!</Text>
				<Text style={styles.solganText}>Choice your Best food</Text>
				<View style={styles.searchBar}>
					<TextInput style={styles.searchInput} placeholder="Find something here..."
						onChangeText={text => {
							setSearchText(text);
							search(text.trim());
						}}
					/>
					<Pressable
						onPress={() => {
							search(searchText);
						}}
					>
						<Text>Search</Text>
					</Pressable>
				</View>
				<ScrollView horizontal>

					<Pressable style={[styles.tabs,
							selectedTab === 0 ? styles.tabsActive : null
						]}
						onPress={() => {
							setSelectedTab(0);
						}}
					>
						<Text>All</Text>
					</Pressable>

					{tabs.map((tab) => (
						<Pressable style={[styles.tabs,
							selectedTab === tab.id ? styles.tabsActive : null	
							]} 
							key={tab.id}
							onPress={() => {
								setSelectedTab(tab.id);
							}}
						>
							<Text>{tab.title}</Text>
						</Pressable>
					))}
				</ScrollView>
			</View>
			<ScrollView style={styles.foodsList}>
				<View style={styles.foodContainer}>
					{displayedFoods.map((food) => (
						<View key={food.id} style={styles.foodItem}>
							<Image source={{ uri: food.image }} style={{ width: 150, height: 150 }} />
							<View style={styles.foodInfo}>
								<Text style={styles.foodName}>{food.name}</Text>
								<Text style={styles.foodDescription}>{food.price}</Text>
							</View>
							<Pressable style={styles.foodButton}>
								<Text>Order</Text>
							</Pressable>
						</View>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);

}

export default HomeScreen;