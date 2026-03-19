import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, Switch, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function ProfileScreen() {
  const { user, signOut } = useContext(AppContext);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.banner} />
      <Image source={require('../assets/avatar.jpg')} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <View style={styles.menu}>
        {['Home', 'My Card', 'Dark Mood', 'Truck Your Order', 'Settings', 'Help Center'].map((item, idx) => (
          <View key={idx} style={styles.menuItem}>
            <Text style={styles.menuText}>{item}</Text>
            {item === 'Dark Mood' ? (
              <Switch value={darkMode} onValueChange={setDarkMode} />
            ) : (
              <Text style={styles.arrow}>{'>'}</Text>
            )}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={signOut}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', padding: 16 },
  banner: {
    height: 150,
    width: '100%',
    backgroundColor: '#F7F6DE',
    borderRadius: 12,
    marginBottom: -60,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 12,
  },
  name: { fontSize: 22, fontWeight: '700', marginBottom: 4 },
  email: { fontSize: 16, color: '#999', marginBottom: 16 },
  menu: { width: '100%' },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: { fontSize: 16 },
  arrow: { fontSize: 18, color: '#888' },
  logoutBtn: {
    backgroundColor: '#4B39EF',
    width: '100%',
    padding: 14,
    borderRadius: 12,
    marginTop: 20,
  },
  logoutText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
});