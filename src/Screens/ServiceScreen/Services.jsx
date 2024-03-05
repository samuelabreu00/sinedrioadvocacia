import './Services.css'
import { Card } from '../../Components/CardsService/Card'
import { Titles } from '../../Components/Titles/titles'

export const Services = () =>{
    return(
        <>
        <section className="services" id='services'>
            <div className="container-services">
                <Titles
                title="SERVIÇOS"
                subtitle="ESSES SÃO OS SERVIÇOS QUE TE OFERECEMOS E GARANTIMOS EXCELÊNCIA"
                />
                <div className="container-cards">
                    <Card
                    titulo="TÍTULO"
                    text='Texto exemplar de como funciona o serviço bem simplificado e fácil de compreender, para todos os nichos e classes sociais compreenderem o que o serviço proporciona. '
                    
                    />
                     <Card
                    titulo="TÍTULO"
                    text='Texto exemplar de como funciona o serviço bem simplificado e fácil de compreender, para todos os nichos e classes sociais compreenderem o que o serviço proporciona.'
                    />
                     <Card
                    titulo="TÍTULO"
                    text='Texto exemplar de como funciona o serviço bem simplificado e fácil de compreender, para todos os nichos e classes sociais compreenderem o que o serviço proporciona.'
                    />
                     <Card
                    titulo="TÍTULO"
                    text='Texto exemplar de como funciona o serviço bem simplificado e fácil de compreender, para todos os nichos e classes sociais compreenderem o que o serviço proporciona.'
                    />
                     <Card
                    titulo="TÍTULO"
                    text='Texto exemplar de como funciona o serviço bem simplificado e fácil de compreender, para todos os nichos e classes sociais compreenderem o que o serviço proporciona.'
                    />
                     <Card
                    titulo="TÍTULO"
                    text='Texto exemplar de como funciona o serviço bem simplificado e fácil de compreender, para todos os nichos e classes sociais compreenderem o que o serviço proporciona.'
                    />
                     <Card
                    titulo="TÍTULO"
                    text='Texto exemplar de como funciona o serviço bem simplificado e fácil de compreender, para todos os nichos e classes sociais compreenderem o que o serviço proporciona.'
                    />
                     <Card
                    titulo="TÍTULO"
                    text='Texto exemplar de como funciona o serviço bem simplificado e fácil de compreender, para todos os nichos e classes sociais compreenderem o que o serviço proporciona.'
                    />
                     <Card
                    titulo="TÍTULO"
                    text='Texto exemplar de como funciona o serviço bem simplificado e fácil de compreender, para todos os nichos e classes sociais compreenderem o que o serviço proporciona.'
                    />
                </div>
            </div>
        </section>
        </>
    )
}