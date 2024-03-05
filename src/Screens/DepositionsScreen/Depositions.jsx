import './Depositions.css'
import { Titles } from '../../Components/Titles/titles'
import { MiniCard } from '../../Components/MiniCards/minicard'
import { CardDeposition } from '../../Components/CardDepositions/Card'

export const Depositions = () =>{
    return(
        <>
        <section className="depositions">
            <div className="container-depositions">
                <Titles
                title='DEPOIMENTOS'
                subtitle='AQUI ESTÃO ALGUNS DEPOIMENTOS SOBRE O NOSSO SERVIÇO'
                />

                <div className="container-card">
                    <CardDeposition
                    titulo='Gilson Morais'
                    texto='AQUI COLOCAMOS O DEPOIMENTO DO CLIENTE E SUAS OBSERVAÇÕES A RESPEITO DO SERVIÇO OFERECIDO E SUA EXPERIÊNCIA COM NOSSO PROFISSIONAL.'
                    />
                      <CardDeposition
                    titulo='Robert Dutra'
                    texto='AQUI COLOCAMOS O DEPOIMENTO DO CLIENTE E SUAS OBSERVAÇÕES A RESPEITO DO SERVIÇO OFERECIDO E SUA EXPERIÊNCIA COM NOSSO PROFISSIONAL.'
                    />

                    <div className="container-miniCrds">
                    <div className="content-miniCards">
            
                        <MiniCard
                        title='Yasmin Figueiredo'
                        texto='AQUI COLOCAMOS O DEPOIMENTO DO CLIENTE E SUAS OBSERVAÇÕES A RESPEITO DO SERVIÇO OFERECIDO E SUA EXPERIÊNCIA COM NOSSO PROFISSIONAL.'
                        />
                        <MiniCard
                        title='Yasmin Figueiredo'
                        texto='AQUI COLOCAMOS O DEPOIMENTO DO CLIENTE E SUAS OBSERVAÇÕES A RESPEITO DO SERVIÇO OFERECIDO E SUA EXPERIÊNCIA COM NOSSO PROFISSIONAL.'
                        />
                        <MiniCard
                        title='Yasmin Figueiredo'
                        texto='AQUI COLOCAMOS O DEPOIMENTO DO CLIENTE E SUAS OBSERVAÇÕES A RESPEITO DO SERVIÇO OFERECIDO E SUA EXPERIÊNCIA COM NOSSO PROFISSIONAL.'
                        />
                        <MiniCard
                        title='Yasmin Figueiredo'
                        texto='AQUI COLOCAMOS O DEPOIMENTO DO CLIENTE E SUAS OBSERVAÇÕES A RESPEITO DO SERVIÇO OFERECIDO E SUA EXPERIÊNCIA COM NOSSO PROFISSIONAL.'
                        />
                        <MiniCard
                        title='Yasmin Figueiredo'
                        texto='AQUI COLOCAMOS O DEPOIMENTO DO CLIENTE E SUAS OBSERVAÇÕES A RESPEITO DO SERVIÇO OFERECIDO E SUA EXPERIÊNCIA COM NOSSO PROFISSIONAL.'
                        />
                        <MiniCard
                        title='Yasmin Figueiredo'
                        texto='AQUI COLOCAMOS O DEPOIMENTO DO CLIENTE E SUAS OBSERVAÇÕES A RESPEITO DO SERVIÇO OFERECIDO E SUA EXPERIÊNCIA COM NOSSO PROFISSIONAL.'
                        />
                        <MiniCard
                        title='Yasmin Figueiredo'
                        texto='AQUI COLOCAMOS O DEPOIMENTO DO CLIENTE E SUAS OBSERVAÇÕES A RESPEITO DO SERVIÇO OFERECIDO E SUA EXPERIÊNCIA COM NOSSO PROFISSIONAL.'
                        />
                        <MiniCard
                        title='Yasmin Figueiredo'
                        texto='AQUI COLOCAMOS O DEPOIMENTO DO CLIENTE E SUAS OBSERVAÇÕES A RESPEITO DO SERVIÇO OFERECIDO E SUA EXPERIÊNCIA COM NOSSO PROFISSIONAL.'
                        />
                        <MiniCard
                        title='Yasmin Figueiredo'
                        texto='AQUI COLOCAMOS O DEPOIMENTO DO CLIENTE E SUAS OBSERVAÇÕES A RESPEITO DO SERVIÇO OFERECIDO E SUA EXPERIÊNCIA COM NOSSO PROFISSIONAL.'
                        />
                        <MiniCard
                        title='Yasmin Figueiredo'
                        texto='AQUI COLOCAMOS O DEPOIMENTO DO CLIENTE E SUAS OBSERVAÇÕES A RESPEITO DO SERVIÇO OFERECIDO E SUA EXPERIÊNCIA COM NOSSO PROFISSIONAL.'
                        />
                        <MiniCard
                        title='Yasmin Figueiredo'
                        texto='AQUI COLOCAMOS O DEPOIMENTO DO CLIENTE E SUAS OBSERVAÇÕES A RESPEITO DO SERVIÇO OFERECIDO E SUA EXPERIÊNCIA COM NOSSO PROFISSIONAL.'
                        />
                    </div>
                    </div>
                </div>

               

            </div>
        </section>
        </>
    )
}