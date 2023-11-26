import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput,  Image, ScrollView, Dimensions} from "react-native";



export default function NovaSenha({navigation, route}){



  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [loadingRequest, setLoadingRequest] = useState(false);
  

  return(
    <View style={styles.container}>     
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.containerLogoText}>
            <View style={styles.containerImage}>
              <Image
                source={require('../../img/logo1.png')}
                style={{height:180, width:180}}
              />
            </View>
            <View>
                <Text style={styles.textNameApp}>Nova Senha</Text>
                <Text style={styles.textWelcome}>Recuperar Conta</Text>
            </View>
          </View>

          <View style={styles.fundotransparente}>
            <Text style={styles.textsenha}>Senha</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              value={senha}
              onChangeText={setSenha}
            />
            <Text style={styles.textsenha}>Confirmar senha</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              value={confSenha}
              onChangeText={setConfSenha}
            />
            <TouchableOpacity>
              <View style={{alignItems: 'center' , marginTop:40}}>
              <Button text="Recuperar Conta" loadingfeedback={loadingRequest}/>
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
        backgroundColor:'#24132C'
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
      textWelcome:{
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
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
        backgroundColor:'white',
        borderRadius:50,
        padding:4,
        paddingLeft:14
      }
})