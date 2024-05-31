import { View, Text } from 'react-native'
import React from 'react'

const Exercicio4 = () => {

    const alunos = ['Everaldo', 'Gusmão', 'Vitor', 'Gabriel']

  return (
    <View>
      {
        alunos.map((item, index) => (
            <Text key={index}>{item}</Text>
        ))
      }
    </View>
  )
}

export default Exercicio4