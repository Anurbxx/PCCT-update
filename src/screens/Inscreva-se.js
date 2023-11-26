import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

export default function Inscreva_se({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.containerimage}>
        <Image source={require('../../img/logo1.png')} style={styles.logo}></Image>
      </View>

      <View style={styles.containerlogin}>
        <View style={styles.containerfundo}>
          <View style={styles.containerform}>
            <Text style={styles.textoLogin}> Inscreva-se </Text>

            <View style={styles.containerlt}>
              <Text style={styles.txtinput}> NOME </Text>
              <TextInput
                style={styles.textinput}
                placeholder="Digite seu nome"
                placeholderTextColor="#666"
              />
            </View>
            <View style={styles.containerlt}>
              <Text style={styles.txtinput}> NOME DE USUÁRIO</Text>
              <TextInput
                style={styles.textinput}
                placeholder="Digite o nome de usuário"
                placeholderTextColor="#666"
              />
            </View>
            <View style={styles.containerlt}>
              <Text style={styles.txtinput}> SENHA</Text>
              <TextInput
                style={styles.textinput}
                placeholder="Digite o nome de usuário"
                placeholderTextColor="#666"
              />
            </View>

            <View style={styles.containerlt}>
              <Text style={styles.txtinput}>CONFIRMAR SENHA</Text>
              <TextInput
                style={styles.textinput}
                placeholder="Digite o nome de usuário"
                placeholderTextColor="#666"
              />
            </View>

            <View style={styles.containerlt}>
              <Text style={styles.txtinput}>PERGUNTA DE RECUPERAÇÃO</Text>
              <TouchableOpacity onPress={() => { navigation.navigate('TelaPerg') }}>
                <View style={styles.textinput}>
                  <Text style={{ color: '#666' }}>Selecione aqui</Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', }}>
                Inscreva-se
              </Text>
            </TouchableOpacity>
            <View style={styles.containerforget}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home')
                  console.log('Apertou na tela de esqueceu');
                }}>
                <Text style={styles.forgetpass}>Continuar sem conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#24132C',
    borderRadius: 6,
    padding: 10,
    marginTop: 15,
  },

  containerimage: {
    width: '100%',
    height: 180,
    backgroundColor: '#24142E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 150,
    height: 140,
  },

  containerlogin: {
    height: 600,
    backgroundColor: '#24142E',
  },

  containerfundo: {
    backgroundColor: '#fff',
    height: '100%',
    borderTopRightRadius: 40,
    alignItems: 'center',
  },

  textoLogin: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    marginTop: 10,
  },

  txtinput: {
    color: '#A6A6A6',
    letterSpacing: 1,
    fontSize: 11,
    marginBottom: 5,
  },

  textinput: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 10,
  },

  containerform: {
    width: 250,
  },
  containerlt: {
    marginBottom: 15,
  },
  forgetpass: {
    textAlign: 'center',
    color: '#A6A6A6',
  },
  containerforget: {
    height: 50,
    justifyContent: 'center',
    gap: 7,
  },
});
