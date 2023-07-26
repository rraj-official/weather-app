import React from 'react'
import { useState } from "react";

const Search = ( {handleLocationChange, searchLocation} ) => {
    // const [searchText, setSearchText] = useState("");   
    // const handleSearchInputChange = (e) => {
    //     setSearchText(e.target.value);
    // };
    // const handleSearchEnter = (e) => {
    //     if (e.key === "Enter") {
    //       onSearch(searchText);
    //     }
    // }    
    const [locationtext, setLocationtext] = useState('')
    return (
        <div className='flex items-center w-56 h-[32px] border-[1px] border-white border-opacity-30 rounded-md my-8 hover:bg-white hover:bg-opacity-[0.1] hover:backdrop-blur-lg hover:drop-shadow-lg hover:rounded-md'>
            <div className='ml-[2px]'>
                <svg
                    style={{ color: "white", width: "24px", height: "24px", }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z"
                        fill="white"
                    />
                </svg>
            </div>
            <div>
                <input
                    value={locationtext}
                    onChange={event => {
                        setLocationtext(event.target.value)
                        handleLocationChange(event.target.value);
                    }}
                    onKeyPress={searchLocation}
                    placeholder='Enter Location'
                    className='font-light pt-1 pl-2 w-full h-full bg-transparent block mb-2 text-md text-white dark:text-white dark:text-white outline-none placeholder:text-gray-500'
                />

            </div>
        </div>

    )
}

export default Search