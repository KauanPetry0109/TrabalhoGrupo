import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Animated } from 'react-native';
import { useState, useRef } from 'react';

export default function App() {
  const [challenge, setChallenge] = useState('');
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const challengesList = [
    'Dance como se ninguém estivesse olhando por 30 segundos!',
    'Faça 10 polichinelos rapidamente!',
    'Conte uma piada e ria sozinho(a)!',
    'Segure a respiração por 10 segundos!',
    'Escreva algo positivo sobre você!',
    'Imite seu animal favorito!',
    'Beba um copo d’água rapidamente!',
    'Faça uma careta engraçada!',
    'Diga o alfabeto de trás para frente!',
    'Pule no lugar 20 vezes!'
  ];

  const handleStart = () => {
    // Animação do botão
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 0.9, duration: 100, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 100, useNativeDriver: true })
    ]).start();

    // Seleciona desafio aleatório
    const randomIndex = Math.floor(Math.random() * challengesList.length);
    setChallenge(challengesList[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DesafioDiario</Text>
      <Text style={styles.subtitle}>Um novo desafio todo dia!</Text>

      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Gerar Desafio</Text>
        </TouchableOpacity>
      </Animated.View>

      {challenge !== '' && (
        <View style={styles.challengeBox}>
          <Text style={styles.challengeText}>{challenge}</Text>
        </View>
      )}

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
    fontSize: 42,
    fontWeight: 'bold',
    color: '#f5f5f5',
    marginBottom: 10,
    textShadowColor: '#6c63ff',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 20,
    color: '#d1d1d1',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6c63ff',
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  challengeBox: {
    marginTop: 40,
    backgroundColor: '#2e2e44',
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#6c63ff',
    shadowColor: '#6c63ff',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  challengeText: {
    fontSize: 18,
    color: '#f5f5f5',
    textAlign: 'center',
  },
});
