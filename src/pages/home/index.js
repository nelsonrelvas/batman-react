import Cabecalho from "../../components/header/header";
import Video from "../../assets/BATMAN_ Trailer_2_Oficial Legendado _ DC FanDome 2021.mp4"
import './styles.css'
import Cards from "../../components/cards/cards";
import Footer from "../../components/footer/footer";

function Home() {
    console.log('INICIANDO Home');

    return (
        <>
            <Cabecalho />
            <div id="banner"></div>
            <div id="trailer-container">
                <div className="content">
                    <video controls className="trailer">
                        <source src={Video} type="video/mp4" />
                        Seu navegador não tem suporte para vídeos
                    </video>
                    <div id="sinopse">
                        <p className="description">
                            BATMAN, segue o segundo ano de Bruce Wayne (Robert Pattinson) como o herói de Gotham, causando medo nos corações dos criminosos, levando-o para as sombras de Gotham City.
                        </p>
                        <button className="botao">Comprar ingresso</button>
                    </div>
                </div>
            </div>
            <Cards />
            <Footer />
        </>
    )
}

export default Home;