import StartTrips from "./startTrips"
import EndTrips from "./endTrips"
import AfghanDatePicker from "./AfghanDatePicker"
export default function Search(){
    return(
        <form className="w-full  flex flex-wrap   justify-between  lg:gap-x-3  px-[30px] text-DarkGray">
            <div className="w-full md:w-[48%] h-[45px] border rounded-md px-[10px] py-[9px] flex justify-between font-ShabnamMedium text-[14px]">
                <StartTrips />
                <EndTrips />
            </div>
            <div className="w-full md:w-[48%] h-[45px] border rounded-md font-ShabnamMedium flex mt-[15px] md:mt-0">
                <AfghanDatePicker  />
                <button className="w-[49%] bg-DarkGray text-white rounded-sm ">جـستجـو</button>
            </div>
        </form>
    )
}