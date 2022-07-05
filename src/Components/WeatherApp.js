import React, {useState} from "react";
 
import "./Css/Style.css";
import { useEffect } from "react";

const WeatherApp = () => {

    const [city, setCity] = useState(null);
    const[search, setsearch] = useState("ajmer");

    useEffect (() => {
        fetchApi();
    },[search])

    const fetchApi = async () => { 
            
        const url= `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c10062c17f79e3ad7d2d6a48fe464017`;
        const response = await fetch(url); 
        const resJson = await response.json();
        setCity(resJson.main);
    } 
    
    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        value={search}
                    className="InputField"
                    onChange={(event) => { setsearch(event.target.value) }} 
                    />
                    
                    {city ? (
                        <div>
                        <div className="info">
                        <h2 className="location">
                        <i className="fas fa-street-view"></i>{search}
                        </h2>

                        <h1 className="temp">
                        {city.temp}°c
                        </h1>

                        <h3 className="weathermin_max">
                                    Min : {city.temp_min}°c | Max : {city.temp_max }°c
                        </h3>
                        </div>

                        <div className="wave-one"> </div>
                        <div className="wave-two"> </div>
                        <div className="wave-three"></div>
                        </div>) : (
                            <p className="errorMsg">data not found</p>
                        )}
                </div>
            </div>
        </>
    )
}

export default WeatherApp