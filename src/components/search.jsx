import { useEffect, useState } from 'react';
import { useProvince } from './ProvinceContext';
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import StartTrips from "./startTrips"
import AfghanDatePicker from "./AfghanDatePicker";

export default function Search() {
    const { startProvince, endProvince, travelDate } = useProvince();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (startProvince && endProvince && travelDate) {
            setError("");
        }
    }, [startProvince, endProvince, travelDate]);
        
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!startProvince || !endProvince || !travelDate) {
            setError("لطفاً شهر مبداء، شهر مقصد و تاریخ حرکت را انتخاب نمایید.");
        } else {
            setError("");
            const apiUrl = `https://hesarak-backend.vercel.app/api/trips/search?from=${startProvince}&to=${endProvince}&date=${travelDate}`;
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("خطا در دریافت اطلاعات از سرور");
                    }
                    return response.json();
                })
                .then(data => {
                    navigate(`/trips?from=${startProvince}&to=${endProvince}&date=${travelDate}`, {
                        state: {
                            trips: data.data.trips, // فقط آرایه ارسال شود
                            searchParams:data.data.searchParams
                        }
                    })
                    // console.log(data)
                })
                .catch(error => {
                    navigate("trips")
                });
        }
    };



    return (
        <form onSubmit={handleSubmit} className="w-full  flex flex-wrap   justify-between  lg:gap-x-3  px-[30px] text-DarkGray">
            <div className="w-full lg:w-[55%] h-[55px] border rounded-md px-[10px] py-[9px] flex justify-between font-ShabnamMedium text-[14px] items-center">
                <StartTrips />

            </div>
            <div className="w-full lg:w-[43%] h-[45px]  rounded-md font-ShabnamMedium flex mt-[15px] md:lg-0">
                <AfghanDatePicker />
                <button type="submit" className="w-[49%] bg-DarkGray
                                 text-white 
                                  custom-neomorphic-shadow_social
                                  flex justify-center items-center 
                                  font-ShabnamLight 
                                  text-sm
                                  rounded-[100px]">
                    <FaSearch className="ml-1" />
                    جـستجـو
                </button>
            </div>


            {/* نمایش خطا */}
            {error && (
                <p className="text-red-500 text-[12px] w-full text-sm mt-2 text-right font-ShabnamLight">{error}</p>
            )}
        </form>
    )
}