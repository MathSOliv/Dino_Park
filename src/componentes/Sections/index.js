import './Sections.css'

const Sections = (props) => {

    const newId = `${props.id}`

    return(
        <section id={newId}>
            {props.children}
        </section>
    )
}

export default Sections