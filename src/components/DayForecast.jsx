import React from 'react'

const DayForecast = ({day_condition, day_max_temp, day_min_temp}) => {
    return (
        <div className='flex items-center hover:bg-white hover:bg-opacity-[0.1] hover:backdrop-blur-lg hover:drop-shadow-lg hover:rounded-md'>
            <div className='bg-white w-10 h-10 bg-opacity-[0.1] backdrop-blur-lg drop-shadow-lg rounded-md m-2 p-1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                    <rect width={256} height={256} fill="none" />
                    <line
                        x1={128}
                        y1={240}
                        x2="154.3"
                        y2={200}
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={8}
                    />
                    <line
                        x1="98.7"
                        y1={208}
                        x2="130.3"
                        y2={160}
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={8}
                    />
                    <path
                        d="M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={8}
                    />
                </svg>

            </div>
            <div className='flex flex-col justify-between items-start font-light text-sm w-36 p-1'>
                <div className='text-white'>Friday, April 21</div>
                <div className='text-gray-400'>Heavy Rain</div>
            </div>
            <div className='h-10 w-[1px] bg-white bg-opacity-20 ml-3'></div>
            <div className='flex flex-col justify-between items-center w-7 h-10'>
                <div className='text-white font-light text-xs'>{Math.round(day_min_temp)}°</div>
                <div className='text-white font-light text-xs'>{Math.round(day_max_temp)}°</div>
            </div>
        </div>
    )
}

export default DayForecast