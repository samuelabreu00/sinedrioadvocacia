import './footer.css'
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { TbBrandTiktok } from "react-icons/tb";
import { LuYoutube } from "react-icons/lu";


export const Footer = () =>{
    return(
        <>
        <footer>
            <div className="container-footer">
                <div className="left">
                    <h1 className='title' data-aos="fade-up" data-aos-duration="300">
                        SINEDRIO <br />ADVOCACIA
                    </h1>

                    <div className="contatos">
                        <div className="contatoDireto" data-aos="fade-up" data-aos-duration="400">
                            <h2>CONTATOS</h2>
                            <p>EMAIL: SINEDRIOCONTATO@GMAIL.COM</p>
                            <p>TELEFONE (85) 97543-8765</p>
                        </div>

                        <div className="social" data-aos="fade-up" data-aos-duration="500">
                            <h2>REDES SOCIAIS</h2>
                            <ul>
                               <a href=""><FaInstagram/></a> 
                                <a href=""><RiFacebookCircleLine/></a>
                                <a href=""><RiLinkedinBoxLine/></a>
                                <a href=""><TbBrandTiktok/></a>
                                <a href=""><LuYoutube/></a>
                            </ul>
                        </div>

                        <div className="endereço" data-aos="fade-up" data-aos-duration="600">
                            <h2>ENDEREÇO</h2>
                            <p>123 Rua das Ilusões, Bairro dos Sonhos, <br /> Cidade Imaginária, Estado dos Desejos. CEP: 12345-678.</p>
                        </div>
                    </div>
                </div>

                <div className="right" data-aos="fade-up" data-aos-duration="900">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63690.301736806694!2d-38.443417600000004!3d-3.8862847999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sbr!4v1708056060359!5m2!1spt-PT!2sbr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="copy">
                <p>©2024 Sinedrio Advocacia. Todos os direitos reservados.</p>
            </div>
        </footer>
        </>
    )
}