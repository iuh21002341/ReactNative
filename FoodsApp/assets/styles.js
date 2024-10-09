import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
    position: 'relative',
    padding: 20,
    marginTop: 30
	},
  navbar: {
    backgroundColor: '#fff',
    width: '100%',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#aaa',
    marginBottom: 10,
  },
  solganText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  searchInput: {
    width: '80%',
  },
  tabs: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  tabsActive: {
    backgroundColor: '#f1b000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  foodsList: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  foodContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  foodItem: {
    width: '100%',
    backgroundColor: '#fffcf3',
    borderColor: '#ffedbd',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  foodInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50%',
    backgroundColor: '#ddd',
    marginStart: 10,
  },
  foodName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  foodDescription: {
    fontSize: 14,
    color: '#aaa',
  },
  
});