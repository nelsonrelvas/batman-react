import React from 'react';
import './styles.css'
import Logo from '../../assets/OIP.png'

function Footer() {
    console.log('INICIANDO Footer');

    return (
        <footer>
            <img style={{ objectFit: 'contain' }} id="logo" src={Logo} alt="logo"/>
            <span>Todos direitos reservados ©</span>
            <span>Desenvolvido por: Nelson Relvas</span>

            {/* <nav className="footer-navegation">
                <ul class="footer-list">
                    <a href="./index.html">
                        <li>Home</li>
                    </a>
                    <a href="./contato.html">
                        <li>Contatos</li>
                    </a>
                    <a href="./fotos.html">
                        <li>Fotos</li>
                    </a>
                    <a href="./comentarios.html">
                        <li>Comentários</li>
                    </a>
                </ul>
            </nav> */}
        </footer>
    )
}

export default Footer;