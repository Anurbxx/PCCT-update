import { Alert } from "react-native";

export const checkUsernameRegistry = async (nomeUsuario, navigation) => {
  
    try {
      const url = 'http://192.168.80.166:80/studyingbetter/verifyuser.php';
  
      const requestPromise = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome_usuario: nomeUsuario,
        }),
      })
      .then(response => response.json());
  
      const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('Tempo de requisição excedido'));
        }, 15000); // 15 segundos de timeout
      });
  
      const data = await Promise.race([requestPromise, timeoutPromise]);
      
      if (data && data.disponivel !== undefined) {
        if (data.disponivel){
            Alert.alert('Atenção', 'Não foi encontrado seu nome de usuário. Verifique se preencheu corretamente')
        }else{
            navigation.navigate({
                name: 'PerguntaRec',
                params: { user: nomeUsuario},
              });
        }
      } else {
        throw new Error('Erro ao verificar o nome de usuário');
      }
    } catch (error) {
      console.error('Erro ao verificar o nome de usuário:', error.message);
    } finally {
     
    }
  };