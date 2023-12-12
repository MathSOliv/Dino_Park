import Botao from '../Botao'
import "./Botoes.css"

const Botoes = () => {
    const scrollToSection = (sectionId) => {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div className="botoes">
        <Botao onClick={() => scrollToSection('#section_1')}>HOME</Botao>
        <Botao onClick={() => scrollToSection('#section_2')}>SOBRE</Botao>
        <Botao onClick={() => scrollToSection('#section_3')}>ATRAÇÕES</Botao>
      </div>
    );
  };
  
  export default Botoes;