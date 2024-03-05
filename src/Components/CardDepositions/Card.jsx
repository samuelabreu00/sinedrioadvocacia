import './Card.css'
import { IoStar } from "react-icons/io5";

export const CardDeposition = ({titulo, texto}) =>{
    return(
        <>
        <div className="cardDeposition" data-aos="flip-left">
            <h1>{titulo}</h1>
            <div className="stars"><IoStar className='star'/><IoStar className='star'/><IoStar className='star'/><IoStar className='star'/><IoStar className='star'/></div>
            <p>{texto}</p>
        </div>
        </>
    )
}