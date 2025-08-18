// import { useUser } from "../context/UserContext.jsx";
// import { useRef, useState, useEffect } from "react";
// import { FaLocationDot } from "react-icons/fa6";
// import { GiThrustBend } from "react-icons/gi";
// import { RiWheelchairFill } from "react-icons/ri";
// import { HiMiniCalendarDateRange } from "react-icons/hi2";
// import { PiListNumbersFill } from "react-icons/pi";
// import { GiMoneyStack } from "react-icons/gi";
// import { RiDownloadCloudFill } from "react-icons/ri";
// import { WiTime1 } from "react-icons/wi";
// import { GiDuration } from "react-icons/gi";
// import { BsBusFront } from "react-icons/bs";

// import dayjs from "dayjs";
// import jalali from "jalali-dayjs";
// dayjs.extend(jalali);



// export default function Tickets() {
//   const { user, setUser } = useUser();
//   console.log(user)
//   const [tickets, setTickets] = useState([]);
//   const ticketRefs = useRef({});

//   useEffect(() => {
//     fetch("https://hesarak-backend.vercel.app/api/user/tickets", {
//       credentials: "include",
//     })
//       .then((res) => res.json())
//       .then((data) => setTickets(data.data.tickets))
//       .catch((err) => console.error(err));
//   }, []);

//   const toPersianDigits = (str) =>
//     str.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

//   const handleDownloadPNG = (ticketId) => {
//     const element = ticketRefs.current[ticketId];
//     if (!element) return;

//     import("html2canvas").then(({ default: html2canvas }) => {
//       html2canvas(element, { scale: 2 }).then((canvas) => {
//         const link = document.createElement("a");
//         link.download = `ticket-${ticketId}.png`;
//         link.href = canvas.toDataURL("image/png");
//         link.click();
//       });
//     });
//   };

//   return (
//     <section className="w-full mt-[65px] min-h-[100vh] pt-[30px] bg-gray-100">
//       <div className="container lg:w-[80%] mx-auto">
//         <h2 className="font-ShabnamBold text-2xl text-center text-gray-800 mb-6">
//           🎫 تکت‌های من
//         </h2>

//         {tickets.length > 0 ? (
//           <div className="flex flex-col gap-6">
//             {tickets.map((ticket) => (
//               <div
//                 key={ticket._id}
//                 ref={(el) => (ticketRefs.current[ticket._id] = el)}
//                 className="bg-white p-5 rounded-xl shadow-md border border-gray-200 w-full max-w-md mx-auto"
//               >
//                 <div className="flex justify-between items-center mb-3">
//                   <span className="text-sm font-ShabnamLight text-gray-500">
//                     شماره تکت
//                   </span>
//                   <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
//                     {ticket.ticketNumber}
//                   </span>
//                 </div>

//                 <h3 className="font-ShabnamBold text-lg text-gray-800 mb-3">
//                   {ticket.trip.name}
//                 </h3>

//                 {user ? (
//         <>
//           <p>ID: {user.id}</p>
//           <p>نام: {user.name}</p>
//           <p>ایمیل: {user.email}</p>
//         </>
//       ) : (
//         <p>هیچ کاربری وارد نشده ❌</p>
//       )}
//                 <div className="space-y-1 text-sm font-ShabnamLight bg-gray-200 p-3 rounded-md">
//                   <p className="font-ShabnamBold my-[4px] flex"><FaLocationDot className="text-[25px] ml-[10px]"/> محل حرکت: <span className="font-ShabnamLight text-[11px]">{ticket.trip.from.name}</span></p>
//                   <p className="font-ShabnamBold my-[4px] flex"><GiThrustBend  className="text-[25px] ml-[10px]"/>پایان سفر: <span className="font-ShabnamLight text-[11px]">{ticket.trip.to.address}</span></p>
//                   <p className="font-ShabnamBold my-[4px] flex"><RiWheelchairFill className="text-[25px] ml-[10px]" /> چوکی‌ها: <span className="font-ShabnamLight text-[11px]">{ticket.booking.seats.map((s) => s.seatNumber).join(", ")}</span></p>
//                   <p className="font-ShabnamBold my-[4px] flex"><HiMiniCalendarDateRange  className="text-[25px] ml-[10px]"/> تاریخ: <span className="font-ShabnamLight text-[11px]">
//                     {toPersianDigits(dayjs(ticket.booking.date).locale('fa').format("YYYY/MM/DD"))}</span>
//                   </p>
//                   <p className="font-ShabnamBold my-[4px] flex"><WiTime1  className="text-[25px] ml-[10px]"/> حرکت: <span className="font-ShabnamLight text-[11px]">{ticket.trip.departureTime || "نامشخص"}</span></p>
//                   <p className="font-ShabnamBold my-[4px] flex"><GiDuration  className="text-[25px] ml-[10px]"/> مدت سفر: <span className="font-ShabnamLight text-[11px]">{ticket.trip.duration}</span></p>
//                   <p className="font-ShabnamBold my-[4px] flex"><PiListNumbersFill  className="text-[25px] ml-[10px]"/> شماره بس: <span className="font-ShabnamLight text-[11px]">{ticket.trip.bus.number}</span></p>
//                   <p className="font-ShabnamBold my-[4px] flex"><BsBusFront  className="text-[25px] ml-[10px]"/> نوعیت: <span className="font-ShabnamLight text-[11px]">{ticket.trip.bus.type.name}</span></p>
//                   <p className="font-ShabnamBold my-[4px] flex"><GiMoneyStack className="text-[25px] ml-[10px]" /> فی چوکی: <span className="font-ShabnamLight text-[11px]">{ticket.booking.pricePerSeat}</span> افغانی</p>
//                   <p className="font-ShabnamBold my-[4px]"><span className="text-[25px] ml-[10px]">💰</span> مجموع: <span className="font-ShabnamLight text-[11px]">{ticket.booking.totalPrice}</span> افغانی</p>
//                 </div>

