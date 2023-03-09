import React from 'react';
import Cabecalho from '../../components/header/header';
import Footer from "../../components/footer/footer";
import './styles.css'

function Contato(){
    console.log('INICIANDO Contato');
    return (
        <div>
            <Cabecalho />
            <div id="texto">PÁGINA QUE CONTÉM OS CONTATOS DO SITE.</div>
            <Footer />
        </div>
    )
}

export default Contato;