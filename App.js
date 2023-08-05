import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import MyButton from './src/components/Button';
import Contadores from './src/components/Contadores';
import ButtonVisibleOcult from './src/components/ButtonVisibleOcult';
import Card from './src/components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ButtonVisibleOcult />
      <Contadores />
      <Card
        title="Título do Card"
        content="Este é o conteúdo do Card"
        
      />
    </View>
  );
}

const styles = Styl eSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1abc3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ad3280'
  }
});