//                 <div className="mt-3 flex justify-between items-center text-[10px]">
//                   <span
//                     className={`min-w-[120px] h-[30px] flex items-center justify-center rounded-full px-[9px] font-ShabnamBold leading-none ${
//                       ticket.status.isPaid ? "bg-DarkGray text-white" : "bg-DarkGray text-white"}`}>
//                     هزینه سفر {ticket.status.isPaid ? "پرداخت شده ✅" : "❌ پرداخت نشده ❌"}
//                   </span>

//                   <button
//                     onClick={() => handleDownloadPNG(ticket._id)}
//                     className="w-[120px] h-[30px] bg-blue-500 text-white rounded hover:bg-blue-600 text-sm flex justify-center items-center font-ShabnamBold leading-none">
//                     <RiDownloadCloudFill className="text-[22px] mx-[6px]"/> دانلود 
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">هیچ تکتی ثبت نشده است.</p>
//         )}
//       </div>
//     </section>
//   );
// }




import { useUser } from "../context/UserContext.jsx";
import { useRef, useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GiThrustBend } from "react-icons/gi";
import { RiWheelchairFill } from "react-icons/ri";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { PiListNumbersFill } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { RiDownloadCloudFill } from "react-icons/ri";
import { WiTime1 } from "react-icons/wi";
import { GiDuration } from "react-icons/gi";
import { BsBusFront } from "react-icons/bs";


import dayjs from "dayjs";
import jalali from "jalali-dayjs";
dayjs.extend(jalali);

