import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const handleStart = () => {
    Alert.alert('Bem-vindo!', 'Você clicou no botão Começar!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DesafioDiario</Text>
      <Text style={styles.subtitle}>Um novo desafio todo dia!</Text>

      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#f5f5f5',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#d1d1d1',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6c63ff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
