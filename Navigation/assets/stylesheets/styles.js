import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  section: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
  },
  phoneImage: {
    width: 910,
    height: 320,
    backgroundColor: 'lightgray',
  },
  rating: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 20
  }
})