import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import transition from "react-element-popper/animations/transition"
import InputIcon from "react-multi-date-picker/components/input_icon"
import "react-multi-date-picker/styles/layouts/mobile.css"

import { useProvince } from "./ProvinceContext";

// تعریف زبان دری
const dari_af = {
  months: [
    "حمل", "ثور", "جوزا", "سرطان", "اسد", "سنبله",
    "میزان", "عقرب", "قوس", "جدی", "دلو", "حوت"
  ],
  weekDays: [
    "یک‌شنبه", "دوشنبه", "سه‌شنبه",
    "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"
  ],
  weekDaysShort: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
  digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  meridiems: ["قبل از ظهر", "بعد از ظهر"],
};

export default function Example() {
  const [date, setDate] = useState(new DateObject({ calendar: persian }));
  const { setTravelDate } = useProvince();

  const handleChange = (selectedDate) => {
    setDate(selectedDate);
    setTravelDate(selectedDate.format("YYYY-MM-DD"));
  };

  return (
    <div
      style={{ direction: "rtl", width:'100%', }}
      className="w-full h-full shadow-none outline-none"
    >
    <label htmlFor="data" className="block  text-[9px]">
        تاریخ حرکت
    </label>
     
      <DatePicker 
        value={date}      
        render={<InputIcon/>}         // 👈 نمایش تاریخ امروز
        onChange={handleChange}       // برای آپدیت هنگام انتخاب
        calendar={persian}
        locale={persian_fa}
        months={dari_af.months}
        calendarPosition="bottom-right"
        id="data"
        className="font-ShabnamMedium mx:w-[20%]"
        animations={[
          transition({
            from: 35,
            transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
          }),
        ]}
      />
       
    </div>
  );
}
