import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button 
        title= "Increase"
        touchSoundDisabled 
        onPress={() => {
          setCount((pre) => pre + 3);
        }}
        color={"red"}
      />

      <Button
        title="Decrease"
        touchSoundDisabled
        onPress={() => {
          setCount((prev) => prev - 1);
        }}
        color={"green"}    
      />
      <Text style={{fontSize: 35 , color:"purple", fontWeight: "bold"}}> {count}  </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
