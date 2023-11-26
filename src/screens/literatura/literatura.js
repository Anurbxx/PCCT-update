import React from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, TextInput } from "react-native";

import { AntDesign } from '@expo/vector-icons';


export default function Biologia({ navigation }) {

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
    <View style={{ flex: 1, backgroundColor: '#E1E1E1'}}>
      <ScrollView>
        <View style={styles.container}>

          <View style={{height: 130, marginTop: 20}}>
            <Disciplina title={'Literatura'} image={require('../../../img/literatura.png')} />
          </View>
            <TouchableOpacity onPress={() => { navigation.navigate('Conteudos') }}>
              <Disciplina title={'Conteúdo'} image={require('../../../img/conteudos.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('Questoes') }}>
              <Disciplina title={'Questões'} image={require('../../../img/questoes.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('Videoaula') }}>
              <Disciplina title={'Videoaula'} image={require('../../../img/video.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('Salvos') }}>
              <Disciplina title={'Salvos'} image={require('../../../img/coracao.png')} />
            </TouchableOpacity>
          </View>

      </ScrollView>


    </View>
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

