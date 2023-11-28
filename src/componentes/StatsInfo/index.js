import './StatsInfo.css'

const StatsInfo = (props) => {
    return(
        <div>
            <p id='StatIcon'>{props.icon}</p>
            <p> {props.text} </p>
        </div>
    )
}

export default StatsInfo