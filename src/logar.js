const efetuarLogin = async (usuario, senha) => {

    // Envia dados para o backend para realizar o login

    // const cabecalhoHTTP = {
    //     method: "POST",
    //     body: JSON.stringify ({
    //         userName: usuario,
    //         password: senha
    //     }),
    //     headers: {
    //         "Content-Type": "application/json" 
    //     }
    // }
    
    // const resposta = await fetch(`http://localhost:3000/enviadado`, cabecalhoHTTP)

    // if(resposta.ok) {
        // return resposta.headers.get("x-acess-token")

    if(usuario !== '' || senha !== '') {
        return '4d6h1c86g2b4d9g2v5dmg5fgd55mdffdf58bddl5689v';
    } else {
        throw new Error('Não foi possível logar')
    }

}

export default efetuarLogin;