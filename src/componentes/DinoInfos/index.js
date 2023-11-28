import './DinoInfos.css'

const DinoInfos = (props) => {
    return(
        <div className='DinoInfoContainer'>
            <p>
                {props.text}
            </p>
        </div>
    )
}

export default DinoInfos