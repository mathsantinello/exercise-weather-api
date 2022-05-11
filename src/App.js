import { Container, Global } from "./styles";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import {WeatherCard} from "./components/Cards";

function App() {
  const capitals = ['Belém' , 'Belo Horizonte', 'Brasília', 'Curitiba', 'Fortaleza', 'João Pessoa','Manaus','Rio de Janeiro', 'Salvador','São Paulo'];
  const [capitalData, setCapitalData] = useState([]);
  const [doneFetching, setDoneFetching] = useState(false);
  const [inputValue,setInputValue]=useState('');
  const [targetCity, setTargetCity] = useState('');
  const [targetCitySent, setTargetCitySent]=useState(false);
  
  const FetchDataCapitals = async(city)=>{
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=a5fb40245dd54ebe85b14651220305&q=${city}&days=1&aqi=no&alerts=no`
    );
    const json = await response.json();
    console.log(json.location.name);
    const cityData = {name: city, mintemp: json.forecast.forecastday[0].day.mintemp_c, maxtemp:json.forecast.forecastday[0].day.maxtemp_c};
    setCapitalData(oldData=>[...oldData,cityData]);
  }
  useEffect(()=>{
    console.log(targetCity)
  },[targetCity]);

  useEffect(()=>{
    console.log(inputValue)
  },[inputValue])

  useEffect(()=>{
    capitals.map(i=>{
      FetchDataCapitals(i)
    });
    setDoneFetching(true)
  },[]);

  return (
    <>
      <Global/>
      <Container>
        <h1>Weather Forecast</h1>
        {targetCitySent && <WeatherCard target={targetCity} showCard={setTargetCitySent} />}
        <div>
          <input onChange={(e)=>setInputValue(e.target.value)}  placeholder="Insert city name here "></input>
            <button onClick={()=>{setTargetCitySent(true);setTargetCity(inputValue)}}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>

        <h2> Capitals</h2>
        
        <h3>
          <span>Min Máx</span>
          <span>Min Máx</span>
        </h3>
        <ul>
          {capitalData.map(i=>{
            return <li key={i.name}>{Math.round(i.mintemp)}° {Math.round(i.maxtemp)}° <span>{i.name}</span></li>
          })}
        </ul>
      </Container>
    </>
  );
}

export default App;
