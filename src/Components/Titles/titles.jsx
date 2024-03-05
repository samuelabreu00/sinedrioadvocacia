import './titles.css'

export const Titles = ({title, subtitle}) =>{
    return(
        <>
        <div className="container-titles" data-aos="fade-up">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
        </>
    )
}