import React, { useEffect, useState } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
export default function EndTrips(){
    const [provinces , setProvinces]=useState([])

    useEffect(()=>{
        fetch('https://hesarak-backend.vercel.app/api/provinces')
        .then(Response => Response.json())
        .then(data =>{
            setProvinces(data.data)
        })
        .catch(error=>{
            console.log('خطا در گرفتن دیتا:', error)
        })
    })
    return(
        <div className="w-[45%] h-full relative">
            <label htmlFor="endTrips" className="text-[10px]">شهرمقصد</label>
            <input type="text" id="endTrips" className="w-full  border-0 border-b-2 border-transparent focus:border-b-blue-500 focus:outline-none peer" />
            <MdOutlineArrowDropDown className="text-light-500 text-[30px] absolute top-[10px] left-[0px]" />

            <ul className='w-full h-[210px] py-3 px-2 bg-white absolute bottom-[30px] opacity-0 peer-focus:opacity-100 transition duration-75 shadow-md rounded-sm'>
            {provinces.map((province)=>(
                <li className='font-ShabnamMedium w-full h-[35px] cursor-pointer'>{province}</li>
            ))}
            </ul>
        </div>
    )
}