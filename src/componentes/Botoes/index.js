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
        <Botao onClick={() => scrollToSection('#section_1')}>SOBRE</Botao>
        <Botao onClick={() => scrollToSection('#section_2')}>ATRAÇÕES</Botao>
        <Botao>SAIR</Botao>
      </div>
    );
  };
  
  export default Botoes;