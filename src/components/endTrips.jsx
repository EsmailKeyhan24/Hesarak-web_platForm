import { MdOutlineArrowDropDown } from "react-icons/md";
export default function EndTrips(){
    return(
        <div className="w-[45%] h-full relative">
            <label htmlFor="endTrips" className="text-[10px]">شهرمقصد</label>
            <input type="text" id="endTrips" className="w-full w-full border-0 border-b-2 border-transparent focus:border-b-blue-500 focus:outline-none" />
            <MdOutlineArrowDropDown className="text-light-500 text-[30px] absolute top-[10px] left-[0px]" />
        </div>
    )
}