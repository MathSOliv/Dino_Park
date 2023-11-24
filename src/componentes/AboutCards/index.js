import './AboutCards.css'

const AboutCards = (props) => {
    return(
        <div className='AboutCardContainer'>
            <div className='AboutCard'>
                <img src={props.image} alt={props.imageDesc}></img>
            </div>
        </div>
    )
}

export default AboutCards