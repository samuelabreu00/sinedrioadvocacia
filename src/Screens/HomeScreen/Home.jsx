import './Home.css'
import imgEstatua from '../../assets/imgEstatua.png'


export const Home =()=>{
    return(
        <>
        <section className="home">

            <div className="container-home">
              
                <div className="container-img">
                    <img src={imgEstatua} alt="" data-aos="fade-up-left"/>
                    <div className="container-absolut">
                    <h1 className="absolut" data-aos="fade-up-right">SINEDRIO</h1>
                    <h1 data-aos="fade-up-right">ADVOCACIA</h1>
                </div>
                </div>
                <div className='legend'>
                    <p data-aos="fade-up"
     data-aos-duration="300">ATUAMOS ONLINE E PRESENCIAL</p>
                    <p data-aos="fade-up"
     data-aos-duration="500">PARA TODOS OS ESTADOS</p>
                    <p data-aos="fade-up"
     data-aos-duration="700">ACOMPANHAMOS VOCÊ ATÉ O FINAL</p>
                    <p data-aos="fade-up"
     data-aos-duration="900">VOCÊ FICA POR DENTRO DE TUDO</p>
                </div>

                <div className="container-atendimento" data-aos="fade-up">
                    <div className="text">
                        <p
    >ADVOGADOS COMPROMETIDOS COM A <span>EXCELÊNCIA</span> E SUA BUSCA POR JUSTIÇA. <br />
                        SUA CAUSA É NOSSA <span>PRIORIDADE</span>, CONFIE EM NÓS PARA DEFENDER SEUS <br /> DIREITOS COM PAIXÃO E HABILIDADE JURÍDICA.
                        </p>
                    </div>

                    <div className="atendimento" data-aos="fade-down"
     >
                        <a href=""><div className="button-atendimento"><p>SEJA ATENDIDO RAPIDAMENTE</p></div></a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}