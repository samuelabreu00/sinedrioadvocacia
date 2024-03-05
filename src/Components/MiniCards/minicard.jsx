import './minicard.css'
import { IoStar } from "react-icons/io5";

export const MiniCard =({title, texto})=>{
    return(
        <>
        <div className="miniCard">
            <div className="top">
                <h3>{title}</h3>
                <div className="stars">
                <IoStar className='star'/><IoStar className='star'/><IoStar className='star'/><IoStar className='star'/><IoStar className='star'/></div>
            </div>
            <p>{texto}</p>
        </div>
        </>
    )
}