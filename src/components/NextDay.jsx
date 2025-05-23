import { useEffect, useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

const NextDay = ({ lat, lon }) => {
  const [nextDays, setNextDays] = useState(null);

  const fetchNextDayWeather = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=1502c70585e490ebc493d594016bd7fe`)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then(data => {
        setNextDays(data);
      })
      .catch(err => console.log(err));
  };

  const NextWeekdayName = fullDate => {
    const date = new Date(fullDate);
    const weekday = date.getDay();

    switch (weekday) {
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
    fetchNextDayWeather(lat, lon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (nextDays) {
      console.log(nextDays);
    }
  }, [nextDays]);

  return (
    <>
      {nextDays !== null ? (
        nextDays.list
          .filter(item => item.dt_txt.endsWith("12:00:00"))
          .map(day => {
            return (
              <Card className="mb-2 nextDays">
                <Card.Body>
                  <Card.Title>{NextWeekdayName(day.dt_txt)}</Card.Title>
                  <Row className="justify-content-center align-items-center">
                    <Col>
                      <Card.Text className="fst-italic">
                        {day.weather[0].description}
                        <Image className="ms-2" src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} />
                      </Card.Text>
                      <Card.Text>
                        <span className="fw-semibold">Min/Max</span>: {Math.floor(day.main.temp_min)}/{Math.floor(day.main.temp_max)} °C
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text className="">
                        <span className="fw-semibold">Humidity</span>: {day.main.humidity} %
                      </Card.Text>
                      <Card.Text>
                        <span className="fw-semibold">Pressure</span>: {day.main.pressure} hPa
                      </Card.Text>
                      <Card.Text>
                        <span className="fw-semibold">Wind</span>: {day.wind.speed} km/h
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            );
          })
      ) : (
        <p>ciao</p>
      )}
    </>
  );
};

export default NextDay;
