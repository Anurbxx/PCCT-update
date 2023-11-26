import { Alert } from "react-native";

export const signUp = (
    
    nome,
    nomeUsuario,
    senha,
    pergunta,
    resposta,
    
    navigation,

    setNome,
    setNomeUsuario,
    setSenha,
    setSenhaConf,
    setPergunta,
    setResposta,

    ) => {
    const url = 'http://192.168.80.166:80/studyingbetter/signup.php';
    
    const requestPromise = fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        nomeUsuario,
        senha,
        pergunta,
        resposta
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
        setNome('');
        setNomeUsuario('');
        setSenha('');
        setSenhaConf('');
        setPergunta('');
        setResposta('');
      })
      .catch(error => {
        console.error('Erro ao cadastrar:', error.message);
        Alert.alert('Erro', 'Ocorreu um erro ao cadastrar: ' + error.message);
      });
}