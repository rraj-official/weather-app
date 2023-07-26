import React from 'react'
import HourlyForecast from './HourlyForecast'
import { useState } from 'react'
import { DateTime } from 'luxon';

// import { formatToLocalTime } from "../services/weatherService";
// required content arguments: { weather: { dt, timezone, name, country } } in yash patel video

const Content = ({
    current_condition,

    hour0_temp,
    hour2_temp,
    hour4_temp,
    hour6_temp,
    hour8_temp,
    hour10_temp,
    hour12_temp,
    hour14_temp,
    hour16_temp,
    hour18_temp,
    hour20_temp,
    hour22_temp,

    hour0_condition,
    hour2_condition,
    hour4_condition,
    hour6_condition,
    hour8_condition,
    hour10_condition,
    hour12_condition,
    hour14_condition,
    hour16_condition,
    hour18_condition,
    hour20_condition,
    hour22_condition,

    local_epoch
}) => {

    // const [condition, setCondition] = useState("Enter Location");
    // let current_condition = "";

    // if (data != null) {
    //     const { current } = data;
    //     const { temp_c } = current;
    //     const { condition } = current;
    //     const { text } = condition;
    //     const current_temp = temp_c;
    //     current_condition = text;
    //     console.log(current_condition)
    // }
    // console.log("Waddup"+hour0_condition);
    const dateTimeObj = DateTime.fromMillis(local_epoch*1000);
    // const dateTimeObj = DateTime.fromMillis(local_epoch*1000); //local epoch value is in ms while Luxon uses seconds
    const formattedDate = dateTimeObj.toFormat('dd LLLL yyyy');

    // const dateTimeObj2 = DateTime.fromMillis(local_epoch);
    const formattedTime = dateTimeObj.toFormat('HH:mm');
    console.log(local_epoch)

    return (
        <div className='grow flex-col items-center h-[400px] mr-72 p-10'>
            <div className='flex items-center absolute top-0 right-[300px] p-8'>
                <div className='text-white font-thin text-2xl px-4'>{formattedDate}</div>
                <div className='h-[22px] w-[1px] bg-white bg-opacity-60'></div>
                <div className='text-white font-thin text-2xl pl-4'>{formattedTime}</div>
            </div>
            <div className='flex items-center justify-end'>
                <div className='text-white text-7xl font-light text-right'>{current_condition}</div>
            </div>
            <div className='h-[2px] w-full bg-white my-10 bg-opacity-10'></div>
            <div className='flex items-center justify-between'>
                <HourlyForecast hour="00:00" hour_temp={hour0_temp} hour_condition={hour0_condition} />
                <HourlyForecast hour="02:00" hour_temp={hour2_temp} hour_condition={hour2_condition} />
                <HourlyForecast hour="04:00" hour_temp={hour4_temp} hour_condition={hour4_condition} />
                <HourlyForecast hour="06:00" hour_temp={hour6_temp} hour_condition={hour6_condition} />
                <HourlyForecast hour="08:00" hour_temp={hour8_temp} hour_condition={hour8_condition} />
                <HourlyForecast hour="10:00" hour_temp={hour10_temp} hour_condition={hour10_condition} />
                <HourlyForecast hour="12:00" hour_temp={hour12_temp} hour_condition={hour12_condition} />
                <HourlyForecast hour="14:00" hour_temp={hour14_temp} hour_condition={hour14_condition} />
                <HourlyForecast hour="16:00" hour_temp={hour16_temp} hour_condition={hour16_condition} />
                <HourlyForecast hour="18:00" hour_temp={hour18_temp} hour_condition={hour18_condition} />
                <HourlyForecast hour="20:00" hour_temp={hour20_temp} hour_condition={hour20_condition} />
                <HourlyForecast hour="22:00" hour_temp={hour22_temp} hour_condition={hour22_condition} />

                {/* Sample hourly forecast */}

                {/* <HourlyForecast hour="00:00"  />
                <HourlyForecast hour="02:00"  />
                <HourlyForecast hour="04:00" />
                <HourlyForecast hour="06:00" />
                <HourlyForecast hour="08:00"  />
                <HourlyForecast hour="10:00" />
                <HourlyForecast hour="12:00"  />
                <HourlyForecast hour="14:00"  />
                <HourlyForecast hour="16:00"  />
                <HourlyForecast hour="18:00"  />
                <HourlyForecast hour="20:00"  />
                <HourlyForecast hour="22:00"  />
                <HourlyForecast hour="24:00"  /> */}
                
            </div>
        </div>
    )
}

export default Content