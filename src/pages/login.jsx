import { useState } from "react";
import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";
import { FcPhoneAndroid } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";   // NEW


const LoginForm = () => {







  const navigate = useNavigate();                       // NEW

  // ____________States________________________________________________
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ phone: "", password: "" });
  const [errors, setErrors]   = useState({ phone: false, password: false });
  const [serverError, setServerError] = useState("");   // NEW
  const [loading, setLoading] = useState(false);        // NEW

  // ____________Handlers______________________________________________
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: false }));
    setServerError("");                                 // NEW – پاک‌کردن خطای سرور حین تایپ
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();




    // ____اعتبارسنجی سادهٔ فیلدها
    const newErrors = {
      phone: !formData.phone.trim(),
      password: !formData.password.trim(),
    };
    setErrors(newErrors);
    if (newErrors.phone || newErrors.password) return;

    // ____ارسال به بک‌اند
    try {
      setLoading(true);
      const res = await fetch(
        "https://029a920a991f.ngrok-free.app/auth/jwt/create/",
        {
          method : "POST",
          headers: { "Content-Type": "application/json" },
          body   : JSON.stringify({
            phone_number  : formData.phone,
            password: formData.password,
          }),
        }
      );

      if (!res.ok) {
       
        const errData = await res.json().catch(() => ({}));
        throw new Error(
          errData?.detail || "نام کاربری یا رمز عبور نادرست است."
        );
      }

      const data = await res.json();     // { access, refresh }
      console.log(data)
      // ذخیرهٔ توکن‌ها
      localStorage.setItem("access",  data.access);
      localStorage.setItem("refresh", data.refresh);

      // (اختیاری) هدایت به داشبورد
      navigate("/tickets");
    } catch (err) {
      setServerError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const togglePassword = () => setShowPassword(!showPassword);

  // ____________UI____________________________________________________
  return (
    <section className="w-full h-custom bg-lightGray flex items-center justify-center mt-[65px]" dir="rtl">
      <form onSubmit={handleSubmitForm} className="w-[400px] bg-white rounded-lg p-[20px]">
        <h2 className="text-center font-PlaypenExtraBold text-DarkGray text-[20px]">
          ورود به حساب کاربـری
        </h2>

        {/* _______فیلد موبایل_______ */}
        <div className="flex flex-col gap-[10px] mt-[20px] relative">
          <label htmlFor="phone" className="font-PlaypenBold text-DarkGray text-[16px]">
            موبایل
          </label>
          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="شماره تماس خود را وارد کنید"
            className={`inputValue w-full p-[10px] rounded-[100px] border-[#fff] custom-neomorphic-shadow border-[6px] focus:outline-none placeholder:font-ShabnamBold placeholder:text-[12px] pr-[22px]`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">این فیلد الزامی است</p>}
          <span className="absolute left-[20px] top-[60px] -translate-y-1/2 text-[25px] text-lightGray">
            <FcPhoneAndroid />
          </span>
        </div>

        {/* _______فیلد رمزعبور_______ */}
        <div className="flex flex-col gap-[10px] mt-[20px] mb-[10px] relative">
          <label htmlFor="password" className="font-PlaypenBold text-DarkGray text-[16px]">
            رمـز عبـور
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="رمز عبور خود را وارد کنید"
            className="inputValue w-full p-[10px] rounded-[100px] border-[#fff] custom-neomorphic-shadow border-[6px] outline-none placeholder:font-ShabnamBold placeholder:text-[12px] pr-[22px]"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">این فیلد الزامی است</p>}
          <span
            onClick={togglePassword}
            className="absolute left-[20px] top-[60px] -translate-y-1/2 text-[25px] cursor-pointer"
          >
            {showPassword ? <HiMiniEye /> : <HiMiniEyeSlash />}
          </span>
        </div>

        {/* خطای سرور */}
        {serverError && <p className="text-red-600 text-center text-sm mt-2">{serverError}</p>}

        {/* _______دکمه ورود_______ */}
        <div className="w-full flex justify-center mt-[10px]">
          <button
            type="submit"
            disabled={loading}
            className="w-[60%] p-[10px] rounded-[100px] bg-DarkGray text-white text-[16px] hover:bg-opacity-90 transition disabled:opacity-60"
          >
            {loading ? "در حال ورود..." : "ورود به حساب کاربـری"}
          </button>
        </div>

        {/* _______لینک‌های کمکی_______ */}
        <Link to="/forget-password" className="block text-primary text-[14px] font-bold mt-[10px]">
          رمز عبور خود را فراموش کرده‌اید؟
        </Link>

        <p className="text-center text-[14px] font-bold mt-[10px]">
          حساب کاربـری ندارید؟{" "}
          <Link to="/register" className="text-primary">ثبت نام</Link>
        </p>
      </form>
    </section>
  );
};

export default LoginForm;


// https://chatgpt.com/c/686f3721-2944-800d-bc70-67a5d45a0d2e