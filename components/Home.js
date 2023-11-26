import React from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function HomeScreen({ navigation }) {

  function Disciplina({title, image}){
    return(
      <View style={styles.disciplinas}>
        <View style={{width: '15%'}}>
          <Image
            source={image}
            style={{height: 50, width: 50}}
          />
        </View>
        <View style={{justifyContent:"center", alignItems: "center", width: '70%'}}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{title}</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.sectionstyle}>
          <Text style={styles.text}> Olá, vamos estudar? </Text>
        </View>

        <TouchableOpacity onPress={() => { navigation.navigate('Biologia') }}>
          <Disciplina title={'Biologia'} image={require('../img/genetica.png')}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Filosofia') }}>
          <Disciplina title={'Filosofia'} image={require('../img/genetica.png')}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Física') }}>
          <Disciplina title={'Física'} image={require('../img/fisica.png')}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Geografia') }}>
          <Disciplina title={'Geografia'} image={require('../img/genetica.png')}/>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: '#E1E1E1',
    paddingHorizontal: 20
  },
  sectionstyle: {
    marginTop: 20,
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: 'rgb(255, 255 ,255)',
    marginBottom: 15
  },

  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 4,
    fontSize: 20
  },

  Botao: {
    backgroundColor: 'rgb(255, 255 ,255)',
    width: '100%',
    height: 80,
    marginTop: 20,
    borderRadius: 5,
    padding: 5,
    textAlign: 'center',

  },
  disciplinas: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10
  }

})

