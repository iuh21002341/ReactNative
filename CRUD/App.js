import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView
} from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation, route }) {
  const [inputTask, setInputTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  React.useEffect(() => {
    if (route.params?.task) {
      const { task, index } = route.params;
      const newTodoList = [...todoList];
      newTodoList[index] = task;
      setTodoList(newTodoList);
    }
  },[route.params?.task]);

  return (
    <View style={styles.container}>
      
      <View>
        <Text style={styles.title}>Welcome to Task Manager</Text>
      </View>
      
      <View style={[styles.section, { display: 'flex', flexDirection: 'row', width: '100%' }]}>
        <TextInput
          style={styles.input}
          placeholder="Add a task"
          value={inputTask}
          onChangeText={ text => setInputTask(text) }
        />
        <Pressable 
          style={styles.button}
          onPress={() => {
            setTodoList([...todoList, inputTask]);
            setInputTask('');
          }}
        >
          <Text>Add Task</Text>
        </Pressable>
      </View>

      <ScrollView style={{}}>
        {
          todoList.map((task, index) => (
            <View key={index} style={[styles.task, { display: 'flex', flexDirection: 'row' }]}>
              <Text>{task}</Text>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Pressable
                  style={styles.deleteButton}
                  onPress={() => {
                    const newTodoList = [...todoList];
                    newTodoList.splice(index, 1);
                    setTodoList(newTodoList);
                  }}
                >
                  <Text style={{ color: 'red' }}>Delete</Text>
                </Pressable>
                <Pressable
                  style={styles.editButton}
                  onPress={() => navigation.navigate({
                    name: 'Edit',
                    params: {
                      task,
                      index
                    }
                  })}
                >
                  <Text style={{ color: 'white' }}>Edit</Text>
                </Pressable>
              </View>
            </View>
          ))
        }
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

function EditScreen({ navigation, route }) {

  const { task, index } = route.params;
  const [inputTask, setInputTask] = useState(task);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Edit Task</Text>
      </View>

      <View style={[styles.section, { display: 'flex', flexDirection: 'row', width: '100%' }]}>
        <TextInput

          style={styles.input}
          placeholder="Edit a task"
          value={inputTask}
          onChangeText={ text => setInputTask(text) }
        />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate({
            name: 'Home',
            params: {
              task: inputTask,
              index: index
            }
          }) }
        >
          <Text>Edit Task</Text>
        </Pressable>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  "*": {
    boxSizing: 'border-box'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  section: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    flex: 1,
    borderColor: 'lightblue',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  button: {
    width: 'auto',
    height: 40,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  task: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: 'lightblue'
  },
  deleteButton: {
    padding: 5,
    borderRadius: 5
  },
  editButton: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    padding: 5,
  }
});
