import React from 'react';
import './styles.css'

function Cards() {
    console.log('INICIANDO Cards');

    return (
        <div className="actor-cards-container">
            <div className="cards-content">
                <div className="card banner-1">Robert Pattinson - Batman</div>
                <div className="card banner-2">Zoe Kraitz - Mulher Gato</div>
                <div className="card banner-3">Jeffrey Wright Pattinson - Gordon</div>
            </div>
        </div>
    )
}

export default Cards;