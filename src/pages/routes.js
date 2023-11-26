//Importações do React Native em Geral do Core Components
import React, { useState } from 'react'
import { Button, View } from 'react-native'
//Importações do React Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Importaçã de ícones
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

//Importações da pilha de autenticação
import Login from '../screens/Login'
import Inscreva_se from '../screens/Inscreva-se'
import EsqueceuSenha from '../screens/EsqueceuSenha';
import PerguntaEsqSenha from '../screens/PerguntaRec';
import NovaSenha from '../screens/NovaSenha';
import TelaPerg from '../screens/TelaPerg';


//Importações da pilha de navegação principal
import Home from '../screens/Home'
import Salvos from '../screens/salvos'
import Cronograma from '../screens/Cronograma'
import Perfil from '../screens/Perfil'

//Importações das Rotas de Disciplinas
import RouteBiologia from '../screens/biologia/routebiologia';
import RouteFilosofia from '../screens/filosofia/routefilosofia';
import RouteFisica from '../screens/fisica/routefisica';
import RouteGeografia from '../screens/geografia/routegeografia';
import RouteHistoria from '../screens/historia/routehistoria';
import RouteLiteratura from '../screens/literatura/routeliteratura';
import RouteMatematica from '../screens/matematica/routematematica';
import RoutePortugues from '../screens/portugues/routeportugues';
import RouteQuimica from '../screens/quimica/routequimica';


//Criação das pilhas de navegação

const MainTab = createBottomTabNavigator(); //Pilha principal
const StackAuth = createNativeStackNavigator(); //Pilha de Autenticação

function RouteAuth() {
    return (
        <StackAuth.Navigator>
            <StackAuth.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />

            <StackAuth.Screen
                name="Inscreva-se"
                component={Inscreva_se}
                options={{ headerShown: false }}
            />

            <StackAuth.Screen
                name="TelaPerg"
                component={TelaPerg}
                options={{ headerShown: false,
                presentation: 'transparentModal' }}
            />

            <StackAuth.Screen
                name="EsqueceuSenha"
                component={EsqueceuSenha}
                options={{ headerShown: false,}}
            />

            <StackAuth.Screen
                name="PerguntaRec"
                component={PerguntaEsqSenha}
                options={{ headerShown: false }}
            />

            <StackAuth.Screen
                name="NovaSenha"
                component={NovaSenha}
                options={{ headerShown: false }}
            />
        </StackAuth.Navigator>
    )
}


export function Routes() {
    const [auth, setAuth] = useState(false);
    return (
        <MainTab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarShowLabel: false,

                tabBarHideOnKeyboard: true,

                tabBarStyle: {
                    backgroundColor: 'white',
                    paddingLeft: 40,
                    paddingRight: 40,
                    height: '7%'
                }

            }}
            initialRouteName='RouteAuth'
        >
            <MainTab.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: '#24132C',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="home" size={24} color="#24132C" />
                        }
                        return <Ionicons name="home-outline" size={size} color={color} />
                    }
                }}
            />

            <MainTab.Screen
                name="TelaSalvos"
                component={Salvos}
                options={{
                    headerStyle: { backgroundColor: "#24132C" },
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <AntDesign name="heart" size={24} color="#24132C" />
                        }
                        return <AntDesign name="heart" size={24} color="#808080" />
                    }
                }}
            />

            <MainTab.Screen
                name="Cronograma"
                component={Cronograma}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <AntDesign name="calendar" size={24} color="#24132C" />
                        }
                        return <AntDesign name="calendar" size={24} color="#808080" />
                    }
                }}
            />

            <MainTab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <FontAwesome name="user" size={24} color="#24132C" />
                        }
                        return <FontAwesome name="user" size={24} color="#808080" />
                    }
                }}
            />

            <MainTab.Screen
                name="RouteAuth"
                component={RouteAuth}
                options={{
                    headerShown: false,
                    tabBarItemStyle: { display: 'none' },
                    tabBarStyle: { display: 'none' },
                }}
            />
            <MainTab.Screen
                name="RouteBiologia"
                component={RouteBiologia}
                options={{
                    headerShown: false,
                    tabBarItemStyle: { display: 'none' },
                }}
            />
            <MainTab.Screen
                name="RouteFilosofia"
                component={RouteFilosofia}
                options={{
                    headerShown: false,
                    tabBarItemStyle: { display: 'none' },
                }}
            />

            <MainTab.Screen
                name="RouteFisica"
                component={RouteFisica}
                options={{
                    headerShown: false,
                    tabBarItemStyle: { display: 'none' },
                }}
            />

            <MainTab.Screen
                name="RouteGeografia"
                component={RouteGeografia}
                options={{
                    headerShown: false,
                    tabBarItemStyle: { display: 'none' },
                }}
            />

            <MainTab.Screen
                name="RouteHistoria"
                component={RouteHistoria}
                options={{
                    headerShown: false,
                    tabBarItemStyle: { display: 'none' },
                }}
            />

            <MainTab.Screen
                name="RouteLiteratura"
                component={RouteLiteratura}
                options={{
                    headerShown: false,
                    tabBarItemStyle: { display: 'none' },
                }}
            />

            <MainTab.Screen
                name="RouteMatematica"
                component={RouteMatematica}
                options={{
                    headerShown: false,
                    tabBarItemStyle: { display: 'none' },
                }}
            />

            <MainTab.Screen
                name="RoutePortugues"
                component={RoutePortugues}
                options={{
                    headerShown: false,
                    tabBarItemStyle: { display: 'none' },
                }}
            />

            <MainTab.Screen
                name="RouteQuimica"
                component={RouteQuimica}
                options={{
                    headerShown: false,
                    tabBarItemStyle: { display: 'none' },
                }}
            />


        </MainTab.Navigator>
    )
}
