import React from 'react';
import { useLocation } from 'react-router';
import Cabecalho from '../../components/header/header';
import Footer from "../../components/footer/footer";
import './styles.css'

function Comentarios(){
    console.log('INICIANDO Comentarios');

    const location = useLocation();
    console.log('------------------------ location', location, 'patchname', location.pathname, location.search);

    return (
        <div>
            <Cabecalho />
            <div id="texto">PÁGINA QUE CONTÉM OS COMENTÁRIOS DO SITE.</div>
            <Footer />
        </div>
    )
}

export default Comentarios;