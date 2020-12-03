import React, { useState } from 'react';
import AsyncStorage from "@react-native-community/async-storage";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import efetuarLogin from './logar';

const Login = () => {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    
    const tentarLogar = async () => {
        try{
            const token = await efetuarLogin(usuario, senha)
            await AsyncStorage.setItem("chave_token", token);
        }catch(erro){
            setMensagemErro(erro.message)
        }
    }

    return (
        <div className="p-grid p-justify-center p-align-center vertical-container">
            <div className="p-col-4">

                <h5>Login</h5>
                <div className="p-formgroup-inline">
                    <div className="p-field">
                        <label htmlFor="nome1" className="p-sr-only">Nome</label>
                        <InputText
                            id="nome1"
                            type="text"
                            placeholder="Nome"
                            onChange={e => setUsuario(e.target.value)}
                         />
                    </div>
                    <div className="p-field">
                        <label htmlFor="password1" className="p-sr-only">Senha</label>
                        <InputText
                            id="password1"
                            type="password"
                            placeholder="Senha"
                            onChange={e => setSenha(e.target.value)}
                        />
                    </div>
                    <Button label="Submit" onClick={tentarLogar}></Button>
                    <div className="p-field">
                        <p>{mensagemErro}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;