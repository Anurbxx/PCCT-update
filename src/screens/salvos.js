import React from 'react';
import { StyleSheet, View, Alert, TouchableOpacity, Text, Image, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Salvos() {
    const handleButtonPress = (message) => {
        Alert.alert('Botão Pressionado', message);
    };

    return (
        <View style={styles.container}>

            <View style={styles.disciplinas}>
                <View style={{position: 'absolute', width: 80, alignItems: 'center', justifyContent: 'center'}}>
                    <AntDesign name="heart" size={24} color="#24132C" style={{}} />
                </View>
                <View style={{justifyContent: 'center', width: '100%', alignItems: 'center'}}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Salvos</Text>
                </View>
            </View>

            <View style={styles.containerSal}>



                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textsalvos}>Conteúdo</Text>
                    <Image
                        source={require('../img/conteudos.png')}
                        style={{ width: 40, height: 40, }}
                    />

                </TouchableOpacity>


                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textsalvos}>Questões</Text>
                    <Image
                        source={require('../img/questoes.png')}
                        style={{ width: 47, height: 47, }}
                    />

                </TouchableOpacity>


                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textsalvos}>Videoaula</Text>
                    <Image
                        source={require('../img/video.png')}
                        style={{ width: 41, height: 41, }}
                    />

                </TouchableOpacity>


            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#E1E1E1',
        height: '100%'


    },
    botao: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 30,
        margin: 20,
        borderRadius: 10,
        width: '80%',
        height: 90,
        justifyContent: 'center'
    },


    Salvos: {
        color: 'white',
        fontSize: 30,
        height: 55,
        fontWeight: 'bold',


    },
    salvo0: {
        backgroundColor: '#24132c',
        width: '100%',
        textAlign: 'center',



    },
    containerSal: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20

    },

    textsalvos: {
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 5

    },

    disciplinas: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 40,
        width: '80%'
    },




});