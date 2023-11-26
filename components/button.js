import { Text, View, StyleSheet } from 'react-native';

export default function Button({text, color, shadow}) {
  return (
    <View style={[styles.container, {
      shadowColor: `${shadow === true ? '#000' : undefined }`,
      shadowRadius: 10,
      shadowOpacity: 0.2
    }
    ]}>
      <Text style={
        [styles.text, 
        {color: `${color === undefined ? '#FFF' : color }`},
        ]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#24132C',
    width: 290,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: 'auto',
    marginVertical: 10
  },
  text:{
    color: '#FFF',
    fontSize: 15,
    textAlign:'center'
  }
});