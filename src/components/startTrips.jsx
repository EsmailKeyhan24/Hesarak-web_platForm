import React, { useEffect, useState } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useProvince } from './ProvinceContext';
import { CgArrowsExchange } from "react-icons/cg";

export default function StartTrips() {
    const [provinces, setProvinces] = useState([]);
    const [startInput, setStartInput] = useState("");
    const [endInput, setEndInput] = useState("");

    const { setStartProvince, setEndProvince } = useProvince();

    useEffect(() => {
        fetch('https://hesarak-backend.vercel.app/api/provinces')
            .then(response => response.json())
            .then(data => {
                setProvinces(data.data);
            })
            .catch(error => {
                console.log('خطا در گرفتن دیتا:', error)
            })
    }, []);

    const handleChooseStartProvince = (provinceName) => {
        setStartProvince(provinceName);
        setStartInput(provinceName); // نمایش در input
    }

    const handleChooseEndProvince = (provinceName) => {
        setEndProvince(provinceName);
        setEndInput(provinceName); // نمایش در input
    }

    return (
        <section className='w-full flex justify-between'>
            {/* ______StartTrips________________ */}
            <div className="w-[45%] h-full relative">
                <label htmlFor="startTrips" className="text-[10px]">شهر مبداء</label>
                <MdOutlineArrowDropDown className="text-light-500 text-[30px] absolute top-[10px] left-[0px]" />
                <input
                    type="text"
                    autoComplete='off'
                    id="startTrips"
                    className="w-full border-0 border-b-2 border-transparent focus:border-b-blue-500 focus:outline-none peer text-blue-700"
                    value={startInput}
                    onChange={(e) => setStartInput(e.target.value)} // اگر کاربر خواست دستی بنویسد
                />
                {/* _____GET__DATA___ */}
                <ul className='w-full h-[210px] py-3 px-2 bg-white absolute bottom-[30px] opacity-0 peer-focus:opacity-100 transition duration-75 shadow-md rounded-sm z-10'>
                    {provinces.map((province, index) => (
                        <li key={index}
                            className='font-ShabnamLight w-full h-[35px] cursor-pointer hover:bg-gray-100 px-2'
                            onClick={() => handleChooseStartProvince(province)}>
                            <strong className='flex w-full'>{province}</strong>
                        </li>
                    ))}
                </ul>
            </div>

            <CgArrowsExchange className="text-[22px] bg-light rounded-[50%] mt-[10px]" />

            {/* ______EndTrips________________ */}
            <div className="w-[45%] h-full relative">
                <label htmlFor="endTrips" className="text-[10px]">شهر مقصد</label>
                <MdOutlineArrowDropDown className="text-light-500 text-[30px] absolute top-[10px] left-[0px]" />
                <input
                    type="text"
                    id="endTrips"
                    autoComplete='off'
                    className="w-full border-0 border-b-2 border-transparent focus:border-b-blue-500 focus:outline-none peer text-blue-700"
                    value={endInput}
                    onChange={(e) => setEndInput(e.target.value)}
                />
                <ul className='w-full h-[210px] py-3 px-2 bg-white absolute bottom-[30px] opacity-0 peer-focus:opacity-100 transition duration-75 shadow-md rounded-sm z-10'>
                    {provinces.map((province, index) => (
                        <li key={index}
                            className='font-ShabnamLight w-full h-[35px] cursor-pointer hover:bg-gray-100 px-2'
                            onClick={() => handleChooseEndProvince(province)}>
                            <strong className='flex w-full'>{province}</strong>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
