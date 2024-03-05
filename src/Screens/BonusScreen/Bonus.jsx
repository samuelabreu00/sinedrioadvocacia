import './Bonus.css'
import { Titles } from '../../Components/Titles/titles'
import imgBalanca from '../../assets/retangulo1.png'
import imgRetangulo from '../../assets/retangulo2.png'

export const Bonus = () =>{
    return(
        <>
        <section className="bonus">
            <div className="container-bonus">
                <Titles
                title='DEFESA ESPECIALIZADA'
                subtitle='VOCÊ RECEBEU UMA INTIMAÇÃO E PRECISA DE UM ACOMPANHAMENTO ESPECIALIZADO? NÓS TE AJUDAMOS EM CASO DE:'
                />

                <main>
                    <div className="box1 box" data-aos="flip-left"  data-aos-duration="1000">
                        <h1>DIFERENCIAL</h1>
                        <div className="boxText">
                            <div className="text1 text">
                                <h2>ACOMPANHAMENTO</h2>
                                <p>
                                    TE ACOMPANHAMOS EM TODO O SEU CASO, 
                                    AUXILIANDO VOCÊ E DEIXANDO VOCÊ POR DENTRO DO PROCESSO.
                                </p>
                            </div>

                            <div className="text2 text">
                                <h2>TRATAMENTO HUMANIZADO</h2>
                                <p>
                                    VOCÊ TERÁ CONATO 100% COM UM ADVOGADO PARTICULAR QUE TRARÁ MAIS EXCLARECIMENTO SOBRE TUDO.
                                </p>
                            </div>

                            <div className="text3 text">
                                <h2>SEGURANÇA DURANTE O PROCESSO</h2>
                                <p>
                                    TE ASSEGURAMOS SOBRE QUALQUER CUSTEIO QUE SERÁ COMBINADO E MANTIDO ATÉ O FINAL.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="box2 box" data-aos="flip-right"  data-aos-duration="1000">
                        <div className="subBox">
                            <h1>ACOMPANHAMENTO DE INQUÉRITO</h1>
                            <h1>ACOMPANHAMENTO EM DELEGACIA</h1>
                        </div>
                        <div className="subBox2">
                            <h1>AUDIÊNCIA DE CUSTÓDIA</h1>
                            <h1>AUDIÊNCIA DE INSTRUÇÃO</h1>
                            <h1>EXECUÇÃO PENAL</h1>
                            <h1>REVISÃO CRIMINAL</h1>
                        </div>
                    </div>

                    <div className="box3 box" data-aos="flip-right"  data-aos-duration="1000">
                        <img src={imgBalanca} alt="" className="img1" />
                        <img src={imgRetangulo} alt="" className="img2" />
                    </div>
                </main>
            </div>
        </section>
        </>
    )
}