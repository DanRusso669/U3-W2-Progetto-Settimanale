import { useEffect, useState } from "react";
import WeatherHero from "./WeatherHero";
import { Alert, Container } from "react-bootstrap";

const Details = ({ query }) => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState(false);

  const fetchedLatAndLon = query => {
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=1502c70585e490ebc493d594016bd7fe`, {})
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then(data => {
        setLat(data[0].lat);
        setLon(data[0].lon);
      })
      .catch(err => {
        console.log(err);
        setError(true);
      });
  };

  const fetchedWeatherInfo = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=1502c70585e490ebc493d594016bd7fe`, {})
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then(info => {
        setWeatherInfo(info);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    console.log("QUERY", query);
    fetchedLatAndLon(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (lat !== null && lon !== null) {
      fetchedWeatherInfo(lat, lon);
    }
  }, [lat, lon]);

  return (
    <Container>
      <div className="mainSection">
        {weatherInfo && <WeatherHero weatherInfo={weatherInfo} lat={lat} lon={lon} />}
        {error && <Alert variant="danger">Something gone wrong. Try again.</Alert>}
      </div>
    </Container>
  );
};

export default Details;
