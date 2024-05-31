import { View, StyleSheet } from 'react-native'
import React from 'react'


const Exercicio01 = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.box, { backgroundColor: 'green' }]} />
        <View style={[styles.box, { backgroundColor: 'white' }]} />
        <View style={[styles.box, { backgroundColor: 'red' }]} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        height: 100,
        width: '100%'
    },
})

export default Exercicio01