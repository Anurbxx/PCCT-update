import { Alert } from "react-native";

export const checkAnswer = (nomeUsuario, resposta, navigation) => {
  
    if (!resposta){
        Alert.alert('Atenção', 'Preencha a resposta');
        return
    }
    
    const url = 'http://192.168.80.166:80/studyingbetter/verifyanswer.php';
    
    const requestPromise = fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nomeUsuario,
        resposta,
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
        console.log(data.check);
        let check = data.check
        
        if (check){
            Alert.alert('Sucesso', 'Agora insire sua nova senha');
            navigation.navigate({
              name: 'NovaSenha',
              params: { user: nomeUsuario },
              merge: true,
            });
        }else{
            Alert.alert('Atenção', 'Resposta incorreta. Tente novamente');
        }
      })
      .catch(error => {
        console.error('Erro ao cadastrar:', error.message);
        Alert.alert('Erro', 'Ocorreu um erro ao cadastrar: ' + error.message);
       
      });
}