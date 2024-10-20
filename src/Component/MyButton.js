import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function MyButton({title}) {
  return (
    <View style={{}}>
     <TouchableOpacity onPress={()=>(console.log("hey"))} style={{width:100,height:100,backgroundColor:"red",borderWidth:1}}>
         <Text>{title}</Text>
     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})