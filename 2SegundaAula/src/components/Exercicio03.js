import { StyleSheet, View } from 'react-native';

export default function Exercicio03() {
  return (
    <View style={styles.container}>
      <View style={styles.leftBox} />
      <View style={styles.middleBox} />
      <View style={styles.rightBox} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    height: 100,
  },
  leftBox: {
    width: 50,
    backgroundColor: 'purple',
  },
  middleBox: {
    flex: 1,
    backgroundColor: 'black',
  },
  rightBox: {
    width: 50,
    backgroundColor: 'blue',
  },
});