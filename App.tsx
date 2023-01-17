import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Navigator } from './src/navigator/Navigator'
import Icon from 'react-native-vector-icons/Ionicons'

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}

export default App
