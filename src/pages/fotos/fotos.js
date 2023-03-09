import React from 'react';
import Cabecalho from '../../components/header/header';
import Footer from "../../components/footer/footer";
import './styles.css'

function Fotos(){
    console.log('INICIANDO Fotos');
    return (
        <div>
            <Cabecalho />
            <div id="texto">PÁGINA QUE CONTÉM AS FOTOS DO SITE.</div>
            <Footer />
        </div>
    )
}

export default Fotos;