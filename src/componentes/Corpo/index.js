import DinoBanner from '../DinoBanner'
import Sections from '../Sections'
import './Corpo.css'

const Corpo = () => {
    return(
        <div>
            <Sections id='section_1'>
                <DinoBanner/>
            </Sections>
            <Sections id='section_2'/>
        </div>    
    )
}

export default Corpo