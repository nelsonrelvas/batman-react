import React, { useContext } from 'react';
import { UsuarioContexto } from '../../contexts/userContext';

function Profile(){
    console.log('INICIANDO Profile');
    const {login} = useContext(UsuarioContexto);

    return (
        <div>
            {!login ? "Faça seu login para ter acesso as suas informações." : "BEM VINDO A NOSSO SITE LOGADO." }
        </div>
    )
}

export default Profile;