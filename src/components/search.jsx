import { FaSearch } from "react-icons/fa";
import StartTrips from "./startTrips"
import EndTrips from "./endTrips"
import AfghanDatePicker from "./AfghanDatePicker";
import { CgArrowsExchange } from "react-icons/cg";
export default function Search(){
    return(
        <form className="w-full  flex flex-wrap   justify-between  lg:gap-x-3  px-[30px] text-DarkGray">
            <div className="w-full md:w-[55%] h-[55px] border rounded-md px-[10px] py-[9px] flex justify-between font-ShabnamMedium text-[14px] items-center">
                <StartTrips />
                <CgArrowsExchange className="text-[22px] bg-light rounded-[50%]" />
                <EndTrips />
            </div>
            <div className="w-full md:w-[43%] h-[45px]  rounded-md font-ShabnamMedium flex mt-[15px] md:mt-0">
                <AfghanDatePicker  />
                <button className="w-[49%] bg-DarkGray
                                 text-white 
                                  custom-neomorphic-shadow_social
                                  flex justify-center items-center 
                                  font-ShabnamLight 
                                  text-sm
                                  rounded-[100px]">
                                    <FaSearch  className="ml-1" />
                                     جـستجـو
                </button>
            </div>
        </form>
    )
}