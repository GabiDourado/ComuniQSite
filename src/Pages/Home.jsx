import React from 'react';
import GooglePlay from "../img/GooglePlay.png";
import comuniQ3app from "../img/ComuniQ3app.png"
import "../Css/home.css";
function Home() {
    return (
        <div className='Imagem'>

            <div className='DivTexto1'>
                <a className='ComuniQ1'>CominiQ</a><a className='escrita1'>, o App Que Une Pessoas E Investe Em Uma Boa Vivência</a>
            </div>
            <div className='DivTexto2'>
                <a className='escrita2' >Bem Vindo</a>
            </div>
            <div className="Divbtn">
                <button className='btn' >Baixe Já!</button>
            </div>
            <div className='DivTexto3'>
                <a className='escrita3'>Fique Por Dentro De Tudo Que Acontece Na Sua Comunidade!</a>
            </div>
            <div className='DivImgApp'>
                <img src={comuniQ3app} alt="layalt do App" className="app" />
            </div>
            <div className='DivImg'>
                <img src={GooglePlay} alt="Logo" className="GooglePlay" />
            </div>
        </div>

    )
}

export default Home;