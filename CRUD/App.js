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
  ScrollView,
  Alert,
  ActivityIndicator
} from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation, route }) {

  const [inputTask, setInputTask] = useState('');

  const [todoList, setTodoList] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    setLoading(true);
    const response = await fetch('https://6705ec84031fd46a831160c0.mockapi.io/todos');
    const data = await response.json();
    const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setTodoList(sortedData);
    setLoading(false);
  };

  const createTask = async (newTask) => {
    setLoading(true);
    const response = await fetch('https://6705ec84031fd46a831160c0.mockapi.io/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    });

    fetchTodos();
    setLoading(false);
  }

  const deleteTask = async (id) => {
    setLoading(true);
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            await fetch(`https://6705ec84031fd46a831160c0.mockapi.io/todos/${id}`, {
              method: 'DELETE',
            });
            fetchTodos(); // Refresh the list after deletion
          }
        }
      ]
    );
    setLoading(false);
  };

  React.useEffect(() => {
    fetchTodos();
  }, []);

  React.useEffect(() => {
    if (route.params?.updated) {
      fetchTodos();
    }
  }, [route.params?.updated]);

  return (
    <View style={styles.container}>

      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="lightblue" />
        </View>
      )}

      <View>
        <Text style={styles.title}>Welcome to Task Manager</Text>
      </View>

      <View style={[styles.section, { display: 'flex', flexDirection: 'row', width: '100%' }]}>
        <TextInput
          style={styles.input}
          placeholder="Add a task"
          value={inputTask}
          onChangeText={text => setInputTask(text)}
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            const newTask = {
              title: inputTask,
              createdAt: new Date().toISOString()
            }

            createTask(newTask);

            setInputTask('');
          }}
        >
          <Text>Add Task</Text>
        </Pressable>
      </View>

      <ScrollView style={{}}>
        {
          todoList.map((task) => (
            <View key={task.id} style={[styles.task, { display: 'flex', flexDirection: 'row' }]}>
              <Text style={{ width: '80%' }}>{task.title}</Text>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Pressable
                  style={styles.deleteButton}
                  onPress={() => {
                    deleteTask(task.id);

                    fetchTodos();
                  }}
                >
                  <Text style={{ color: 'red' }}>Delete</Text>
                </Pressable>
                <Pressable
                  style={styles.editButton}
                  onPress={() => navigation.navigate({
                    name: 'Edit',
                    params: {
                      task: task,
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

  const task = route.params.task;
  const [inputTask, setInputTask] = useState(task.title);

  const editTask = async (id, newTask) => {
    await fetch(`https://6705ec84031fd46a831160c0.mockapi.io/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    });
  }

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
          onChangeText={text => setInputTask(text)}
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            const newTask = {
              title: inputTask,
              createdAt: new Date().toISOString()
            }

            editTask(task.id, newTask);

            navigation.navigate({
              name: 'Home',
              params: {
                updated: new Date().toISOString()
              }
            });
          }}
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
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
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
