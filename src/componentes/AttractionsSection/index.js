import DinoCards from '../DinoCards'
import './AttractionsSection.css'

const AttractionsSection = () => {
    return(
        <div className='DinoContainer'>
            <h2>ATRAÇÕES</h2>
            <div className='DinoInfo'>
                <DinoCards/>
            </div>
        </div>
    )
}

export default AttractionsSection