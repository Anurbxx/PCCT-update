import React from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, TextInput } from "react-native";

import { AntDesign } from '@expo/vector-icons';


export default function HomeScreen({ navigation }) {

  function Disciplina({ title, image }) {
    return (
      <View style={styles.disciplinas}>
        <View style={{ width: '15%' }}>
          <Image
            source={image}
            style={{ height: 50, width: 50 }}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", width: '70%' }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{title}</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>

          <View style={{alignItems:'center', height: 100, justifyContent: 'center', }}>
            <View style={styles.pesquisa}>
              <TextInput placeholder="Pesquisar" style={styles.campo} />
              <AntDesign name="search1" size={24} color="black" style={styles.icone} />
            </View>
          </View>

          <View style={styles.sectionstyle}>
            <Text style={styles.text}> Olá, vamos estudar? </Text>
          </View>

          <TouchableOpacity onPress={() => { navigation.navigate('RouteBiologia') }}>
            <Disciplina title={'Biologia'} image={require('../img/genetica.png')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('RouteFilosofia') }}>
            <Disciplina title={'Filosofia'} image={require('../img/filosofia.png')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('RouteFisica') }}>
            <Disciplina title={'Física'} image={require('../img/fisica.png')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('RouteGeografia') }}>
            <Disciplina title={'Geografia'} image={require('../img/geografia.png')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('RouteHistoria') }}>
            <Disciplina title={'História'} image={require('../img/historia.png')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('RouteLiteratura') }}>
            <Disciplina title={'Literatura'} image={require('../img/literatura.png')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('RouteMatematica') }}>
            <Disciplina title={'Matemática'} image={require('../img/matematica.png')} />
          </TouchableOpacity>


          <TouchableOpacity onPress={() => { navigation.navigate('RoutePortugues') }}>
            <Disciplina title={'Português'} image={require('../img/portugues.png')} />
          </TouchableOpacity>


          <TouchableOpacity onPress={() => { navigation.navigate('RouteQuimica') }}>
            <Disciplina title={'Química'} image={require('../img/quimica.png')} />
          </TouchableOpacity>
        </View>
      </ScrollView>


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
  },

  pesquisa: {
    height: 35,
    backgroundColor: '#fff',
    borderColor: '#24132C',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',


  },

  campo: {
    marginLeft: 11,
    width: '85%'
  },

  icone: {
    marginRight: 11
  }

})

