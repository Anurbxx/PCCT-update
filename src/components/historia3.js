import React from "react";
import { Text, View, StyleSheet} from "react-native";

export default function historia(){
  return(
    <View style={styles.container}>

    <View style={styles.estilo}>
    <Text style={styles.estilo}>Quando a Filosofia surgiu, no século VI a.C., com Tales de Mileto, a preocupação dos filósofos era a de conhecer a origem do mundo, das coisas, dos homens. Eles buscavam a arché (princípio, em grego). </Text> </View>

    <View style={styles.estilo}>
    <Text style={styles.estilo}>Com o surgimento de Sócrates, a preocupação fixou-se na verdade sobre as coisas: o que elas realmente são. </Text> </View>

    <View style={styles.estilo}>
    <Text style={styles.estilo}>Os filósofos socráticos, como Platão e Aristóteles, mantiveram essa busca sobre a realidade dos seres. Indo das aparências para a intimidade das coisas, eles fizeram metafísica.</Text> </View>

    <View style={styles.estilo}>
    <Text style={styles.estilo}>Contudo, após Aristóteles, essa preocupação deixou de ser o centro das investigações e do pensamento. E foi neste momento que surgiu a filosofia conhecida como helenística. 
    </Text> </View>

    <View style={styles.estilo}>
    <Text style={styles.estilo}>A Filosofia helenística é o ramo filosófico que ganhou projeção após a conquista do território grego realizada pelos macedônios. O interesse dos filósofos que compuseram as diversas escolas do helenismo era voltado para a vida feliz e seus tratados são basicamente sobre ética. </Text> </View>

    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEDCC5',
    height:'100%'
    
    
    
  },
  estilo:{
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft:5
  },
})
