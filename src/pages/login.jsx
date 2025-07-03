import { useState } from "react";
import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";
import { FcPhoneAndroid } from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
        // Reset error when typing
        setErrors((prev) => ({ ...prev, [id]: false }));
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        let hasError = false;
        const newErrors = { ...errors };

        // Validate each field
        if (!formData.email.trim()) {
            newErrors.email = true;
            hasError = true;
        }
        if (!formData.password.trim()) {
            newErrors.password = true;
            hasError = true;
        }

        setErrors(newErrors);

        if (hasError) {
            // alert("لطفا تمام فیلدهای ضروری را پر کنید!");
            return;
        }

        // If all fields are filled
        alert("فرم با موفقیت ارسال شد!");
        // Here you can add your form submission logic
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className="w-full h-custom bg-lightGray flex items-center justify-center">
            <form
                onSubmit={handleSubmitForm}
                className="w-[400px] bg-white rounded-lg p-[20px]">
                <h2 className="text-center font-PlaypenExtraBold text-DarkGray text-[20px]">
                    ورود به حساب کاربـری
                </h2>

                {/* ____DIV___ONE____ */}
                <div className="flex flex-col gap-[10px] mt-[20px] relative">
                    <label htmlFor="email" className="font-PlaypenBold text-DarkGray text-[16px] flex items-center">
                        موبایل
                    </label>
                    <input type="text" id="email" value={formData.email} onChange={handleChange} placeholder="شماره تماس خود را وارد کنید"
                        className={`inputValue w-full p-[10px] rounded-[100px] border-[#fff] custom-neomorphic-shadow border-[6px] focus:outline-none  placeholder:font-ShabnamBold placeholder:text-[12px] pr-[22px]`}/>
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1 w-full">این فیلد الزامی است</p>
                    )}
                    <span className="absolute left-[20px] top-[60px] translate-y-[-50%] text-[25px] text-lightGray">
                        <FcPhoneAndroid />
                    </span>
                </div>

                {/* ____DIV___TOW____ */}
                <div className="flex flex-col gap-[10px] mt-[20px] mb-[10px] relative">
                    <label htmlFor="password" className="font-PlaypenBold text-DarkGray text-[16px]">
                        رمـزعبــور
                    </label>
                    <input type={showPassword ? "text" : "password"} id="password" value={formData.password} onChange={handleChange}
                        placeholder="رمز عبور خود را وارد کنید"
                        className='inputValue w-full p-[10px] rounded-[100px] border-[#fff] custom-neomorphic-shadow border-[6px] outline-none placeholder:font-ShabnamBold placeholder:text-[12px] pr-[22px]'/>
                    {errors.password && (
                        <p className="text-red-500 text-xs mt-1">این فیلد الزامی است</p>
                    )}
                    <span
                        className="absolute left-[20px] top-[60px] translate-y-[-50%] text-[25px] cursor-pointer"
                        onClick={togglePassword}>
                        {showPassword ? <HiMiniEye /> : <HiMiniEyeSlash />}
                    </span>

                </div>

                <Link
                    to="/forget-password"
                    className="text-primary text-[14px] font-bold font-vazir mt-[10px]">
                    رمز عبور خود را فراموش کرده اید؟
                </Link>

                {/* ____DIV___THREE____ */}
                <div className="w-full flex justify-center mt-[10px]">
                    <button
                        type="submit"
                        className="w-[60%] p-[10px] rounded-[100px] bg-DarkGray text-white text-[16px] outline-none focus:outline-none hover:bg-opacity-90 transition">
                        ورود به حساب کاربـری
                    </button>
                </div>

                <p className="text-center text-[14px] font-bold font-vazir mt-[10px]">
                    حساب کاربـری ندارید؟{" "}
                    <Link
                        to="/register"
                        className="text-primary text-[14px] font-bold font-vazir mt-[10px]">
                        ثبت نام
                    </Link>
                </p>
            </form>
        </section>
    );
};

export default LoginForm;
