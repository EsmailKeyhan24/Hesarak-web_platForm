// import React, { useEffect } from "react";
// import { useState } from "react";
// export default function About() {
//     const [tickets, setTickets] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         const token = localStorage.getItem("token"); // توکن رو از localStorage بخون
//         fetch('https://hesarak-backend.vercel.app/api/user/tickets', {
//             method: 'GET',
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${token}` // فرستادن توکن برای احراز هویت
//             }
//         })
//             .then(async (res) => {
//                 if (!res.ok) {
//                     throw new Error(`خطا: ${res.status}`);
//                 }
//                 return res.json()
//             })
//             .then(data => {
//                 setTickets(data.data.tickets);
//                 console.log(data.data.tickets)
//             })
//             .catch((err) => {
//                 setError(err.message);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, [])
//     if (loading) return <p>در حال بارگذاری...</p>;
//     if (error) return <p>خطا: {error}</p>;

//     return (
//         <section className="w-full mt-[65px] min-h-[100vh] pt-[30px]">
//             <div className="container lg:w-[80%] mx-auto">
//                 <div className="md:w-[400px] border mx-auto">
//                     <h2 className="font-ShabnamBold bg-DarkGray text-white px-[20px] py-[4px] rounded-md"> تکت‌های من</h2>
//                     <ul>
//                         {tickets.length > 0 ? (
//                             tickets.map((ticket, index) => (
//                                 <li key={index} className="flex flex-wrap mt-[10px] w-full">
//                                     <div className="w-full ">
//                                         <strong className="font-ShabnamBold">مقصد من: </strong>
//                                         <span className="font-ShabnamLight">{ticket.trip.name}</span>
//                                     </div>
//                                     <div className="w-[50%] text-[11px] mt-[10px]">
//                                         <strong className="font-ShabnamBold">محل حرکت: </strong>
//                                         <span className="font-ShabnamLight">{ticket.trip.from.name}</span>
//                                     </div>
//                                     <div className="w-[50%] text-[11px] mt-[10px]">
//                                         <strong className="font-ShabnamBold">پایان سفر: </strong>
//                                         <span className="font-ShabnamLight">{ticket.trip.to.address}</span>
//                                     </div>
//                                     <div className="w-[50%] text-[11px] mt-[10px]">
//                                          <strong> چـوکی های مــن: </strong>
//                                          {ticket.booking.seats.map(seat => seat.seatNumber).join(", ")}
//                                     </div>
//                                     <div className="w-[50%] text-[11px] mt-[10px]">
//                                         <strong>تاریخ:</strong>
//                                          {ticket.booking.date} |{" "}
//                                      </div>

//                                      <div className="w-[50%] text-[11px] mt-[10px]">
//                                         <strong>ساعت حرکت:</strong>
//                                          {ticket.trip.departureTime} 
//                                      </div>
//                                      <div className="w-[50%] text-[11px] mt-[10px]">
//                                         <strong>ساعت رسید:</strong>
//                                          {ticket.trip.arrivalTime} 
//                                      </div>
//                                      <div className="w-[50%] text-[11px] mt-[10px]">
//                                         <strong> مدت ساعات سفر :</strong>
//                                          {ticket.trip.duration} 
//                                      </div>
//                                      <div className="w-[50%] text-[11px] mt-[10px]">
//                                         <strong> شماره بس   :</strong>
//                                          {ticket.trip.bus.number} 
//                                      </div>
//                                      <div className="w-[50%] text-[11px] mt-[10px]">
//                                         <strong>  نوعیت بس   :</strong>
//                                          {ticket.trip.bus.type.name} 
//                                      </div>
//                                      <div className="w-[50%] text-[11px] mt-[10px]">
//                                         <strong>هزینه فی چوکی:</strong>
//                                          {ticket.booking.pricePerSeat} 
//                                      </div>
//                                      <div className="w-[50%] text-[11px] mt-[10px]">
//                                         <strong> هزینه مجموع تکت ها: </strong>
//                                          <span >{ticket.booking.totalPrice} </span>
//                                      </div>
//                                      <div className="w-[50%] text-[11px] mt-[10px]">
//                                         <strong> هزینه تکت: </strong>
//                                          <span >{ticket.status.isPaid ? "پرداخت شده" : "پرداخت نشده❌"} </span>
//                                      </div>
//                                 </li>
//                             ))
//                         ) : (
//                             <p>هیچ تکتی ثبت نشده است.</p>
//                         )}
//                     </ul>
//                 </div>
//             </div>
//         </section>
//     )
// }




import React, { useEffect, useState } from "react";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("https://hesarak-backend.vercel.app/api/user/tickets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`خطا: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setTickets(data.data.tickets);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">در حال بارگذاری...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">خطا: {error}</p>;

  return (
    <section className="w-full mt-[65px] min-h-[100vh] pt-[30px]">
      <div className="container lg:w-[80%] mx-auto">
        <h2 className="font-ShabnamBold text-2xl text-center text-gray-800 mb-6">
          🎫 تکت‌های من
        </h2>
        {tickets.length > 0 ? (
          <div>
            {tickets.map((ticket, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-shadow w-[350px] mx-auto my[10px]">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-ShabnamLight text-gray-500">شماره تکت</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md">{ticket.ticketNumber}</span>
                </div>

                <h3 className="font-ShabnamBold text-lg text-gray-800 mb-2">{ticket.trip.name}</h3>

                <div className="space-y-1 text-sm font-ShabnamLight text-white mx-auto bg-DarkGray p-[10px] rounded-md">
                  <p className="font-ShabnamBold my-[4px]">📍 محل حرکت: <span className="font-ShabnamLight text-[11px]">{ticket.trip.from.name}</span></p>
                  <p className="font-ShabnamBold my-[4px]">🏁 پایان سفر: <span className="font-ShabnamLight text-[11px]">{ticket.trip.to.address}</span></p>
                  <p className="font-ShabnamBold my-[4px]">💺 چوکی‌ها: <span className="font-ShabnamLight text-[11px]">{ticket.booking.seats.map((s) => s.seatNumber).join(", ")}</span></p>
                  <p className="font-ShabnamBold my-[4px]">📅 تاریخ: <span className="font-ShabnamLight text-[11px]">{ticket.booking.date}</span></p>
                  <p className="font-ShabnamBold my-[4px]">🕒 حرکت: <span className="font-ShabnamLight text-[11px]">{ticket.trip.departureTime || "نامشخص"}</span></p>
                  <p className="font-ShabnamBold my-[4px]">⏳ مدت سفر: <span className="font-ShabnamLight text-[11px]">{ticket.trip.duration}</span></p>
                  <p className="font-ShabnamBold my-[4px]">🚌 شماره بس: <span className="font-ShabnamLight text-[11px]">{ticket.trip.bus.number}</span></p>
                  <p className="font-ShabnamBold my-[4px]">🚍 نوعیت: <span className="font-ShabnamLight text-[11px]">{ticket.trip.bus.type.name}</span></p>
                  <p className="font-ShabnamBold my-[4px]">💵 فی چوکی: <span className="font-ShabnamLight text-[11px]">{ticket.booking.pricePerSeat}</span> افغانی</p>
                  <p className="font-ShabnamBold my-[4px]">💰 مجموع: <span className="font-ShabnamLight text-[11px]">{ticket.booking.totalPrice}</span> افغانی</p>
                </div>

                <div className="mt-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-ShabnamBold ${
                      ticket.status.isPaid
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                   هزینه سفر {ticket.status.isPaid ? "پرداخت شده ✅" : "❌ پرداخت نشده ❌"}
                  </span>
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

// // https://hesarak-backend.vercel.app/api/user/tickets
// //https://chatgpt.com/c/6899bda0-7f7c-8323-b756-9d46a26529fd