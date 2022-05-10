import React,{ useEffect, useState } from "react";
import { CardContainer } from "./styles";

export function WeatherCard({target, resetSearch}){

    const [targetData, setTargetData] = useState([]);

    const FetchCityData = async(cityName)=>{
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=a5fb40245dd54ebe85b14651220305&q=${cityName}&days=6&aqi=no&alerts=no`
        );
        const json = await response.json();   
        console.log(json.current);
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
        setTargetData(oldData=>[...oldData,cityData]);
      };

      useState(()=>{
          if(target.length>0){
            FetchCityData(target);
          }
      },[target])
    return(
        <>
            <CardContainer>
                <div>{targetData.name}, {targetData.state} - {targetData.country}</div>
                <h1>{targetData.tempNow}°C - {targetData.condition}  </h1>
                <text> </text>
                
                <div>

                </div>
                <footer>
                </footer>
            </CardContainer>
        </>
    );
}