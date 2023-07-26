import React from 'react'

const HourlyForecast = ({hour,hour_condition, hour_temp}) => {
    
    return (
        <div className='flex-col flex items-center justify-center rounded-md my-2 w-20 h-[150px] bg-white bg-opacity-[0.05] backdrop-blur-lg drop-shadow-lg hover:bg-opacity-[0.15] hover:border-[1px] hover:border-[white] hover:border-opacity-20'>
            <div className='text-white font-normal text-lg'>{hour}</div>
            <div className='h-[2px] w-12 bg-white mt-1 mb-2 bg-opacity-10'></div>
            <div className='bg-white w-12 h-12 bg-opacity-[0.1] backdrop-blur-lg drop-shadow-lg rounded-md mt-2 p-1'>
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
            <div className='text-white font-normal text-xl'>{Math.round(hour_temp)}°C</div>
        </div>
    )
}

export default HourlyForecast