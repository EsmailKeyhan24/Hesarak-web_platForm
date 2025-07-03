import { PiUserCircleCheckFill } from "react-icons/pi";
import { IoPhonePortrait } from "react-icons/io5";
import { TbLockPassword } from "react-icons/tb";
import { Link } from "react-router-dom";



export default function Register(){
    return(
        <section  className="w-full h-custom bg-lightGray flex items-center justify-center">
            <form action="" className="w-[400px] bg-white rounded-lg p-[20px]">
                <h3 className=" font-PlaypenExtraBold text-DarkGray text-[16px]">ثبت نام</h3>
                <p className="font-ShabnamLight font-black text-[12px]">لطفاً تمامی اطلاعات خویش را درج نمایید.</p>
                {/* _______DIVS_____ */}
                {/* ======DIV==ONE==== */}
                <div className="w-full h-[60px] mt-[8px]  flex rounded-[100px] overflow-hidden border-[#fff] custom-neomorphic-shadow border-[6px]">
                    <span className="w-[60px] h-full bg-DarkGray flex justify-center items-center text-white text-[26px]">
                        <PiUserCircleCheckFill />
                    </span>
                    <section className="h-full w-[340px] bg-[red] relative">
                        <input type="text" id="username" placeholder=" " className="w-full h-full pr-[10px] outline-none peer" />
                        <label htmlFor="username" className="font-ShabnamLight font-black text-[12px] absolute top-[15px] right-[15px] transition-all 
                        peer-focus:-translate-y-4 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-4">نام و تخلص</label>
                    </section>
                </div>


                {/* ======DIV==TOW==== */}
                <div className="w-full h-[60px] mt-[20px]  overflow-hidden flex rounded-[100px] border-[#fff] custom-neomorphic-shadow border-[6px]">
                    <span className="w-[60px] h-full bg-DarkGray flex justify-center items-center text-white text-[26px]">
                        <IoPhonePortrait />
                    </span>
                    <section className="h-full w-[340px] bg-[red] relative">
                        <input type="text" id="phone" placeholder=" " className="w-full h-full pr-[10px] outline-none peer" />
                        <label htmlFor="phone" className="font-ShabnamLight font-black text-[12px] absolute top-[15px] right-[15px] transition-all 
                        peer-focus:-translate-y-4 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-4">شماره تماس</label>
                    </section>
                </div>


                {/* ======DIV==THREE==== */}
                <div className="w-full h-[60px] mt-[20px] overflow-hidden flex rounded-[100px] border-[#fff] custom-neomorphic-shadow border-[6px]">
                    <span className="w-[60px] h-full bg-DarkGray flex justify-center items-center text-white text-[26px]">
                        <TbLockPassword />
                    </span>
                    <section className="h-full w-[340px] bg-[red] relative">
                        <input type="password" id="password" placeholder=" " className="w-full h-full pr-[10px] outline-none peer" />
                        <label htmlFor="password" className="font-ShabnamLight font-black text-[12px] absolute top-[15px] right-[15px] transition-all 
                        peer-focus:-translate-y-4 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-4">رمـزعبــور</label>
                    </section>
                </div>



                <div className="w-full flex justify-center mt-[10px]">
                    <button
                        type="submit"
                        className="w-[60%] p-[10px] font-ShabnamBold mt-[20px] rounded-[100px] bg-DarkGray text-white text-[16px] outline-none focus:outline-none hover:bg-opacity-90 transition">
                        ثبت نام
                    </button>
                </div>
                <p className="text-center text-[14px] font-bold font-vazir mt-[10px]">
                    از قبل حساب کاربری دارید؟   
                    <Link to="/login" className="text-primary text-[14px] font-bold font-vazir mt-[10px]">از اینجا وارد شوید</Link>
                </p>
            </form>
        </section>
    )
}