import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const allMessages: Record<string, string[]> = {
  Family: [
    'Family dinner tonight at 7 PM.',
    'Call mom after class.',
    'Do not forget the birthday party.',
  ],
  Friends: [
    'Movie night this weekend.',
    'Meet at the coffee shop.',
    'Send the group project file.',
  ],
  Work: [
    'Team meeting tomorrow at 10 AM.',
    'Submit the weekly report.',
    'Check the client email.',
  ],
  University: [
    'Mobile Programming assignment is due soon.',
    'Prepare screenshots for README.pdf.',
    'Upload the ZIP file to D2L.',
  ],
  Travel: [
    'Check flight booking details.',
    'Pack passport and documents.',
    'Hotel check-in is at 3 PM.',
  ],
};

export default function ExploreScreen() {
  const { directory } = useLocalSearchParams();
  const selectedDirectory = String(directory || 'Messages');
  const messages = allMessages[selectedDirectory] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {selectedDirectory} Directory
      </Text>

      {messages.map((message, index) => (
        <View key={index} style={styles.messageBox}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  messageBox: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
  },
});