    import { useEffect, useState } from "react";
    import { useSearchParams } from "react-router-dom";
    import { GoSquareFill } from "react-icons/go";
    import bus from "../assets/image/no-trips.webp";

    export default function DetailsTrips() {
        const [buslayout, setBuslayout] = useState([]);
        const [detailsTrips, setDetailsTrips] = useState();
        const [totalPrice, setTotalPrice] = useState(0);
        const [stops, setStops] = useState([]);
        const [searchParams] = useSearchParams();
        const tripId = searchParams.get("tripId");
        const date = searchParams.get("date");
        const [selectedSeat, setSelectedSeat] = useState([]);
        const [warning, setWarning] = useState("");

        useEffect(() => {
            const apiUrl = `https://hesarak-backend.vercel.app/api/trips/${tripId}/date/${date}`;
            fetch(apiUrl)
                .then((res) => res.json())
                .then((data) => {
                    setBuslayout(data.data.busLayout || []);
                    setDetailsTrips(data.data);
                    setStops(data.data.stops || []);
                    
                });
        }, []);


        useEffect(() => {
            if (detailsTrips && detailsTrips.price) {
                const total = selectedSeat.length * detailsTrips.price;
                setTotalPrice(total);
            }
        }, [selectedSeat, detailsTrips]);
        // _______________________handleBooking_______________
        const handleBooking = (seatItem) => {
            const isDisabled = seatItem.isBooked || seatItem.isDisabled;
            if (isDisabled) return;

            setSelectedSeat((prev) => {
                const alreadySelected = prev.includes(seatItem.id);

                if (alreadySelected) {
                    // اگر قبلاً انتخاب شده بود، حذفش کن
                    return prev.filter((id) => id !== seatItem.id);
                } else {
                    // اگر انتخاب نشده بود، بررسی کن که آیا دو تا قبلاً انتخاب شده؟
                    if (prev.length >= 2) {
                        setWarning("شما فقط می‌توانید دو سیت انتخاب کنید.");
                        return prev;
                    }
                    return [...prev, seatItem.id];
                }
            });
            console.log("Selected seats:", selectedSeat.length);
        };
        useEffect(() => {
            if (warning) {
                const timer = setTimeout(() => {
                    setWarning("");
                }, 1500); // 1000 میلی‌ثانیه = 1 ثانیه

                return () => clearTimeout(timer); // جلوگیری از تداخل تایمرهای قبلی
            }
        }, [warning]);



        // پیدا کردن بیشترین row و col برای تعیین grid
        const maxRow = Math.max(...buslayout.map((item) => item.position?.row || 0));
        const maxCol = Math.max(...buslayout.map((item) => item.position?.col || 0));

        return (
            <section className="w-full min-h-[100vh] mt-[60px] py-6 px-4 bg-slate-100">
                <div className="container mx-auto border">

                    {/* _____________________________warning_____________Message__________- */}
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
                                <img
                                    src={bus}
                                    alt="bus"
                                    className="w-[30px] h-[30px]"
                                />
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

                    {/* ________________________Start___OF____warper__ */}
                    <section className="w-full flex flex-wrap justify-between">
                        {/* ___________ Layout Grid ___________ */}
                        <section className="bg-white mt-[20px] w-[300px] sm:w-[40%] md:w-[35%] lg:w-[25%] xl:w-[22%] mx-auto rounded-lg">
                            <div className="w-full p-4 flex flex-wrap justify-between">
                                <span className="font-bold font-ShabnamBold text-[12px]">انتخاب چـوکی</span>
                                <span className="font-bold font-ShabnamBold text-[12px]">
                                        قیمت: {detailsTrips?.price?.toLocaleString()} افغانی
                                    </span>
                                <p className="font-ShabnamLight text-[13px] w-full">چـوکی مورد  علاقه تانرا از اینجان انتخاب نماید.</p>
                            </div>
                            <div className="w-[95%] mx-auto border-t-2 border-[#222] flex justify-between">
                                <section className="flex justify-start items-center">
                                    <GoSquareFill className="text-DarkGray text-[30px]" />
                                    <span className="font-ShabnamBold text-[12px]">پٌر</span>
                                </section>
                                <section className="flex justify-start items-center">
                                    <GoSquareFill className="text-lightGray text-[30px]" />
                                    <span className="font-ShabnamBold text-[12px]">خالی</span>
                                </section>
                                <section className="flex justify-start items-center">
                                    <GoSquareFill className="text-green-500 text-[30px]" />
                                    <span className="font-ShabnamBold text-[11px]">انتخاب شده</span>
                                </section>
                            </div>
                            <div className="w-[86%] h-[30px] rounded-[100px] bg-lightGray flex justify-center items-center mx-auto">
                                <p className="font-ShabnamLight text-[11px] font-bold">شما امکان انتخاب بیش از 2 چوکی را ندارید.</p>
                            </div>
                            {/* =================Sites___________ */}
                            <div
                                className={`grid bg-white p-4 rounded-md w-max mx-auto gap-2 border`}
                                style={{
                                    gridTemplateColumns: `repeat(${maxCol}, minmax(2.3px, 1fr))`,
                                    gridTemplateRows: `repeat(${maxRow}, minmax(3rem, 1fr))`,
                                }}
                            >
                                {buslayout.map((item) => {
                                    const { row, col } = item.position || {};
                                    const rowSpan = item.size?.rowSpan || 1;
                                    const colSpan = item.size?.colSpan || 1;

                                    let content = null;
                                    let bg = "bg-gray-300"; // default for unknown type
                                    let text = "";
                                    if (item.type === "driver") {

                                        content = (
                                            <div className="w-full h-full text-black flex items-center justify-center font-bold rounded text-xs">
                                                دریور
                                            </div>
                                        );
                                    } else if (item.type === "seat") {
                                        const isDisabled = item.isBooked || item.isDisabled;
                                        const isSelected = selectedSeat.includes(item.id);
                                        text = item.seatNumber;

                                        bg = isDisabled
                                            ? "bg-[#222222] text-white font-ShabnamBold cursor-not-allowed"
                                            : isSelected
                                                ? "bg-green-500 text-white font-ShabnamBold"
                                                : "bg-lightGray text-black font-ShabnamBold";

                                        content = (
                                            <button
                                                className={`w-full h-full ${bg} rounded`}
                                                disabled={isDisabled}
                                                onClick={() => handleBooking(item)}
                                            >
                                                {text}
                                            </button>
                                        );
                                    } else if (item.type === "wc") {
                                        bg = "bg-blue-400";
                                        content = (
                                            <div
                                                className={`w-full h-full ${bg} text-white flex items-center justify-center rounded`}
                                            >
                                                WC
                                            </div>
                                        );
                                    } else if (item.type === "door") {
                                        bg = "bg-yellow-500";
                                        content = (
                                            <div
                                                className={`w-full h-full ${bg} text-white flex items-center justify-center rounded`}
                                            >
                                                Door
                                            </div>
                                        );
                                    }

                                    return (
                                        <div
                                            key={item.id}
                                            className={`col-start-${col} row-start-${row} col-span-${colSpan} row-span-${rowSpan}`}
                                        >
                                            {content}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="my-[10px] w-full flex justify-center items-center flex-wrap">
                                <strong className="font-ShabnamBold text-[12px]">مجموع :</strong>
                                <span className="text-green-500 font-bold font-ShabnamMedium text-[12px]"> {totalPrice.toLocaleString()} افغانی</span>
                                <section className="w-full my-[20px] flex justify-center">
                                    <button className="w-[170px] h-[45px] bg-DarkGray text-white font-ShabnamBold rounded-lg cursor-pointer">ثبت تکت</button>
                                </section>
                            </div>
                        </section>
                        {/* _________Of_____Layout__Seats_________ */}


                        <div className="bg-white w-full sm:w-[59%] md:w-[64%] lg:w-[74%] xl:w-[77%] mt-[20px] rounded-lg p-[15px]">
                            
                        </div>
                    </section>
                    {/* ________________________end___OF____warper__ */}
                </div>
            </section>
        );
    }
