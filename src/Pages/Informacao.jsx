import "../Css/Informacao.css"
export default function Informacao() {
    return (
        <div className="Inf">

            <div className="caixaIMG01">
                <span className="tit01">O que Somos:</span>
                <br />
                <span className="textOQS">ComuniQ é um aplicativo inovador desenvolvido para fortalecer a comunicação entre os moradores do bairro, criando uma rede de interação comunitária eficiente e amigável. Através dele, os usuários podem se manter atualizados sobre as últimas novidades da cidade, desde eventos culturais e sociais até importantes avisos de segurança. Além disso, o ComuniQ destaca-se como um canal essencial para divulgar campanhas beneficentes locais, permitindo que os moradores se unam em prol de causas sociais e humanitárias, promovendo solidariedade e colaboração na cidade. Com uma interface simples e intuitiva, o aplicativo conecta vizinhos, incentivando uma convivência mais integrada e informada.</span>
                <img className="img01" src="https://storage.alboom.ninja/sites/4531/albuns/147062/dji_0333__4_net.jpg?t=1501778731" alt="Imagem do alto da cidade de perderneiras" />
            </div>

            <div className="caixaIMG02">
                <img className="img02" src="https://keystoneacademic-res.cloudinary.com/image/upload/v1696429974/articles/educationscom/article-hero-image-19894.jpg" alt="Imagem de uma cidade com a Bandeira do Brsil" />
                <div className="caixaTitulo">
                    <span className="tit02">Quais cidades nos atuamos</span>
                </div>
                <div className="caixaTexto">
                    <span className="textQCA">Atualmente, estamos presentes na cidade de Pederneiras SP, onde iniciamos nossa jornada com o compromisso de conectar e fortalecer a comunidade local. Pederneiras tem sido o ponto de partida para o nosso projeto, e os resultados até agora têm sido extremamente positivos.</span>
                </div>


            </div>

            <div className="caixaIMG01">
                <span className="tit03">Funcionalidades do App:</span>
                <br/>
                <span className="textOQS">O app facilita a organização e segurança na comunidade, oferecendo:</span>
                <span className="textOQS">Cadastro com Google, Microsoft e Apple.</span>
                <span className="textOQS">Registro de denúncias e suporte via chat com bot.</span>
                <span className="textOQS">Acesso a campanhas, pesquisa de informações e perfil do usuário.</span>
                <span className="textOQS">Redefinição de senha em caso de esquecimento.</span>
                <img className="img01" src="http://localhost:3000/static/media/LogoComuniQ.15bf7c1aaa211140bc38.jpeg" alt="Imagem de uma cidade com a Bandeira do Brsil" />
            </div>

        <div className="rodape">

        </div>

        </div>
    )
}