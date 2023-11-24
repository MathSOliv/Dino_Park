import './AboutText.css'

const AboutText = (props) => {
    return(
        <div className='AboutTextDiv'>
            <label> 
                {props.text}
            </label>
        </div>
    )
}

export default AboutText