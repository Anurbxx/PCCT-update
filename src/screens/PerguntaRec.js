import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput,  Image, ScrollView, Dimensions, Alert} from "react-native";
import { checkAnswer } from "../api/CheckResponseRecovery";
import { getQuestionRecovery } from "../api/GetQuestionRecovery";

export default function PerguntaRec({navigation, route}){

  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  
  useEffect(() => {
    const onfocusscreen = navigation.addListener('focus', () => {
        const nomeUsuario = route.params?.user;
      getQuestionRecovery(nomeUsuario, setPergunta);
    });
    onfocusscreen;
  }, [navigation]);

  function handleAnswer(){
    const nomeUsuario = route.params?.user;
    checkAnswer(nomeUsuario, resposta, navigation)
  }
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
                <Text style={styles.textNameApp}>Pergunta</Text>
            </View>
          </View>

          <View style={styles.fundotransparente}>

            <Text style={styles.textsenha}>{pergunta}</Text>
            <TextInput
              placeholder="Ex: usuario123"
              style={styles.input}
              value={resposta}
              onChangeText={setResposta}
            />

            <TouchableOpacity onPress={()=>{}}>
              <Text style={styles.follow}>Esqueci a resposta</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
              handleAnswer()
            }}>
              <View style={{alignItems: 'center' , marginTop:30}}>
                <Text>Verificar</Text>
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
        backgroundColor: 'black'
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
        color: '#FFF',
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
        padding:7,
        paddingLeft:14
      },
      follow: {
        textAlign: 'right',
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        paddingTop: 5
      },
})