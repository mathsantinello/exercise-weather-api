import React,{ useEffect, useState } from "react";
import { CardContainer, LoadingAnimation } from "./styles";
import {faArrowUp, faArrowDown, faX} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export function WeatherCard({target, showCard}){

    const [targetData, setTargetData] = useState({});
    const [targetForecastData, setTargetForecastData]=useState([]);
    const [invalidCity, setInvalidCity] = useState(false);
    const [loadingTargetData, setLoadingTargetData]=useState(false);

    const FetchCityData = async(cityName)=>{
        
        setLoadingTargetData(true);
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=a5fb40245dd54ebe85b14651220305&q=${cityName}&days=6&aqi=no&alerts=no`
            );
        const json = await response.json(); 
        if(json.error){
            console.log('me MAMA');
            setInvalidCity(true);
            setLoadingTargetData(false);
            return
        }
        let forecastArray = []
        json.forecast.forecastday.map(item=>{
            let forecastDayData = {day:item.date, minTemp: item.day.mintemp_c, maxTemp: item.day.maxtemp_c}
            forecastArray.push(forecastDayData)
        })

        let forecastArraySliced = (forecastArray.length>6)?forecastArray.slice(1,6):forecastArray.slice(1,);

        console.log(forecastArraySliced)
        const cityData = {
            name: cityName, 
            state: json.location.region, 
            country: json.location.country,
            tempNow: json.current.temp_c,
            condition: json.current.condition.text,
            minTemp: json.forecast.forecastday[0].day.mintemp_c, 
            maxTemp:json.forecast.forecastday[0].day.maxtemp_c,
            feelsLike: json.current.feelslike_c,
            wind: json.current.wind_kph,
            humidity: json.current.humidity,
        };
        setTargetData(cityData);
        setTargetForecastData(forecastArraySliced);
        setInvalidCity(false);
        setLoadingTargetData(false);
      };

      useEffect(()=>{
            FetchCityData(target);
      },[target]);

    const getWeekday = (s) => {
    const [yyyy,mm,dd] = s.split('-'),
            date = new Date(yyyy, mm-1, dd)
    return date.toLocaleDateString('en-US', {weekday: 'long'})
    }
    return(
        <>  
            
            <CardContainer>
                {loadingTargetData? 
                    <>
                    <LoadingAnimation/>
                    </>
                    :
                    invalidCity? 
                        (<>
                            <text> INVALID CITY NAME! <button onClick={()=>showCard(false)}><FontAwesomeIcon icon={faX} color='#FF7800' size="xl"/></button></text>
                            <hr/>
                        </>
                        )
                        :
                        (<>
                        <h1>{targetData.name}, {targetData.state} - {targetData.country} <button onClick={()=>showCard(false)}><FontAwesomeIcon icon={faX} color='#FF7800' size="xl"/></button></h1>
                        <h2>{targetData.tempNow}°C {targetData.condition}</h2>
                        <div>
                            <div> 
                                <div> <FontAwesomeIcon icon={faArrowDown} color='orange'/> {targetData.minTemp}°</div> 
                                <div> <FontAwesomeIcon icon={faArrowUp} color='orange'/> {targetData.maxTemp}°</div> 
                            </div> 
                            <div>Feels Like <span>{targetData.feelsLike}°C </span></div>
                            <div> Wind <span>{targetData.wind}km/h</span> </div> <div> Humidity <span>{targetData.humidity}%</span></div>
                        </div>
                        <hr/>
                        <footer>
                            {targetForecastData.map(item=>{
                                return <div> <div> {getWeekday(item.day)} </div> <div>{Math.round(item.minTemp)}° {Math.round(item.maxTemp)}°</div></div>
                            })}
                        </footer>
                    </>
                    )
                }    
            </CardContainer>
        </>
    );
}