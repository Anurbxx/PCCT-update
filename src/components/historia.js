import React from "react";
import { Text, View, StyleSheet} from "react-native";

export default function historia(){
  return(
    <View style={styles.container}>

    <View style={styles.estilo}>
    <Text style={styles.estilo}> Os filósofos pré-socráticos fazem parte do primeiro período da filosofia grega. Eles desenvolveram suas teorias do século VII ao V a.C., e recebem esse nome, pois são os filósofos que antecederam Sócrates. </Text> </View>

<View style={styles.estilo}>
<Text style={styles.estilo}> Esses pensadores buscavam nos elementos natureza as respostas sobre a origem do ser e do mundo. Focando principalmente nos aspectos da natureza, eram chamados de “filósofos da physis” ou "filósofos da natureza". </Text> </View>

<View style={styles.estilo}>
<Text style={styles.estilo}>Foram eles os responsáveis pela transição da consciência mítica para a consciência filosófica. Assim, buscaram dar uma explicação racional para a origem de todas as coisas. </Text> </View>

<View style={styles.estilo}>
<Text style={styles.estilo}>
A mitologia grega explicava o universo através da cosmogonia (cosmo, "universo", e gónos, "gênese" ou "nascimento"). A cosmogonia dá sentido a tudo o que existe através da ideia de nascimento a partir de uma relação (sexual) entre os deuses. </Text> </View>

<View style={styles.estilo}>
<Text style={styles.estilo}>
Os filósofos pré-socráticos abandonaram essa ideia e construíram a cosmologia, explicação do universo baseado no lógos ("argumentação", "lógica", "razão"). Os deuses deram lugar à natureza na compreensão sobre a origem das coisas. </Text> </View>

<View style={styles.estilo}>
<Text style={styles.estilo}>
A filosofia nascida com esses primeiros filósofos deu origem a toda uma produção de conhecimento e de representação da realidade. Toda essa construção serviu como base para o desenvolvimento da cultura ocidental. 
</Text> </View>

  </View>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEDCC5',
    height:'140%'
    
    
    
  },
  estilo:{
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft:5
  },
})

