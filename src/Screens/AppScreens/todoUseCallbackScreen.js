import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState,useCallback } from 'react'
import Todo from '../../Components/ModuleComponents/todo';


const TodoUseCallbackScreen = () => {

  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([]);


  const increment = () => {
    setCount((count) => count + 1)
  }

  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // }

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);


  return (
    <SafeAreaView style={styles.mainContainer}>

      {todos.map((item, index) => {
        return <Todo key={index} />
      })}

      <TouchableOpacity
        style={{ width: 100, height: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}
        onPress={addTodo} >
        <Text>Add Todo</Text>
      </TouchableOpacity>

      <View style={{ width: '100%', height: 50, backgroundColor: 'pink', flexDirection: 'row' }}>
        <Text>{count}</Text>
        <TouchableOpacity
          style={{ width: 100, height: 50, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}
          onPress={increment} >
          <Text>Add</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default TodoUseCallbackScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
})