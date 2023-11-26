//Importações do React Navigation e do Core Components
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, TouchableOpacity} from "react-native";

//Importações das telas
import Biologia from "./portugues";

import Conteudo from "./Conteudo";
import Questoes from "./Questoes";
import Videoaula from "./Videoaula";
import SalvosBio from "./SalvosPortugues";

import { Ionicons } from '@expo/vector-icons';

const { Navigator, Screen } = createNativeStackNavigator();

export default function RoutePortugues({navigation}){
    return(
        <Navigator
            
        >
            <Screen
                name="Homebio"
                component={Biologia}
                options={{
                    headerLeft: () => (
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                        <View style={{alignItems: "center", justifyContent: "center", marginRight: 24}}>
                            <Ionicons name="arrow-back-sharp" size={24} color="white" />
                        </View>
                    </TouchableOpacity>
                    ),
                    title: 'Português',
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
            <Screen
                name="Conteudos"
                component={Conteudo}
                options={{
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
             <Screen
                name="Questoes"
                component={Questoes}
                options={{
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
             <Screen
                name="Videoaula"
                component={Videoaula}
                options={{
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
             <Screen
                name="Salvos"
                component={SalvosBio}
                options={{
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
        </Navigator>
    )
}