import Content from "./components/Content";
import SideBoard from "./components/SideBoard";
import axios from "axios";
// import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {

  const bg_image = {
    rainy: " ",
    sunny: "",
    cloudy: ""
  };

  //Weather services part(of Yash Patel):
  // const [query, setQuery] = useState({ q: "berlin" });
  // const [units, setUnits] = useState("metric");
  // const [weather, setWeather] = useState(null);

  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     const message = query.q ? query.q : "current location.";

  //     toast.info("Fetching weather for " + message);

  //     await getFormattedWeatherData({ ...query, units }).then((data) => {
  //       toast.success(
  //         `Successfully fetched weather for ${data.name}, ${data.country}.`
  //       );

  //       setWeather(data);
  //     });
  //   };

  //   fetchWeather();
  // }, [query, units]);

  // const formatBackground = () => {
  //   if (!weather) return "from-cyan-700 to-blue-700";
  //   const threshold = units === "metric" ? 20 : 60;
  //   if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

  //   return "from-yellow-700 to-orange-700";
  // };



  //CHATGPPT WAY:


  // const [weatherData, setWeatherData] = useState(null);
  // const API_KEY = "e1a2dc07311443f29c495301232107";
  // const LOCATION = "Ghaziabad"; // Replace with your desired location

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${LOCATION}&days=7&aqi=no&alerts=no`
  //     )
  //     .then((response) => setWeatherData(response.data))
  //     .catch((error) => console.log("Error fetching data:", error));
  // }, []);


  // const { current } = weatherData;
  // const {temp_c}=current;
  // console.log(temp_c);
  // console.log(weatherData.current.condition.text);
  // console.log(weatherData);

  //Youtuber way:

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.weatherapi.com/v1/forecast.json?key=e1a2dc07311443f29c495301232107&q=${location}&days=7&aqi=no&alerts=no`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  };





  //Handles API delayed calls 

  //Current weather:
  let current_temp = "°C"
  let current_condition = "Enter Location";
  let wind_direction = "None"
  let wind_speed = "0"
  const { current } = data;
  if (current != null) {
    wind_direction = current.wind_dir;
    wind_speed = current.wind_kph;
    current_temp = current.temp_c;
    current_condition = current.condition.text;

  }

  //Forecast weather:
  const { forecast } = data;

  //Daily Weather:

  let day0_max_temp = 0;
  let day0_min_temp = 0;
  let day0_condition = "";

  let day1_max_temp = 0;
  let day1_min_temp = 0;
  let day1_condition = "";

  let day2_max_temp = 0;
  let day2_min_temp = 0;
  let day2_condition = "";

  let day3_max_temp = 0;
  let day3_min_temp = 0;
  let day3_condition = "";

  let day4_max_temp = 0;
  let day4_min_temp = 0;
  let day4_condition = "";

  let day5_max_temp = 0;
  let day5_min_temp = 0;
  let day5_condition = "";

  let day6_max_temp = 0;
  let day6_min_temp = 0;
  let day6_condition = "";

  if (forecast != null) {
    const { forecastday } = forecast

    day0_max_temp = forecastday[0].day.maxtemp_c;
    day0_min_temp = forecastday[0].day.mintemp_c;
    day0_condition = forecastday[0].day.condition.text;

    day1_max_temp = forecastday[1].day.maxtemp_c;
    day1_min_temp = forecastday[1].day.mintemp_c;
    day1_condition = forecastday[1].day.condition.text;

    day2_max_temp = forecastday[2].day.maxtemp_c;
    day2_min_temp = forecastday[2].day.mintemp_c;
    day2_condition = forecastday[2].day.condition.text;

    day3_max_temp = forecastday[3].day.maxtemp_c;
    day3_min_temp = forecastday[3].day.mintemp_c;
    day3_condition = forecastday[3].day.condition.text;

    day4_max_temp = forecastday[4].day.maxtemp_c;
    day4_min_temp = forecastday[4].day.mintemp_c;
    day4_condition = forecastday[4].day.condition.text;

    day5_max_temp = forecastday[5].day.maxtemp_c;
    day5_min_temp = forecastday[5].day.mintemp_c;
    day5_condition = forecastday[5].day.condition.text;

    day6_max_temp = forecastday[6].day.maxtemp_c;
    day6_min_temp = forecastday[6].day.mintemp_c;
    day6_condition = forecastday[6].day.condition.text;

  }

  //Hourly Weather 00:00 to 23:00, alternative hours 

  let hour0_temp, hour2_temp, hour4_temp, hour6_temp, hour8_temp, hour10_temp, hour12_temp, hour14_temp, hour16_temp, hour18_temp, hour20_temp, hour22_temp, hour24_temp;
  let hour0_condition, hour2_condition, hour4_condition, hour6_condition, hour8_condition, hour10_condition, hour12_condition, hour14_condition, hour16_condition, hour18_condition, hour20_condition, hour22_condition, hour24_condition;

  let local_epoch=0;
  if (forecast != null) {
    const { forecastday } = forecast;
    //Hourly Temperature
    hour0_temp = forecastday[0].hour[0].temp_c;
    console.log(hour0_temp);
    hour2_temp = forecastday[0].hour[2].temp_c;
    hour4_temp = forecastday[0].hour[4].temp_c;
    hour6_temp = forecastday[0].hour[6].temp_c;
    hour8_temp = forecastday[0].hour[8].temp_c;
    hour10_temp = forecastday[0].hour[10].temp_c;
    hour12_temp = forecastday[0].hour[12].temp_c;
    hour14_temp = forecastday[0].hour[14].temp_c;
    hour16_temp = forecastday[0].hour[16].temp_c;
    hour18_temp = forecastday[0].hour[18].temp_c;
    hour20_temp = forecastday[0].hour[20].temp_c;
    hour22_temp = forecastday[0].hour[22].temp_c;
  

    // console.log("App" + hour0_temp);

    //Hourly condition
    hour0_condition = forecastday[0].hour[0].condition.text;
    hour2_condition = forecastday[0].hour[2].condition.text;
    hour4_condition = forecastday[0].hour[4].condition.text;
    hour6_condition = forecastday[0].hour[6].condition.text;
    hour8_condition = forecastday[0].hour[8].condition.text;
    hour10_condition = forecastday[0].hour[10].condition.text;
    hour12_condition = forecastday[0].hour[12].condition.text;
    hour14_condition = forecastday[0].hour[14].condition.text;
    hour16_condition = forecastday[0].hour[16].condition.text;
    hour18_condition = forecastday[0].hour[18].condition.text;
    hour20_condition = forecastday[0].hour[20].condition.text;
    hour22_condition = forecastday[0].hour[22].condition.text;

    //Local Time
    local_epoch=forecastday[0].date_epoch
  }

  // const onSearch=(value)=>{
  //   setLocation(value);
  // };

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  }



  //Rendering UI:

  return (
    <div className="App">
      <div
        className="flex items-end w-screen h-screen"
        style={{
          backgroundImage:
            "url(https://i.imgur.com/q0R3gvN.jpeg)",
        }}
      >
        <div className="flex items-end w-screen h-screen bg-black bg-opacity-25">
          {/* <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" /> */}
          <Content
            current_condition={current_condition}

            hour0_condition={hour0_condition}
            hour2_condition={hour2_condition}
            hour4_condition={hour4_condition}
            hour6_condition={hour6_condition}
            hour8_condition={hour8_condition}
            hour10_condition={hour10_condition}
            hour12_condition={hour12_condition}
            hour14_condition={hour14_condition}
            hour16_condition={hour16_condition}
            hour18_condition={hour18_condition}
            hour20_condition={hour20_condition}
            hour22_condition={hour22_condition}

            hour0_temp={hour0_temp}
            hour2_temp={hour2_temp}
            hour4_temp={hour4_temp}
            hour6_temp={hour6_temp}
            hour8_temp={hour8_temp}
            hour10_temp={hour10_temp}
            hour12_temp={hour12_temp}
            hour14_temp={hour14_temp}
            hour16_temp={hour16_temp}
            hour18_temp={hour18_temp}
            hour20_temp={hour20_temp}
            hour22_temp={hour22_temp}

            local_epoch={local_epoch}
          />

          <SideBoard
            handleLocationChange={handleLocationChange}
            searchLocation={searchLocation}
            current_temp={current_temp}
            wind_direction={wind_direction}
            wind_speed={wind_speed}

            day0_condition={day0_condition}
            day0_max_temp={day0_max_temp}
            day0_min_temp={day0_min_temp}

            day1_condition={day1_condition}
            day1_max_temp={day1_max_temp}
            day1_min_temp={day1_min_temp}

            day2_condition={day2_condition}
            day2_max_temp={day2_max_temp}
            day2_min_temp={day2_min_temp}

            day3_condition={day3_condition}
            day3_max_temp={day3_max_temp}
            day3_min_temp={day3_min_temp}

            day4_condition={day4_condition}
            day4_max_temp={day4_max_temp}
            day4_min_temp={day4_min_temp}

            day5_condition={day5_condition}
            day5_max_temp={day5_max_temp}
            day5_min_temp={day5_min_temp}

            day6_condition={day6_condition}
            day6_max_temp={day6_max_temp}
            day6_min_temp={day6_min_temp}

          />
        </div>
      </div>
    </div>
  );
}

export default App;
