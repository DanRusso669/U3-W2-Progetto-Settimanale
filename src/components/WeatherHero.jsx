import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import SpecWeatherInfo from "./specWeatherInfo";
import NextDay from "./NextDay";

const WeatherHero = ({ weatherInfo, lat, lon }) => {
  const today = new Date();
  const weekday = today.getDay();
  const [correctWeekday, setCorrectWeekday] = useState("");

  const getWeekDay = today => {
    switch (today) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "";
    }
  };

  useEffect(() => {
    setCorrectWeekday(getWeekDay(weekday));
    console.log(weatherInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Row xs={1} lg={2} className="mainSection">
        <Col className="d-flex flex-column justify-content-start my-5" id="mainDay">
          <h1 className="text-center pt-4">
            {weatherInfo.name}, {weatherInfo.sys.country}
          </h1>

          <div className="d-flex flex-column align-items-center justify-content-center">
            {correctWeekday !== "" && <p className="fw-semibold ">{correctWeekday}</p>}
            <p className="fst-italic mb-0">
              {weatherInfo.weather[0].description}

              <Image src={`http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`} />
            </p>
            <p className="display-1 fw-bold">{Math.floor(weatherInfo.main.temp)}°C</p>
          </div>
          <Row className="mt-4">
            <SpecWeatherInfo info={weatherInfo.main.humidity} infoName="Humidity" unit="°C" />
            <SpecWeatherInfo info={Math.floor(weatherInfo.main.temp_max)} infoName="Max" unit=" °C" />
            <SpecWeatherInfo info={Math.floor(weatherInfo.main.temp_min)} infoName="Min" unit=" °C" />
            <SpecWeatherInfo info={Math.floor(weatherInfo.main.pressure)} infoName="Pressure" unit=" hPa" />
            <SpecWeatherInfo info={Math.floor(weatherInfo.wind.speed)} infoName="Wind" unit=" km/h" />
          </Row>
        </Col>
        <Col className="d-flex flex-column justify-content-start my-auto">
          <h4 className="mb-3">5-Day Weather Forecast</h4>
          <NextDay lat={lat} lon={lon} />
        </Col>
      </Row>
    </>
  );
};

export default WeatherHero;
