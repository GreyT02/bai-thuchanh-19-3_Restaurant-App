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
import { Ionicons } from '@expo/vector-icons';

export default function SignInScreen({ navigation }) {
  const { signIn } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin');
      return;
    }
    signIn(email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Text style={styles.title}>Đăng Nhập</Text>
        <Text style={styles.subTitle}>Chào mừng bạn quay trở lại!</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập email của bạn"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Mật khẩu</Text>
        <View style={styles.passwordWrap}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Nhập mật khẩu"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Ionicons name="eye-outline" size={20} color="#999" />
        </View>

        <Text style={styles.errorText}>Vui lòng điền đầy đủ thông tin</Text>

        <TouchableOpacity>
          <Text style={styles.forgotText}>Quên mật khẩu?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Đăng Nhập</Text>
        </TouchableOpacity>

        <View style={styles.signUpRow}>
          <Text style={styles.normalText}>Chưa có tài khoản? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkText}>Đăng ký ngay</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orRow}>
          <View style={styles.line} />
          <Text style={styles.orText}>hoặc</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Facebook</Text>
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
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
  },
  form: {
    paddingHorizontal: 28,
    paddingTop: 24,
  },
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
  passwordWrap: {
    backgroundColor: '#EAEAEA',
    borderRadius: 14,
    height: 54,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginTop: 16,
    fontSize: 13,
  },
  forgotText: {
    color: '#4B39EF',
    textAlign: 'right',
    marginTop: 12,
    fontSize: 15,
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#4B39EF',
    height: 58,
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  signUpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 28,
  },
  normalText: {
    fontSize: 15,
    color: '#666',
  },
  linkText: {
    fontSize: 15,
    color: '#4B39EF',
    fontWeight: '700',
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#CCC',
  },
  orText: {
    marginHorizontal: 14,
    color: '#777',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    width: '47%',
    height: 58,
    backgroundColor: '#EAEAEA',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
});