import React from 'react'

const WindInfo = ({ wind_direction, wind_speed }) => {

    switch (wind_direction) {
        case "N":
            wind_direction = "North";
            break;
        case "NNE":
            wind_direction = "North-Northeast";
            break;
        case "NE":
            wind_direction = "Northeast";
            break;
        case "ENE":
            wind_direction = "East-Northeast";
            break;
        case "E":
            wind_direction = "East";
            break;
        case "ESE":
            wind_direction = "East-Southeast";
            break;
        case "SE":
            wind_direction = "Southeast";
            break;
        case "SSE":
            wind_direction = "South-Southeast";
            break;
        case "S":
            wind_direction = "South";
            break;
        case "SSW":
            wind_direction = "South-Southwest";
            break;
        case "SW":
            wind_direction = "Southwest";
            break;
        case "WSW":
            wind_direction = "West-Southwest";
            break;
        case "W":
            wind_direction = "West";
            break;
        case "WNW":
            wind_direction = "West-Northwest";
            break;
        case "NW":
            wind_direction = "Northwest";
            break;
        case "NNW":
            wind_direction = "North-Northwest";
            break;
        default:
            wind_direction = "Invalid Wind Direction";
            break;
    }
    const rounded_wind_speed = Math.round(wind_speed);

    return (
        <div className='flex items-center'>
            <svg
                style={{ color: "white" }}
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-wind"
                viewBox="0 0 16 16"
            >
                {" "}
                <path
                    d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"
                    fill="white"
                />{" "}
            </svg>
            <div className='text-gray-300 font-light mx-2 text-xs my-2'>{wind_direction}, {rounded_wind_speed} km/h</div>
        </div>
    )
}

export default WindInfo