import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const directories = ['Family', 'Friends', 'Work', 'University', 'Travel'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Message Directory</Text>

      {directories.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => router.push(`/explore?directory=${item}`)}
        >
          <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  button: { backgroundColor: '#4A90E2', padding: 15, borderRadius: 10, marginBottom: 15 },
  buttonText: { color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold' },
});