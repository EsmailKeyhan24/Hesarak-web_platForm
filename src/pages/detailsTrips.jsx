

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GoSquareFill } from "react-icons/go";
import bus from "../assets/image/no-trips.webp";
import { GiBusDoors ,GiSteeringWheel  } from "react-icons/gi";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../assets/Css/DetailsTripsCssSlider.css"



export default function DetailsTrips() {
    const navigate = useNavigate();
    const [buslayout, setBuslayout] = useState([]);
    const [detailsTrips, setDetailsTrips] = useState();
    const [totalPrice, setTotalPrice] = useState(0);
    const [stops, setStops] = useState([]);
    const [searchParams] = useSearchParams();
    const tripId = searchParams.get("tripId");
    const [imageBus, setImageBus] = useState([]);
    const date = searchParams.get("date");
    const [selectedSeat, setSelectedSeat] = useState([]);
    const [warning, setWarning] = useState("");

    useEffect(() => {
        const apiUrl = `https://hesarak-backend.vercel.app/api/trips/${tripId}/date/${date}`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setBuslayout(data.data.busLayout || []);
                console.log(buslayout)
                setDetailsTrips(data.data);
                setStops(data.data.stops || []);
                setImageBus(data.data.bus.images)
            });
    }, [tripId, date]);

    useEffect(()=>{
        console.log(imageBus)
    },[imageBus])

    useEffect(() => {
        if (detailsTrips && detailsTrips.price) {
            const total = selectedSeat.length * detailsTrips.price;
            setTotalPrice(total);
        }
    }, [selectedSeat, detailsTrips]);

    const handleBooking = (seatItem) => {
        const isDisabled = seatItem.isBooked || seatItem.isDisabled;
        if (isDisabled) return;

        setSelectedSeat((prev) => {
            const alreadySelected = prev.includes(seatItem.id);
            if (alreadySelected) {
                return prev.filter((id) => id !== seatItem.id);
            } else {
                if (prev.length >= 2) {
                    setWarning("شما فقط می‌توانید دو صندلی انتخاب کنید.");
                    return prev;
                }
                return [...prev, seatItem.id];
            }
        });
    };

    useEffect(() => {
        if (warning) {
            const timer = setTimeout(() => setWarning(""), 1500);
            return () => clearTimeout(timer);
        }
    }, [warning]);

    const maxRow = Math.max(...buslayout.map((item) => item.position?.row || 0));
    const maxCol = Math.max(...buslayout.map((item) => item.position?.col || 0));

    const handleSubmitBooking = async () => {
        if (selectedSeat.length === 0) {
            setWarning("لطفاً حداقل یک صندلی انتخاب کنید.");
            return;
        }

        try {
            const checkAuth = await fetch(
                "https://hesarak-backend.vercel.app/api/users/me",
                { credentials: "include" }
            );

            if (checkAuth.status !== 200) {
                navigate("/login");
                return;
            }

            const payload = {
                tripId,
                date,
                seatIds: selectedSeat,
            };

            const res = await fetch(
                "https://hesarak-backend.vercel.app/api/book-ticket",
                {
                    method: "POST",
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                }
            );

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`خطا در ثبت تکت: ${errorText}`);
            }

            navigate("/tickets", { replace: true });
            setSelectedSeat([]);
        } catch (err) {
            setWarning(err.message || "خطایی رخ داده است");
            console.error(err);
        }
    };

    return (
        <section className="w-full min-h-[100vh] mt-[60px] py-6 px-4 bg-slate-100">
            <div className="container mx-auto border">
                {/* Warning Message */}
                {warning && (
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 transform -translate-y-4 ${warning ? "max-h-20 opacity-100 translate-y-0" : ""
                            }`}
                    >
                        <p className="text-red-600 text-center mt-2 font-ShabnamLight bg-red-100 py-2 rounded">
                            {warning || "\u00A0"}
                        </p>
                    </div>
                )}

                {/* Trip Details */}
                <section className="w-fit md:h-[50px] bg-white rounded-md shadow-sm py-3 px-5 text-[19px]">
                    {detailsTrips ? (
                        <div className="flex gap-1 items-center w-full h-full flex-wrap">
                            <h3 className="font-ShabnamBold">
                                {detailsTrips.from.province} - {detailsTrips.to.name} ___
                            </h3>
                            <span className="font-ShabnamLight text-[14px]">
                                {detailsTrips.originalDate} ___
                            </span>
                            <span className="font-ShabnamLight text-[14px]">
                                {detailsTrips.departureTime} ___
                            </span>
                            <img src={bus} alt="bus" className="w-[30px] h-[30px]" />
                            <span className="font-ShabnamLight text-[14px] font-bold">
                                {detailsTrips.bus.type.name}
                            </span>
                            {stops && stops[0] && (
                                <>
                                    <strong className="font-ShabnamLight text-[14px] font-bold">
                                        آخرین مسیر: {stops[0].terminal.name}__
                                    </strong>
                                    <span className="font-ShabnamLight text-[14px] font-bold">
                                        آدرس: {stops[0].terminal.address}
                                    </span>
                                </>
                            )}
                        </div>
                    ) : (
                        <p className="font-ShabnamLight text-[14px]">
                            در حال بارگذاری اطلاعات سفر...
                        </p>
                    )}
                </section>

                {/* Seats Layout */}
                <section className="w-full flex flex-wrap justify-between mt-5">
                    <section className="bg-white mt-[20px] w-[300px] sm:w-[40%] md:w-[35%] lg:w-[25%] xl:w-[22%] mx-auto rounded-lg">
                        <div className="w-full p-4 flex flex-wrap justify-between">
                            <span className="font-bold font-ShabnamBold text-[12px]">
                                انتخاب صندلی
                            </span>
                            <span className="font-bold font-ShabnamBold text-[12px]">
                                قیمت: {detailsTrips?.price?.toLocaleString()} افغانی
                            </span>
                            <p className="font-ShabnamLight text-[13px] w-full">
                                صندلی مورد علاقه تان را انتخاب کنید.
                            </p>
                        </div>

                        <div className="w-[86%] h-[30px] rounded-[100px] bg-lightGray flex justify-center items-center mx-auto">
                           <p className="font-ShabnamLight text-[11px] font-bold">شما امکان انتخاب بیش از 2 چوکی را ندارید.</p>
                         </div>
                        {/* Legend */}
                        <div className="w-[95%] mx-auto border-t-2 border-[#222] flex justify-between my-2">
                            <div className="flex items-center gap-1">
                                <GoSquareFill className="text-[#222] text-[30px]" />
                                <span className="font-ShabnamBold text-[12px]">پر</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <GoSquareFill className="text-lightGray text-[30px]" />
                                <span className="font-ShabnamBold text-[12px]">خالی</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <GoSquareFill className="text-green-500 text-[30px]" />
                                <span className="font-ShabnamBold text-[12px]">انتخاب شده</span>
                            </div>
                        </div>

                        {/* Seats Grid */}
                        <div
                            className="grid bg-white p-4 rounded-md w-max mx-auto gap-2 border"
                            style={{
                                gridTemplateColumns: `repeat(${maxCol}, minmax(30px, 1fr))`,
                                gridTemplateRows: `repeat(${maxRow}, minmax(30px, 1fr))`,
                                direction: "ltr",
                            }}
                        >
                            {buslayout.map((item) => {
                                const { row, col } = item.position || {};
                                const rowSpan = item.size?.rowSpan || 1;
                                const colSpan = item.size?.colSpan || 1;

                                let content = null;
                                let bg = "";
                                let text = "";

                                if (item.type === "driver") {
                                    bg = "bg-yellow-700 text-white";
                                    content = (
                                        <div className="w-full h-full flex items-center justify-center font-bold rounded">
                                            <GiSteeringWheel className="text-[30px]" />
                                        </div>
                                    );
                                } else if (item.type === "seat") {
                                    const isDisabled = item.isBooked || item.isDisabled;
                                    const isSelected = selectedSeat.includes(item.id);
                                    text = item.seatNumber;

                                    bg = isDisabled
                                        ? "bg-[#222] text-white font-bold cursor-not-allowed"
                                        : isSelected
                                            ? "bg-green-500 text-white font-bold"
                                            : "bg-lightGray text-black font-bold";

                                    content = (
                                        <button
                                            className={`w-full h-full rounded ${bg}`}
                                            disabled={isDisabled}
                                            onClick={() => handleBooking(item)}
                                        >
                                            {text}
                                        </button>
                                    );
                                } else if (item.type === "wc") {
                                    bg = "bg-blue-400 text-white";
                                    content = (
                                        <div className="w-full h-full flex items-center justify-center rounded">
                                            WC
                                        </div>
                                    );
                                } else if (item.type === "door") {
                                    bg = "bg-yellow-500 text-white";
                                    content = (
                                        <div className="w-full h-full flex items-center justify-center rounded">
                                            <GiBusDoors className="text-[30px]" />
                                        </div>
                                    );
                                }

                                return (
                                    <div
                                        key={item.id}
                                        style={{
                                            gridColumn: `${col} / span ${colSpan}`,
                                            gridRow: `${row} / span ${rowSpan}`,
                                        }}>
                                        {content}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Total & Booking Button */}
                        <div className="my-[10px] w-full flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                                <strong className="font-ShabnamBold text-[12px]">مجموع:</strong>
                                <span className="text-green-500 font-bold text-[12px]">
                                    {totalPrice.toLocaleString()} افغانی
                                </span>
                            </div>
                            <button
                                disabled={selectedSeat.length === 0}
                                className={`w-[170px] h-[45px] bg-DarkGray text-white font-ShabnamBold rounded-lg ${selectedSeat.length === 0
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                                    }`}
                                onClick={handleSubmitBooking}
                            >
                                ثبت تکت
                            </button>
                        </div>
                    </section>

                    {/* Placeholder for Right Panel */}
                    <div className="bg-white w-full sm:w-[59%] md:w-[64%] lg:w-[74%] xl:w-[77%] mt-[20px] rounded-lg p-[15px]">
                            {imageBus.length > 0 && <ImgBusSlider images={imageBus} />}
                            <section className="bg-DarkGray rounded-md text-white py-[4px] px-[10px]">
                                <span className="font-ShabnamBold">نــوت</span>
                                <p className="font-ShabnamLight">مسوٌلیت اجناس از قبیل زیورات و پول نقد و اجناس ممنوع  بدوش مسافر میباشد،درغیرآن صورت حق شکایت را ندارد.</p>
                            </section>
                    </div>
                </section>
            </div>
        </section>
    );
}



// function ImgBusSlider({ images }) {  // Receive images prop
//     const [currentSlide, setCurrentSlide] = useState(0)
//     const [loaded, setLoaded] = useState(false)
//     const [sliderRef, instanceRef] = useKeenSlider({
//         initial: 0,
//         slideChanged(slider) {
//             setCurrentSlide(slider.track.details.rel)
//         },
//         created() {
//             setLoaded(true)
//         },
//     })

//     return (
//         <>
//             <div className="navigation-wrapper">
//                 <div ref={sliderRef} className="keen-slider">
//                     {images.map((image, index) => (
//                         <div key={index} className="keen-slider__slide">
//                             <img 
//                                 src={image.url} 
//                                 alt={`Bus view ${index + 1}`}
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                     ))}
//                 </div>
//                 {loaded && instanceRef.current && (
//                     <>
//                         <Arrow
//                             left
//                             onClick={(e) =>
//                                 e.stopPropagation() || instanceRef.current?.prev()
//                             }
//                             disabled={currentSlide === 0}
//                         />
//                         <Arrow
//                             onClick={(e) =>
//                                 e.stopPropagation() || instanceRef.current?.next()
//                             }
//                             disabled={
//                                 currentSlide ===
//                                 instanceRef.current.track.details.slides.length - 1
//                             }
//                         />
//                     </>
//                 )}
//             </div>
//             {loaded && instanceRef.current && (
//                 <div className="dots">
//                     {[
//                         ...Array(instanceRef.current.track.details.slides.length).keys(),
//                     ].map((idx) => {
//                         return (
//                             <button
//                                 key={idx}
//                                 onClick={() => {
//                                     instanceRef.current?.moveToIdx(idx)
//                                 }}
//                                 className={"dot" + (currentSlide === idx ? " active" : "")}
//                             ></button>
//                         )
//                     })}
//                 </div>
//             )}
//         </>
//     )
// }

function ImgBusSlider({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderLoaded, setSliderLoaded] = useState(false);
    const [slidesCount, setSlidesCount] = useState(0);
  
    const [sliderRef, instanceRef] = useKeenSlider({
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created(slider) {
        setSliderLoaded(true);
        setSlidesCount(slider.track.details.slides.length);
      },
    });
  
    return (
      <>
        <div className="navigation-wrapper w-full h-[350px] bg-[gray]">
          <div ref={sliderRef} className="keen-slider">
            {images.map((image, index) => (
              <div key={index} className="keen-slider__slide">
                <img
                  src={`https://hesarak-backend.vercel.app${image.url}`}
                  alt={`Bus view ${index + 1}`}
                  className="w-full h-[350px] object-cover"
                />
              </div>
            ))}
          </div>
          {sliderLoaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={() => instanceRef.current?.prev()}
                disabled={currentSlide === 0}
              />
              <Arrow
                onClick={() => instanceRef.current?.next()}
                disabled={currentSlide === slidesCount - 1}
              />
            </>
          )}
        </div>
  
        {sliderLoaded && slidesCount > 0 && (
          <div className="dots">
            {Array.from({ length: slidesCount }, (_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            ))}
          </div>
        )}
      </>
    );
  }
  

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}