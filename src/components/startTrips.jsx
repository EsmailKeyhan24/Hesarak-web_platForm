import { MdOutlineArrowDropDown } from "react-icons/md";
export default function StartTrips(){
    return(
        <div className="w-[45%] h-full relative">
            <label htmlFor="starTrips" className="text-[10px]">شهر مبداء</label>
            <input type="text" id="starTrips" className="w-full border-0 border-b-2 border-transparent focus:border-b-blue-500 focus:outline-none" />
            <MdOutlineArrowDropDown className="text-light-500 text-[30px] absolute top-[10px] left-[0px]" />
        </div>
    )
}

