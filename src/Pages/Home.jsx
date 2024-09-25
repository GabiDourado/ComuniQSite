import React from 'react';
import GooglePlay from "../img/GooglePlay.png";
import IosPlay from "../img/AppStoryBorda.png";
import comuniQ3app from "../img/ComuniQ3app.png"
import "../Css/home.css";
function Home() {
    return (
        <div className='Imagem'>

            <div className='DivTexto1'>
                <a className='ComuniQ1'>CominiQ</a><a className='escrita1'> o App Que Une Pessoas E Investe Em Uma Boa Vivência</a>
            </div>
            {/* <div className="DivTextoB">
                <text className="BTTTAQUI">Baixe aqui!!!</text>
            </div> */}
            <div className="Divbtn">
                <div className='Teste1'>
                <a className='btn1' href="https://github.com/majumxrs/ComuniQApp" ><img src={GooglePlay} alt="Logo" className="GooglePlay" /></a>
                </div >
                <div className='Teste'>
                    <a className='btn' href="https://github.com/majumxrs/ComuniQApp" ><img src={IosPlay} alt="Logo" className="IosPlay" /></a>
                </div>

                {/* <button className='btn' ><img src={GooglePlay} alt="Logo" className="GooglePlay" /></button> */}
            </div>
            <div className='DivTexto3'>
                <a className='escrita3'>Fique Por Dentro De Tudo Que Acontece Na Sua Comunidade!</a>
            </div>
            <div className='DivImgApp'>
                <img src={comuniQ3app} alt="layalt do App" className="app" />
            </div>
        </div>

    )
}

export default Home;