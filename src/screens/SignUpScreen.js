import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { AppContext } from '../context/AppContext';

export default function SignUpScreen({ navigation }) {
  const { signUp } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin');
      return;
    }
    signUp(name, email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Text style={styles.title}>Đăng Ký</Text>
        <Text style={styles.subTitle}>Tạo tài khoản mới</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Họ và tên</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập họ và tên"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập email"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Mật khẩu</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerText}>Đăng Ký</Text>
        </TouchableOpacity>

        <View style={styles.signInRow}>
          <Text style={styles.normalText}>Đã có tài khoản? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.linkText}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F3F3' },
  topBox: {
    backgroundColor: '#F3F4C8',
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    paddingTop: 70,
    paddingBottom: 40,
    alignItems: 'center',
  },
  title: { fontSize: 28, fontWeight: '700', color: '#222', marginBottom: 10 },
  subTitle: { fontSize: 14, color: '#666' },
  form: { paddingHorizontal: 28, paddingTop: 24 },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#EAEAEA',
    borderRadius: 14,
    height: 54,
    paddingHorizontal: 18,
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#4B39EF',
    height: 58,
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  registerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  signInRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  normalText: { fontSize: 15, color: '#666' },
  linkText: { fontSize: 15, color: '#4B39EF', fontWeight: '700' },
});