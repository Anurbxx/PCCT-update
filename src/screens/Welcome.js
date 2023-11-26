import {
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

export default function Welcome({ navigation }) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../img/logo1.png')}
          style={styles.image}
          resizeMode="cover">
          <TouchableOpacity
            style={styles.Botao}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Iniciar</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#24132C',
    },
    image: {
      width: 210,
      height: 150,
    },
    Botao: {
      backgroundColor: '#C42C47',
      width: 100,
      position: 'absolute',
      bottom: -200,
      marginLeft: '27%',
      borderRadius: 10,
      padding: 5,
      textAlign: 'center',
    },
  
  });