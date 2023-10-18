import './Botao.css'

const Botao = (props) => {
    const { onClick } = props;
  
    return (
        <button onClick={onClick} className='botao'>
            {props.children}
        </button>
    );
}

export default Botao