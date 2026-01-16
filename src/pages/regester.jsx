import { useState } from "react";
import { PiUserCircleCheckFill } from "react-icons/pi";
import { IoPhonePortrait } from "react-icons/io5";
import { TbLockPassword } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Register() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        password: "",
        rep_password: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.rep_password) {
            alert("رمز عبور و تکرار آن مطابقت ندارند!");
            return;
        }
        try {
            const response = await fetch("http://192.168.0.12:8000/auth/users/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    phone_number: formData.phone,
                    password: formData.password,
                    re_password: formData.rep_password,
                })
            });
    
            // ابتدا پاسخ را به صورت متن دریافت کنید
            const responseText = await response.text();
            console.log(responseText)
            
            try {
                // سعی کنید متن پاسخ را به JSON تبدیل کنید
                const data = responseText ? JSON.parse(responseText) : {};
                if (response.ok) {
                    alert("ثبت نام موفقانه انجام شد!");
                    setFormData({
                        firstName: "",
                        lastName: "",
                        phone: "",
                        password: "",
                        rep_password: ""
                    });
                } else {
                    // نمایش خطاهای دریافتی از سرور
                    const errorMessage = data.detail || 
                                      (data.phone_number ? data.phone_number.join(', ') : '') ||
                                      (data.password ? data.password.join(', ') : '') ||
                                      JSON.stringify(data);
                    alert("خطا در ثبت نام: " + errorMessage);
                }
            } catch (e) {
                // اگر پاسخ JSON نبود، پاسخ خام را نمایش دهید
                console.error("پاسخ غیر JSON دریافت شد:", responseText);
                alert(`خطا در سرور: وضعیت ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            alert("خطای شبکه: " + error.message);
        }
    };
    return (
        <section className="w-full min-[90vh] py-[40px] bg-lightGray flex items-center justify-center mt-[65px]">
            <form onSubmit={handleSubmit} className="w-[400px] bg-white rounded-lg p-[20px]" autoComplete="off">
                <h3 className=" font-PlaypenExtraBold text-DarkGray text-[16px]">ثبت نام</h3>
                <p className="font-ShabnamLight font-black text-[12px]">لطفاً تمامی اطلاعات خویش را درج نمایید.</p>
                {/* _______DIVS_____ */}
                {/* ======DIV==ONE==== */}
                <div className="w-full h-[60px] mt-[8px]  flex rounded-[100px] overflow-hidden border-[#fff] custom-neomorphic-shadow border-[6px]">
                    <span className="w-[60px] h-full bg-DarkGray flex justify-center items-center text-white text-[26px]">
                        <PiUserCircleCheckFill />
                    </span>
                    <section className="h-full w-[340px] bg-[red] relative">
                        <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} placeholder=" " className="w-full h-full pr-[10px] outline-none peer font-ShabnamMedium text-[14px]" />
                        <label htmlFor="firstName" className="font-ShabnamLight font-black text-[12px] absolute top-[15px] right-[15px] transition-all 
                        peer-focus:-translate-y-4 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-4">نام </label>
                    </section>
                </div>

                {/* ======DIV==Tow==== */}
                <div className="w-full h-[60px] mt-[20px]  flex rounded-[100px] overflow-hidden border-[#fff] custom-neomorphic-shadow border-[6px]">
                    <span className="w-[60px] h-full bg-DarkGray flex justify-center items-center text-white text-[26px]">
                        <PiUserCircleCheckFill />
                    </span>
                    <section className="h-full w-[340px] bg-[red] relative">
                        <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} placeholder=" " className="w-full h-full pr-[10px] outline-none peer font-ShabnamMedium text-[14px]" />
                        <label htmlFor="lastName" className="font-ShabnamLight font-black text-[12px] absolute top-[15px] right-[15px] transition-all 
                        peer-focus:-translate-y-4 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-4">تخلص</label>
                    </section>
                </div>

                {/* ======DIV==THREE==== */}
                <div className="w-full h-[60px] mt-[20px]  overflow-hidden flex rounded-[100px] border-[#fff] custom-neomorphic-shadow border-[6px]">
                    <span className="w-[60px] h-full bg-DarkGray flex justify-center items-center text-white text-[26px]">
                        <IoPhonePortrait />
                    </span>
                    <section className="h-full w-[340px] bg-[red] relative">
                        <input type="text" id="phone" value={formData.phone} onChange={handleChange} placeholder=" " className="w-full h-full pr-[10px] outline-none peer font-ShabnamMedium text-[14px]" />
                        <label htmlFor="phone" className="font-ShabnamLight font-black text-[12px] absolute top-[15px] right-[15px] transition-all 
                        peer-focus:-translate-y-4 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-4">شماره تماس</label>
                    </section>
                </div>

                {/* ======DIV==Four==== */}
                <div className="w-full h-[60px] mt-[20px] overflow-hidden flex rounded-[100px] border-[#fff] custom-neomorphic-shadow border-[6px]">
                    <span className="w-[60px] h-full bg-DarkGray flex justify-center items-center text-white text-[26px]">
                        <TbLockPassword />
                    </span>
                    <section className="h-full w-[340px] bg-[red] relative">
                        <input type="password" id="password" value={formData.password} onChange={handleChange} placeholder=" " className="w-full h-full pr-[10px] outline-none peer font-ShabnamMedium text-[14px]" />
                        <label htmlFor="password" className="font-ShabnamLight font-black text-[12px] absolute top-[15px] right-[15px] transition-all 
                        peer-focus:-translate-y-4 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-4">رمـزعبــور</label>
                    </section>
                </div>

                {/* ======DIV==Six==== */}
                <div className="w-full h-[60px] mt-[20px] overflow-hidden flex rounded-[100px] border-[#fff] custom-neomorphic-shadow border-[6px]">
                    <span className="w-[60px] h-full bg-DarkGray flex justify-center items-center text-white text-[26px]">
                        <TbLockPassword />
                    </span>
                    <section className="h-full w-[340px] bg-[red] relative">
                        <input type="password" id="rep_password" value={formData.rep_password} onChange={handleChange} placeholder=" " className="w-full h-full pr-[10px] outline-none peer font-ShabnamMedium text-[14px]" />
                        <label htmlFor="rep_password" className="font-ShabnamLight font-black text-[12px] absolute top-[15px] right-[15px] transition-all 
                        peer-focus:-translate-y-4 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-4">تکرار رمز عبور</label>
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
    );
}
