import { Container, Global } from "./styles";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



function App() {
  return (
    <>
      <Global/>
      <Container>
        <h1>Previsão do Tempo</h1>
        <div>
          <input placeholder="Insira aqui o nome da cidade"></input>
          <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
        
      </Container>
    </>
  );
}

export default App;