export default function Tickets() {
  const { user, isLoggedIn } = useUser();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 حالت لودینگ
  const ticketRefs = useRef({});

  useEffect(() => {
    fetch("https://hesarak-backend.vercel.app/api/user/tickets", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setTickets(data.data.tickets);
        setLoading(false); // 👈 بعد از لود شدن
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); // 👈 حتی اگر خطا آمد هم لودینگ قطع شود
      });
  }, []);

  const toPersianDigits = (str) =>
    str.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

  const handleDownloadPNG = (ticketId) => {
    const element = ticketRefs.current[ticketId];
    if (!element) return;

    import("html2canvas").then(({ default: html2canvas }) => {
      html2canvas(element, { scale: 2 }).then((canvas) => {
        const link = document.createElement("a");
        link.download = `ticket-${ticketId}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    });
  };

  if (!isLoggedIn) return <p>لطفاً وارد شوید</p>;
  return (
    <section className="w-full mt-[65px] min-h-[100vh] pt-[30px] bg-gray-100">
      <div className="container lg:w-[80%] mx-auto">
        <h2 className="font-ShabnamBold text-2xl text-center text-gray-800 mb-6">
            🎫 تکت‌های {user?.name}
        </h2>
        {loading ? ( // 👈 نمایش متن لودینگ
          <p className="text-center text-gray-500">در حال بارگذاری تکت‌های شما...</p>
        ) : tickets.length > 0 ? (
          <div className="flex flex-col gap-6">
            {tickets.map((ticket) => (
              <div
                key={ticket._id}
                ref={(el) => (ticketRefs.current[ticket._id] = el)}
                className="bg-white p-5 rounded-xl shadow-md border border-gray-200 w-full max-w-md mx-auto"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-ShabnamLight text-gray-500">
                    شماره تکت
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
                    {ticket.ticketNumber}
                  </span>
                </div>

                <h3 className="font-ShabnamBold text-lg text-gray-800 mb-3">
                  {ticket.trip.name}
                </h3>

                {user ? (
                  <>
                    <p>ID: {user.id}</p>
                    <p>نام: {user.name}</p>
                    <p>ایمیل: {user.email}</p>
                  </>
                ) : (
                  <p>هیچ کاربری وارد نشده ❌</p>
                )}

                <div className="space-y-1 text-sm font-ShabnamLight bg-gray-200 p-3 rounded-md">
                  <p className="font-ShabnamBold my-[4px] flex">
                    <FaLocationDot className="text-[25px] ml-[10px]" /> محل حرکت:{" "}
                    <span className="font-ShabnamLight text-[11px]">
                      {ticket.trip.from.name}
                    </span>
                  </p>
                  <p className="font-ShabnamBold my-[4px] flex">
                    <GiThrustBend className="text-[25px] ml-[10px]" />
                    پایان سفر:{" "}
                    <span className="font-ShabnamLight text-[11px]">
                      {ticket.trip.to.address}
                    </span>
                  </p>
                  <p className="font-ShabnamBold my-[4px] flex">
                    <RiWheelchairFill className="text-[25px] ml-[10px]" /> چوکی‌ها:{" "}
                    <span className="font-ShabnamLight text-[11px]">
                      {ticket.booking.seats.map((s) => s.seatNumber).join(", ")}
                    </span>
                  </p>
                  <p className="font-ShabnamBold my-[4px] flex">
                    <HiMiniCalendarDateRange className="text-[25px] ml-[10px]" />{" "}
                    تاریخ:{" "}
                    <span className="font-ShabnamLight text-[11px]">
                      {toPersianDigits(
                        dayjs(ticket.booking.date)
                          .locale("fa")
                          .format("YYYY/MM/DD")
                      )}
                    </span>
                  </p>
                  <p className="font-ShabnamBold my-[4px] flex">
                    <WiTime1 className="text-[25px] ml-[10px]" /> حرکت:{" "}
                    <span className="font-ShabnamLight text-[11px]">
                      {ticket.trip.departureTime || "نامشخص"}
                    </span>
                  </p>
                  <p className="font-ShabnamBold my-[4px] flex">
                    <GiDuration className="text-[25px] ml-[10px]" /> مدت سفر:{" "}
                    <span className="font-ShabnamLight text-[11px]">
                      {ticket.trip.duration}
                    </span>
                  </p>
                  <p className="font-ShabnamBold my-[4px] flex">
                    <PiListNumbersFill className="text-[25px] ml-[10px]" /> شماره بس:{" "}
                    <span className="font-ShabnamLight text-[11px]">
                      {ticket.trip.bus.number}
                    </span>
                  </p>
                  <p className="font-ShabnamBold my-[4px] flex">
                    <BsBusFront className="text-[25px] ml-[10px]" /> نوعیت:{" "}
                    <span className="font-ShabnamLight text-[11px]">
                      {ticket.trip.bus.type.name}
                    </span>
                  </p>
                  <p className="font-ShabnamBold my-[4px] flex">
                    <GiMoneyStack className="text-[25px] ml-[10px]" /> فی چوکی:{" "}
                    <span className="font-ShabnamLight text-[11px]">
                      {ticket.booking.pricePerSeat}
                    </span>{" "}
                    افغانی
                  </p>
                  <p className="font-ShabnamBold my-[4px]">
                    <span className="text-[25px] ml-[10px]">💰</span> مجموع:{" "}
                    <span className="font-ShabnamLight text-[11px]">
                      {ticket.booking.totalPrice}
                    </span>{" "}
                    افغانی
                  </p>
                </div>

                <div className="mt-3 flex justify-between items-center text-[10px]">
                  <span
                    className={`min-w-[120px] h-[30px] flex items-center justify-center rounded-full px-[9px] font-ShabnamBold leading-none ${
                      ticket.status.isPaid
                        ? "bg-DarkGray text-white"
                        : "bg-DarkGray text-white"
                    }`}
                  >
                    هزینه سفر{" "}
                    {ticket.status.isPaid
                      ? "پرداخت شده ✅"
                      : "❌ پرداخت نشده ❌"}
                  </span>

                  <button
                    onClick={() => handleDownloadPNG(ticket._id)}
                    className="w-[120px] h-[30px] bg-blue-500 text-white rounded hover:bg-blue-600 text-sm flex justify-center items-center font-ShabnamBold leading-none"
                  >
                    <RiDownloadCloudFill className="text-[22px] mx-[6px]" /> دانلود
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">هیچ تکتی ثبت نشده است.</p>
        )}
      </div>
    </section>
  );
}
