import { View, Text } from 'react-native'
import React from 'react'
import MyButtın from './src/Component/MyButtın'

export default function App() {
  return (
    <View>
      <View>
      <MyButtın title={"merhaba"}/>
      </View>
      <View>
      <MyButtın title={"yusuf"}/>
      </View>
    </View>
  )
}