import StatsInfo from '../StatsInfo'
import './DinoCards.css'

const DinoCards = ( props ) => {
    return(
        <div className='DinoCardContainer'>
            <div className='Card'>
                <div className='DinoCard'>
                    <img src={props.image} alt={props.alt}></img>
                </div>
                <div className='DinoStats'>
                    <div className='Status'>
                        <p className='DinoName'> {props.name} </p>
                        <div className='StatusLine1'>
                            <StatsInfo icon={props.iconMeal} text={props.meal}/>
                            <StatsInfo icon={props.iconLocation} text={props.location}/>
                            <StatsInfo icon={props.iconPeriod} text={props.period}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DinoCards