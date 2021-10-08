import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Kakaotalk: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 314,
    height: 48,
    left: (Dimensions.get('window').width - 314) / 2, //22
    top: 450,
    backgroundColor: '#FFE600',
    borderRadius: 5,
  },
  Naver: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 314,
    height: 48,
    left: (Dimensions.get('window').width - 314) / 2, //22
    top: 506,
    backgroundColor: '#20E41C',
    borderRadius: 5,
  },
  Google: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 314,
    height: 48,
    left: (Dimensions.get('window').width - 314) / 2, //22
    top: 562,
    backgroundColor: '#FF5E5E',
    borderRadius: 5,
  },
  EtcEmail: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 314,
    height: 48,
    left: (Dimensions.get('window').width - 314) / 2, //22
    top: 618,
    backgroundColor: '#F3F3F3',
    borderRadius: 5,
  },
  ButtonText: {
    textAlign: 'center',
    fontFamily: 'NotoSansKR-Bold',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default () => {
  const navigation = useNavigation();
  const onPress = () => navigation.navigate('SignupDetail');
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Kakaotalk} onPress={() => true}>
        <Text style={styles.ButtonText}>카카오톡</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Naver} onPress={() => true}>
        <Text style={styles.ButtonText}>네이버 아이디연동</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Google} onPress={() => true}>
        <Text style={styles.ButtonText}>구글</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.EtcEmail} onPress={onPress}>
        <Text style={styles.ButtonText}>기타 아이디 회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};
