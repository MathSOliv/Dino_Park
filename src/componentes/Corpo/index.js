import AboutSection from '../AboutSection'
import AttractionsSection from '../AttractionsSection'
import DinoBanner from '../DinoBanner'
import Sections from '../Sections'
import './Corpo.css'

const Corpo = () => {
    return(
        <div>

            <Sections id='section_1'>
                <DinoBanner/>
            </Sections>

            <Sections id='section_2'>
                <AboutSection/>
            </Sections>

            <Sections id='section_3'>
                <div className='DinoSkull'>
                    <img src='/imagens/DinoSkull.png' alt='DinoSkull'></img>
                </div>
                <div className='VelociraptorSkeleton'>
                    <img src='/imagens/VelociraptorSkeleton.png' alt='VelociraptorSkeleton'></img>
                </div>
                <AttractionsSection/>
            </Sections>

            
        </div>    
    )
}

export default Corpo