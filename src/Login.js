import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import efetuarLogin from './logar';
import MenuLateral from './components/MenuLateral';
import Veiculos from './Veiculos';

const Login = () => {
    const [token, setToken] = useState(true)

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    
    const tentarLogar = async () => {
        try{
            if(await efetuarLogin(usuario, senha)) {

                setToken(false)
            }
        }catch(erro){
            setMensagemErro(erro.message)
        }
    }

    const deslogar = () => {
        setToken(true)
    }

    return (
        token ?
            <div className="p-col-2" style={{padding: '3em 0'}}>
                <div className="p-grid p-dir-col p-align-center">
                    <div className="p-col">
                        <div className="pi pi-user" style={{fontSize: '6em'}}></div>
                    </div>
                    <div className="p-col">
                        <label htmlFor="nome1" className="p-sr-only">Nome</label>
                        <InputText
                            id="nome1"
                            type="text"
                            placeholder="Nome"
                            onChange={e => setUsuario(e.target.value)}
                         />
                    </div>
                    <div className="p-col">
                        <label htmlFor="password1" className="p-sr-only">Senha</label>
                        <InputText
                            id="password1"
                            type="password"
                            placeholder="Senha"
                            onChange={e => setSenha(e.target.value)}
                        />
                    </div>
                    <Button className="p-col-4" label="Submit" onClick={tentarLogar}></Button>
                </div>
                <div className="p-field">
                    <p>{mensagemErro}</p>
                </div>

            </div>
        :
            <>
                <MenuLateral />
                <div className="p-col">
                    <Veiculos />
                    <Button label="Deslogar" onClick={deslogar}/>
                </div>
            </>
    )
}

export default Login;