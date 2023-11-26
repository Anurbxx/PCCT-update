import React from "react";
import { Text, View, StyleSheet} from "react-native";

export default function historia(){
  return(
    <View style={styles.container}>

    <View style={styles.estilo}>
    <Text style={styles.estilo}>Você sabe onde a Filosofia nasceu? Bem, de modo corrente, dizemos que ela surgiu na Grécia, no século VI a.C., com os pensadores conhecidos como pré-socráticos. O pensador apontado como fundador desta ciência foi Tales de Mileto. </Text> </View>

    <View style={styles.estilo}>
    <Text style={styles.estilo}> O interesse desses indivíduos era responder a certas questões sobre a origem das coisas, mas sem recorrer às histórias mitológicas. Estas últimas eram a forma comum de explicar como o mundo, os deuses, as pessoas e as coisas surgiram. </Text> </View>

    <View style={styles.estilo}>
    <Text style={styles.estilo}>Até mesmo as árvores genealógicas e a fundação das cidades eram explicadas por meio de histórias. Mas, segundo o historiador Arnaldo Momigliano, essa forma de conhecimento passou a receber críticas de estudiosos, ao ponto de serem chamadas de ridículas por Hecateu, um historiador da cidade de Mileto. </Text> </View>

    <View style={styles.estilo}>
    <Text style={styles.estilo}>Os mitos não deixaram de ser cridos, mas eles passaram por processos de purificação. Ou seja, foram julgados por filósofos e historiadores a partir da realidade em que eles viviam.
    </Text> </View>

    <View style={styles.estilo}>
    <Text style={styles.estilo}>Aquilo que não existia no presente dos estudiosos era apontado como fabulações. Elas deveriam ser retiradas das histórias a fim de se obter a verdade que elas traziam. </Text> </View>

    <View style={styles.estilo}>
    <Text style={styles.estilo}>Os pré-socráticos se inserem neste momento. Eles buscaram indicar o princípio das coisas (em grego, arché), de modo racionalizado a partir das observações que faziam da natureza. Tales de Mileto afirmou que o princípio era a água, pois este era um elemento comum a todos os seres.</Text> </View>

    <View style={styles.estilo}>
    <Text style={styles.estilo}>Outros autores apontaram como princípio variados elementos, como o fogo e o ar. Contudo, a forma de fazer Filosofia teve uma reviravolta com o surgimento de Sócrates. Ele manteve no centro das suas preocupações a pessoa humana, em vez dos demais seres. </Text> </View>


    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEDCC5',
    height:'165%'
    
    
    
  },
  estilo:{
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft:5
  },
})
