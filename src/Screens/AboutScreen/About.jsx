import './About.css'
import imgAdvogado from '../../assets/imgAdvogado.png'

export const About = () =>{
    return(
        <>
        <section className="about" id='about'>
            <div className="container-about">
                <img src={imgAdvogado} alt="" data-aos="fade-up"/>

                <div className="content-about" data-aos="fade-down">
                    <h1 className="title">SINEDRIO ADVOCACIA</h1>

                <div className="container-text">
                    <div className="boxText">
                        <h2>SOBRE NÓS</h2>
                        <p>AQUI NÓS COLOCAMOS UM POUCO SOBRE A EMPRESA E A EQUIPE QUE TRABALHA, QUANDO COMEÇOU E PRINCIPAL FUNÇÃO NO MERCADO. AQUI NÓS COLOCAMOS UM POUCO SOBRE A EMPRESA E A EQUIPE QUE TRABALHA, QUANDO COMEÇOU E PRINCIPAL FUNÇÃO NO MERCADO. AQUI NÓS COLOCAMOS UM POUCO SOBRE A EMPRESA E A EQUIPE QUE TRABALHA, QUANDO COMEÇOU E PRINCIPAL FUNÇÃO NO MERCADO. AQUI NÓS COLOCAMOS UM POUCO SOBRE A EMPRESA E A EQUIPE QUE TRABALHA, QUANDO COMEÇOU E PRINCIPAL FUNÇÃO NO MERCADO.</p>
                    </div>

                    <div className="boxText">
                        <h2>MISSÃO</h2>
                        <p>AQUI NÓS FALAMOS UM POUCO SOBRE A MISSÃO DA EMPRESA PARA COM O CLIENTE E COMO NOSSO SERVIÇO SE DESTACA NO MERCADO.AQUI NÓS FALAMOS UM POUCO SOBRE A MISSÃO DA EMPRESA PARA COM O CLIENTE E COMO NOSSO SERVIÇO SE DESTACA NO MERCADO.AQUI NÓS FALAMOS UM POUCO SOBRE A MISSÃO DA EMPRESA PARA COM O CLIENTE E COMO NOSSO SERVIÇO SE DESTACA NO MERCADO.</p>
                    </div>
                </div>

                <a href="" className="fale-conosco">
                    <div>
                        <h1>FALE COM UM ADVOGADO</h1>
                    </div>
                </a>

                </div>
            </div>
        </section>
        </>
    )
}