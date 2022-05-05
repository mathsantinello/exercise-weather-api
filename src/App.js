import { Container, Global } from "./styles";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";

function App() {
  const capitals = ['Belém' , 'Belo Horizonte', 'Brasília', 'Curitiba', 'Fortaleza', 'João Pessoa','Manaus','Rio de Janeiro', 'Salvador','São Paulo'];
  const [capitalData, setCapitalData] = useState([]);
  const [doneFetching, setDoneFetching] = useState(false)
  
  const FetchData = async(city)=>{
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=a5fb40245dd54ebe85b14651220305&q=${city}&days=1&aqi=no&alerts=no`
    );
    const json = await response.json();
    console.log(json.location.name);
    const cityData = {name: city, mintemp: json.forecast.forecastday[0].day.mintemp_c, maxtemp:json.forecast.forecastday[0].day.maxtemp_c};
    setCapitalData(oldData=>[...oldData,cityData]);
  }

  useEffect(()=>{
    capitals.map(i=>{
      FetchData(i)
    });
    setDoneFetching(true)
  },[]);

  useEffect(()=>{
    doneFetching && console.log(capitalData)
  },[doneFetching])
  return (
    <>
      <Global/>
      <Container>
        <h1>Previsão do Tempo</h1>
        <div>
          <input placeholder="Insira aqui o nome da cidade"></input>
          <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>

        <h2> Capitais</h2>
        <ul>
          {capitalData.map(i=>{
            return <li key={i.name}>{Math.round(i.mintemp)}° {Math.round(i.maxtemp)}° {i.name}</li>
          })}
        </ul>
        
      </Container>
    </>
  );
}

export default App;
