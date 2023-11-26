import React from 'react'
import{View,Text,TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native'

export default function Login({navigation}){
  return (
    <View>
      <View style={styles.containerimage}>
        <Image source={require('../../img/logo1.png')} style={styles.logo}></Image>
      </View>

      <View style={styles.containerlogin}> 
        <View style={styles.containerfundo}> 
          <View  style={styles.containerform}> 

            <Text  style={styles.textoLogin}> Login </Text>

            <View style={styles.containerlt}>
              <Text style={styles.txtinput}> NOME </Text>
              <TextInput 
                style={styles.textinput}
                placeholder="Digite seu nome"
                placeholderTextColor="#666"
              />
            </View>
            <View style={styles.containerlt}>
              <Text  style={styles.txtinput}> SENHA</Text>
              <TextInput 
                style={styles.textinput}
                placeholder="Digite sua senha"
                placeholderTextColor="#666"
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Conecte-se</Text>
            </TouchableOpacity>
            <View style={styles.containerforget}>
              <TouchableOpacity
                onPress={(()=>{console.log('Apertou na tela de esqueceu');navigation.navigate("EsqueceuSenha")})}
              >
                <Text style={styles.forgetpass}>Esqueceu a senha?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={(()=>{navigation.navigate("Inscreva-se")})}
              >
                <Text style={styles.forgetpass}>Inscreva-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
  botao: {
    backgroundColor: '#24132C',
    borderRadius: 6,
    padding:10,
    textAlign: 'center',
  },

  containerimage:{
    width: '100%',
    height: 270,
    backgroundColor:'#24142E',
    alignItems: 'center',
    justifyContent:'center',
  },

  logo:{
    width:150,
    height: 140,
  },

  containerlogin:{
    height: 600,
      backgroundColor:'#24142E',
  },

  containerfundo:{
  backgroundColor:'#fff',
  height: '100%',
  borderTopRightRadius: 40,
  alignItems: 'center',
  
  },

  textoLogin:{
    fontSize:40,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 30,
    marginTop:10,
  },

  txtinput:{
    color:'#A6A6A6',
    letterSpacing: 1,
    fontSize: 11,
    marginBottom: 5
  },

  textinput:{
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 10,
  },

  containerform:{
    width:250,

  },
  containerlt:{
    marginBottom: 15
  },
  forgetpass:{
    textAlign: 'center',
    color: '#A6A6A6'
  },
  containerforget:{
    height:140,
    justifyContent: 'center',
    gap: 7
  }

});