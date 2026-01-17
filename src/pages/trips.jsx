import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { BsBusFront , BsFillCalendar2DateFill } from "react-icons/bs";
import { MdOutlineAirlineSeatReclineNormal , MdAccessTime } from "react-icons/md";
import noTrips from "../assets/image/no-trips.webp";
import { FaLongArrowAltLeft } from "react-icons/fa";




export default function Trips() {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [trips, setTrips] = useState(location.state?.trips || []);
    const [searchInfo, setSearchInfo] = useState(location.state?.searchParams || null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const from = searchParams.get("form");
    const to = searchParams.get("to");
    const date = searchParams.get("date");

    useEffect(() => {
        if (!trips || trips.length === 0) {
            setLoading(true);
            const apiUrl = `https://hesarak-backend.vercel.app/api/available-trips?from=${from}&to=${to}&date=${date}`;
            fetch(apiUrl)
                .then(res => res.json())
                .then(data => {
                    // setTrips(data?.data?.trips || []);
                    setTrips(data?.data?.trips || []);  
                    console.log(data)
                })
                .catch(err => {
                    setError("خطا در دریافت اطلاعات از سرور");
                })
                .finally(() => setLoading(false));
        }
    }, [from, to, date]);

    if (loading) return <p className="text-center mt-8">⏳ در حال دریافت اطلاعات...</p>;
    if (error) return <p className="text-center text-red-500 mt-8">{error}</p>;

    return (
        <section className="w-full min-h-screen  mt-[60px] py-6 px-4">
            <div className="container mx-auto">
                

                {trips.length === 0 ? (
                    <div className="w-full flex  content-start justify-center flex-wrap h-[100vh]">
                        <p className="text-center w-full text-[red] font-ShabnamBold  text-xl">هیچ سفری برای این مسیر موجود نیست.</p>
                        <img src={noTrips} alt='هیچ سفر یافت نشد' className="w-full md:w-[450px] h-[450px]" />
                    </div>
                ) : (
                    trips.map((trip, index) => (
                        <Link to={`/detailsTrips?tripId=${trip.id}&date=${date}`} key={index}>   
                        <div key={index} className="w-full lg:w-[60%] mx-auto bg-white rounded-md shadow-md p-4 mb-3 space-y-2">
                            <h3 className="font-ShabnamMedium text-[15px] flex items-center  h-[30px] px-[14px] rounded-[100px] justify-between  relative 
                            after:content-[''] after:absolute after:bottom-3 after:left-1/2 after:-translate-x-[52%]
                            after:w-[60%] after:xl:w-[80%] after:border-b after:border-b-[2px] after:border-b-[#2222] after:border-dashed
                            ">
                                  <strong>تکت {trip.from?.province}</strong>
                                  <strong>{trip.to?.province} </strong>
                            </h3>
                            <section className="w-full  translate-y-[-15px] pr-5">
                                <span className="font-ShabnamLight  font-black text-[10px]">{trip.frequency==='daily' ? 'همه روزه' : trip.frequency}</span>
                            </section>
                            <section className="w-full  flex h-[40px] items-center">        
                                <span className="font-bold font-ShabnamBold">{toPersianDigits(trip.departureTime)}</span>
                                <span className="flex w-[20%] h-0 border"></span>
                                <span className="font-ShabnamLight text-[11px] text-slate-500 mx-[5px]">{formatDuration(trip.duration)}</span>
                                <span className="flex w-[20%] h-0 border"></span>
                                <span className="font-bold font-ShabnamBold text-[12px]">{toPersianDigits(trip.arrivalTime)}</span>
                                <span className="flex w-[10%] h-0 border"></span>
                                <strong className="font-ShabnamBold mr-3 text-[10px]">قیمت{trip.price}افغانی</strong>
                            </section>


                            <section className="w-full  flex flex-wrap items-center px-3 py-[10px] md:py-0 md:h-[45px] my-[15px] rounded-[100px] justify-evenly custom-neomorphic-shadow border-[10px]">
                                <strong className="font-ShabnamBold text-[14px] flex"><BsBusFront />{trip.bus.type.name} </strong> 
                                <span className="font-ShabnamLight mx-[12px] font-bold flex"><MdOutlineAirlineSeatReclineNormal />{trip.availability.totalSeats} </span>
                                <span className="font-ShabnamLight mx-[12px] text-[14px] font-bold">چوکی خالی:{trip.availability.availableSeats}</span>
                                {searchInfo && (<span className="text-black font-ShabnamMedium text-[13px] flex"><BsFillCalendar2DateFill />{searchInfo.originalDate}</span>)}
                                <span className="font-bold font-ShabnamBold flex"><MdAccessTime />{toPersianDigits(trip.departureTime)}</span>
                            </section>
                            <button className="w-[180px] h-[40px] bg-DarkGray text-white rounded-md font-ShabnamMedium flex justify-evenly items-center"><FaLongArrowAltLeft className="text-[25px]" /> ثبت تکت </button>
                            <section className="w-full flex items-center px-3 h-[45px]">
                                <strong className="font-ShabnamBold text-sm">مسـیرها: </strong>
                            </section>
                            {/* بقیه مشخصات */}
                        </div>
                        </Link>
                    ))
                )}
            </div>
        </section>
    );
}



function formatDuration(duration) {
    if (!duration) return "";
  
    return duration
      .replace(/(\d+)\s*h/, '$1 ساعت')
      .replace(/(\d+)\s*m/, '$1 دقیقه');
}

function toPersianDigits(str) {
    return str.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
}

