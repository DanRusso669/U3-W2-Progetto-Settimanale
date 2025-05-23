import { useEffect } from "react";
import { Image, Row } from "react-bootstrap";
import SpecWeatherInfo from "./specWeatherInfo";

const WeatherHero = ({ weatherInfo }) => {
  useEffect(() => {
    console.log(weatherInfo);
  }, []);

  return (
    <>
      <h1 className="text-center pt-4">{weatherInfo.name}</h1>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <p className="fst-italic mb-0">
          {weatherInfo.weather[0].description}

          <Image src={`http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`} />
        </p>
        <p className="display-1 fw-bold">{Math.floor(weatherInfo.main.temp)}°C</p>
      </div>
      <Row className="mt-4">
        <SpecWeatherInfo info={weatherInfo.main.humidity} infoName="Humidity" unit="°C" />
        <SpecWeatherInfo info={Math.floor(weatherInfo.main.temp_max)} infoName="Max" unit="°C" />
        <SpecWeatherInfo info={Math.floor(weatherInfo.main.temp_min)} infoName="Min" unit="°C" />
        <SpecWeatherInfo info={Math.floor(weatherInfo.main.pressure)} infoName="Pressure" unit="Pa" />
      </Row>
    </>
  );
};

export default WeatherHero;
