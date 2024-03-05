import './Card.css'
import { RiAwardLine } from "react-icons/ri";


export const Card =({titulo, text })=>{
    return(
        <>
        <div className="card" data-aos="fade-up"
     data-aos-duration="300">
            <div className="title-card">
                <RiAwardLine className='icon' />
                <h1 className="titulo">{titulo}</h1>
            </div>
            <p>{text}</p>
        </div>
        </>
    )
}