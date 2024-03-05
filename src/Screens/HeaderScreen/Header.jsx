import { MdArrowForwardIos } from "react-icons/md";
import React, { useRef, useEffect, useState } from 'react';
import './Header.css'

export const Header = () =>{
    const headerRef = useRef();
    const [currentSection, setCurrentSection] = useState('');
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        let current = '';
        const limiteScroll = 80;
  
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            const marginOfError = 100; // Experimente diferentes valores
            if (window.scrollY >= sectionTop - marginOfError && window.scrollY < sectionTop + sectionHeight - marginOfError) {
              current = section.getAttribute('id');
          }
        });
  
        setCurrentSection(current);
  
      
        const header = headerRef.current;
        if (header) {
          header.classList.toggle('ativo', window.scrollY > limiteScroll);
  
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      const hamburguer = document.querySelector(".hamburguer");
      const navMenu = document.querySelector(".nav-menu");
  
      const handleHamburguerClick = () => {
        hamburguer.classList.toggle("active");
        navMenu.classList.toggle("active");
      };
  
      if (hamburguer) {
        hamburguer.addEventListener("click", handleHamburguerClick);
      }
  
      return () => {
        if (hamburguer) {
          hamburguer.removeEventListener("click", handleHamburguerClick);
        }
      };
    }, [])
    
 
    ;
   

    return(
        <>
        <header ref={headerRef}>
            <nav className="container-header">
                <ul className="nav-menu">
                    <li data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine"  data-aos-duration="900"><a href="#" className="colorGold">SINEDRIO<br/>ADVOCACIA</a></li>
                    <li data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine"  data-aos-duration="700"><a href="#services" className={currentSection === 'services' ? 'ative' : ''}>SERVIÇOS</a></li>
                    <li data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine"  data-aos-duration="500"><a href="#about" className={currentSection === 'about' ? 'ative' : ''}>SOBRE</a></li>

                    <a href="" className="none">
                <div className="contato" >
                    <p>ENTRAR EM CONTATO</p> <MdArrowForwardIos className="arrow"/>
                </div>
                </a>

                </ul>

                <a href="" className="block">
                <div className="contato" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <p>ENTRAR EM CONTATO</p> <MdArrowForwardIos className="arrow"/>
                </div>
                </a>


                <div className="container-hamburguer">
          <div className="hamburguer">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <a href="#" className="colorGold displayBlock" id="name">SINEDRIO<br/>ADVOCACIA</a>
            </nav>
        </header>
        </>
    )
}