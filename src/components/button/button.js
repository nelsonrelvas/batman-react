import React from 'react';
import './styles.css'

function Botao({ nome, sobrenome, numero, active, eventoClick, defineValor }){
    return (
        <div className="container-botao">
            <button onClick={() => eventoClick(defineValor)} className={active ? "botao" : "botaoDisabled"}>
                Meu Botão {nome} {sobrenome} {numero}
            </button>
            <span>Seus dados estão a salvo conosco.</span>
        </div>    
    )
}

export default Botao;