import { Alert } from "react-native";

export const setPassword = (nomeUsuario, senha, confSenha, navigation) => {
    if (!senha){
        Alert.alert('Atenção', 'Preencha a senha');
        return
    }
    if (senha != confSenha){
        Alert.alert('Atenção', 'As senhas não estão batendo');
        return
    }
    
    

    const url = 'http://192.168.80.166:80/studyingbetter/newpassword.php';
    
    const requestPromise = fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nomeUsuario,
        senha,
      }),
    })
    .then(response => response.json());
  
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Tempo de requisição excedido. Cheque sua internet'));
        
      }, 15000); // 15 segundos de timeout
    });
  
    Promise.race([requestPromise, timeoutPromise])
      .then(data => {
        console.log(data);
       
        navigation.navigate('Home')
      })
      .catch(error => {
        console.error('Erro ao cadastrar:', error.message);
        Alert.alert('Erro', 'Ocorreu um erro ao cadastrar: ' + error.message);
      });
}