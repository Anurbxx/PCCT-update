import React,{ useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput,  Image, ScrollView, Dimensions, Alert} from "react-native";

import { checkUsernameRegistry } from '../api/CheckUser';

export default function EsqueceuSenha({navigation}){

  const [nomeUsuario, setNomeUsuario] = useState('')

  return(
  <View style={styles.container}>     
    <ScrollView>
      <View style={styles.contentContainer}>

        <View style={styles.containerLogoText}>
          <View style={styles.containerImage}>
            <Image
              source={require('../img/logo1.png')}
              style={{height:180, width:180}}
            />
          </View>
          <View>
              <Text style={styles.textNameApp}>Recuperação</Text>
          </View>
        </View>

        <View style={styles.fundotransparente}>

          <Text style={styles.textsenha}>Insira o nome de usuário</Text>
          <TextInput
            placeholder="Usuario123"
            style={styles.input}
            value={nomeUsuario}
            onChangeText={setNomeUsuario}
          />

       
          <TouchableOpacity 
            style={styles.botao}
            onPress={()=>{checkUsernameRegistry(nomeUsuario, navigation)}}
            >
            <Text style={styles.follow}>Enviar</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{alignItems: 'center' , marginTop:30}}>
              
            </View>
          </TouchableOpacity>

        </View>

      </View>
    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  linearGradient:{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    container:{
      flex: 1,
      backgroundColor: '#24132C'
    },
    contentContainer:{
      alignItems: "center", 
      justifyContent: "space-evenly", 
      height: Dimensions.get("window").height
    },
    containerImage:{
      height: 200
    },
    containerTouchables:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    textNameApp:{
      color: 'white',
      fontSize: 30,
      textAlign:'center',
      fontWeight: 'bold'
    },
    fundotransparente:{
      height: 300,
      width:350,
      padding:20,
      borderRadius:8,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    textsenha:{
      color:'white',
      padding:9

    },
    input:{
      backgroundColor:'#FFF',
      borderRadius:50,
      padding:7,
      paddingLeft:14
    },
    follow: {
      textAlign: 'center',
      fontSize: 14,
      color: 'black',
      fontWeight: 'bold',
      borderRadius:50,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      paddingVertical: 10,
      width: 150,
    },
    botao:{
      justifyContent: 'center',
      width: '100%',
      alignItems: 'center',
      height: 170,
    }
})