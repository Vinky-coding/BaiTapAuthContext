import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { AuthContext } from './AuthContext';

const AccountScreen = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <Image 
        source={{ uri: 'data:image/jpeg;base64,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' }} // Replace with actual image
        style={styles.profileImage} 
      />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.role}>{user.role}</Text>
      <Text  style={styles.description}> I have above 5 years of experience in native mobile apps developer now I'm learning React Native</Text>
      <TouchableOpacity onPress={logout} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 1 },
  header: { width: '100%', height: 150, backgroundColor: 'skyblue' },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#fff',
    marginTop: 1,
    position: 'absolute', 
    top: 110, 
    alignSelf: 'center', 
  },
  name: { fontSize: 22, paddingTop: 150 ,fontWeight: 'bold', marginTop: 1 },
  role: { fontSize: 16,
    color: '#00AEEF',
    marginBottom: 10, },
  description: {
      textAlign: 'center',
      color: 'gray',
      marginHorizontal: 30,
      marginBottom: 20,
    },
  button: { backgroundColor: 'orange', padding: 15, marginTop: 20, borderRadius: 5 },
  buttonText: { color: 'white', fontWeight: 'bold' },
});

export default AccountScreen;
