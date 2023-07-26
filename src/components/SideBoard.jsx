import React from 'react'
import Search from './Search'
import Temperature from './Temperature'
import WindInfo from './WindInfo'
import DayForecast from './DayForecast'

const SideBoard = ({
  handleLocationChange, 
  searchLocation, 
  current_temp, 
  wind_direction, 
  wind_speed, 
  day0_condition, 
  day0_max_temp, 
  day0_min_temp, 
  day1_condition,
  day1_max_temp,
  day1_min_temp,
  day2_condition,
  day2_max_temp,
  day2_min_temp,
  day3_condition,
  day3_max_temp,
  day3_min_temp,
  day4_condition,
  day4_max_temp,
  day4_min_temp,
  day5_condition,
  day5_max_temp,
  day5_min_temp,
  day6_condition,
  day6_max_temp,
  day6_min_temp,
}) => {
  return (
    <div className="flex-none flex flex-col items-center border-l-[1px] border-[#333333] fixed top-0 right-0 sm:w-0 lg:w-72 h-screen bg-white bg-opacity-[0.01] backdrop-blur-lg drop-shadow-lg">
        <Search handleLocationChange={handleLocationChange} searchLocation={searchLocation}/>
        <Temperature current_temp={current_temp}/>
        <WindInfo wind_direction={wind_direction} wind_speed={wind_speed}/>
        <div className='h-[2px] w-56 bg-white m-6 bg-opacity-10'></div>
        <div className='text-white text-lg font-light mb-2'>7 Days Forecast</div>
        {/* DayForecast for day0 */}
    <DayForecast
      day_condition={day0_condition}
      day_max_temp={day0_max_temp}
      day_min_temp={day0_min_temp}
    />

    {/* DayForecast for day1 */}
    <DayForecast
      day_condition={day1_condition}
      day_max_temp={day1_max_temp}
      day_min_temp={day1_min_temp}
    />

    {/* DayForecast for day2 */}
    <DayForecast
      day_condition={day2_condition}
      day_max_temp={day2_max_temp}
      day_min_temp={day2_min_temp}
    />

    {/* DayForecast for day3 */}
    <DayForecast
      day_condition={day3_condition}
      day_max_temp={day3_max_temp}
      day_min_temp={day3_min_temp}
    />

    {/* DayForecast for day4 */}
    <DayForecast
      day_condition={day4_condition}
      day_max_temp={day4_max_temp}
      day_min_temp={day4_min_temp}
    />

    {/* DayForecast for day5 */}
    <DayForecast
      day_condition={day5_condition}
      day_max_temp={day5_max_temp}
      day_min_temp={day5_min_temp}
    />

    {/* DayForecast for day6 */}
    <DayForecast
      day_condition={day6_condition}
      day_max_temp={day6_max_temp}
      day_min_temp={day6_min_temp}
    />
    </div>
  )
}

export default SideBoard