// import { useState } from "react";
// import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";
// import { FcPhoneAndroid } from "react-icons/fc";
// import { Link, useNavigate } from "react-router-dom";
// import { useUser } from "../context/UserContext"; // اضافه شده

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const { setUser } = useUser(); // استفاده از context

//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({ phone: "", password: "" });
//   const [errors, setErrors] = useState({ phone: false, password: false });
//   const [serverError, setServerError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//     setErrors((prev) => ({ ...prev, [id]: false }));
//     setServerError("");
//   };

//   const handleSubmitForm = async (e) => {
//     e.preventDefault();

//     const newErrors = {
//       phone: !formData.phone.trim(),
//       password: !formData.password.trim(),
//     };
//     setErrors(newErrors);
//     if (newErrors.phone || newErrors.password) return;

//     try {
//       setLoading(true);
//       const res = await fetch(
//         "https://hesarak-backend.vercel.app/api/users/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           credentials: "include",
//           body: JSON.stringify({
//             email: formData.phone,
//             password: formData.password,
//           }),
//         }
//       );

//       if (!res.ok) {
//         const errData = await res.json().catch(() => ({}));
//         throw new Error(
//           errData?.detail || "نام کاربری یا رمز عبور نادرست است."
//         );
//       }

//       const data = await res.json();

//       // ذخیره token
//       localStorage.setItem("token", data.token);
//       console.log(data.token)
//       // ذخیره user در context
//       setUser(data.user);


//       // ________LOcation____
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           async (position) => {
//             const { latitude, longitude } = position.coords;
      
//             try {
//               const locationRes = await fetch("https://hesarak-backend.vercel.app/api/update-location", {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 credentials: "include",
//                 body: JSON.stringify({
//                   userId: data.user.id, 
//                   latitude,
//                   longitude,
//                 }),
//               });
      
//               if (locationRes.ok) {
//                 console.log("✅ لوکیشن با موفقیت ذخیره شد");
//               } else {
//                 const errMsg = await locationRes.text();
//                 console.error("❌ خطا در ذخیره لوکیشن:", errMsg);
//               }
//             } catch (err) {
//               console.error("خطا در ارسال لوکیشن:", err);
//             }
//           },
//           (error) => {
//             console.error("خطا در گرفتن لوکیشن:", error);
//           }
//         );
//       }
      


//       // هدایت
//       navigate("/tickets");
//     } catch (err) {
//       setServerError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const togglePassword = () => setShowPassword(!showPassword);

//   return (
//     <section
//       className="w-full h-custom bg-lightGray flex items-center justify-center mt-[65px]"
//       dir="rtl"
//     >
//       <form
//         onSubmit={handleSubmitForm}
//         className="w-[400px] bg-white rounded-lg p-[20px]"
//       >
//         <h2 className="text-center font-ShabnamBold text-DarkGray text-[20px]">
//           ورود به حساب کاربـری
//         </h2>

//         {/* موبایل */}
//         <div className="flex flex-col gap-[10px] mt-[20px] relative">
//           <label
//             htmlFor="phone"
//             className="font-ShabnamBold text-DarkGray text-[14px]"
//           >
//             موبایل یا ایمیل
//           </label>
//           <input
//             type="text"
//             id="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="شماره تماس خود را وارد کنید"
//             className="inputValue w-full p-[10px] rounded-[100px] border-[#fff] custom-neomorphic-shadow border-[6px] focus:outline-none placeholder:font-ShabnamBold placeholder:text-[12px] pr-[22px]"
//           />
//           {errors.phone && (
//             <p className="text-red-500 text-xs mt-1">این فیلد الزامی است</p>
//           )}
//           <span className="absolute left-[20px] top-[60px] -translate-y-1/2 text-[25px] text-lightGray">
//             <FcPhoneAndroid />
//           </span>
//         </div>

//         {/* رمز عبور */}
//         <div className="flex flex-col gap-[10px] mt-[20px] mb-[10px] relative">
//           <label
//             htmlFor="password"
//             className="font-ShabnamBold text-DarkGray text-[14px]"
//           >
//             رمـز عبـور
//           </label>
//           <input
//             type={showPassword ? "text" : "password"}
//             id="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="رمز عبور خود را وارد کنید"
//             className="inputValue w-full p-[10px] rounded-[100px] border-[#fff] custom-neomorphic-shadow border-[6px] outline-none placeholder:font-ShabnamBold placeholder:text-[12px] pr-[22px]"
//           />
//           {errors.password && (
//             <p className="text-red-500 text-xs mt-1">این فیلد الزامی است</p>
//           )}
//           <span
//             onClick={togglePassword}
//             className="absolute left-[20px] top-[60px] -translate-y-1/2 text-[25px] cursor-pointer"
//           >
//             {showPassword ? <HiMiniEye /> : <HiMiniEyeSlash />}
//           </span>
//         </div>

//         {serverError && (
//           <p className="text-red-600 text-center text-sm mt-2">{serverError}</p>
//         )}

//         {/* دکمه ورود */}
//         <div className="w-full flex justify-center mt-[10px]">
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-[60%] p-[10px] rounded-[100px] bg-DarkGray text-white text-[16px] hover:bg-opacity-90 transition disabled:opacity-60"
//           >
//             {loading ? "در حال ورود..." : "ورود به حساب کاربـری"}
//           </button>
//         </div>

//         <Link
//           to="/forget-password"
//           className="block text-primary text-[14px] font-bold mt-[10px]"
//         >
//           رمز عبور خود را فراموش کرده‌اید؟
//         </Link>

//         <p className="text-center text-[14px] font-bold mt-[10px]">
//           حساب کاربـری ندارید؟{" "}
//           <Link to="/register" className="text-primary">
//             ثبت نام
//           </Link>
//         </p>
//       </form>
//     </section>
//   );
// };

// export default LoginForm;



import { useState } from "react";
import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";
import { FcPhoneAndroid } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ phone: "", password: "" });
  const [errors, setErrors] = useState({ phone: false, password: false });
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: false }));
    setServerError("");
  };

  const sendLocation = async (userId, latitude, longitude) => {
    try {
      const locationRes = await fetch(
        "https://hesarak-backend.vercel.app/api/update-location",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ userId, latitude, longitude }),
        }
      );

      if (locationRes.ok) {
        console.log("✅ لوکیشن با موفقیت ذخیره شد");
      } else {
        const errMsg = await locationRes.text();
        console.error("❌ خطا در ذخیره لوکیشن:", errMsg);
      }
    } catch (err) {
      console.error("❌ خطا در ارسال لوکیشن:", err);
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const newErrors = {
      phone: !formData.phone.trim(),
      password: !formData.password.trim(),
    };
    setErrors(newErrors);
    if (newErrors.phone || newErrors.password) return;

    try {
      setLoading(true);
      const res = await fetch(
        "https://hesarak-backend.vercel.app/api/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            email: formData.phone,
            password: formData.password,
          }),
        }
      );

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData?.detail || "نام کاربری یا رمز عبور نادرست است.");
      }

      const data = await res.json();
      localStorage.setItem("token", data.token);
      setUser(data.user);

      // 1️⃣ ابتدا GPS
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            await sendLocation(data.user.id, latitude, longitude);
          },
          async (error) => {
            console.warn("کاربر اجازه دسترسی به GPS نداد یا خطا رخ داد:", error);
            // 2️⃣ اگر اجازه داده نشد → استفاده از IP
            try {
              const ipRes = await fetch("https://ipapi.co/json/");
              const ipData = await ipRes.json();
              await sendLocation(data.user.id, ipData.latitude, ipData.longitude);
              console.log("📍 لوکیشن تقریبی از IP ارسال شد");
            } catch (ipErr) {
              console.error("❌ خطا در گرفتن لوکیشن از IP:", ipErr);
            }
          }
        );
      } else {
        console.warn("مرورگر از Geolocation پشتیبانی نمی‌کند");
      }

      navigate("/tickets");
    } catch (err) {
      setServerError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <section className="w-full h-custom bg-lightGray flex items-center justify-center mt-[65px]" dir="rtl">
      <form onSubmit={handleSubmitForm} className="w-[360px] bg-white rounded-lg p-[20px]">
        <h2 className="text-center font-ShabnamBold text-DarkGray text-[20px]">
          ورود به حساب کاربـری
        </h2>

        {/* موبایل */}
        <div className="flex flex-col gap-[10px] mt-[20px] relative">
          <label htmlFor="phone" className="font-ShabnamBold text-DarkGray text-[14px]">
            موبایل یا ایمیل
          </label>
          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="شماره تماس خود را وارد کنید"
            className="inputValue w-full p-[10px] rounded-[100px] border-[#fff] custom-neomorphic-shadow border-[6px] focus:outline-none placeholder:font-ShabnamBold placeholder:text-[12px] pr-[22px]"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">این فیلد الزامی است</p>}
          <span className="absolute left-[20px] top-[60px] -translate-y-1/2 text-[25px] text-lightGray">
            <FcPhoneAndroid />
          </span>
        </div>

        {/* رمز عبور */}
        <div className="flex flex-col gap-[10px] mt-[20px] mb-[10px] relative">
          <label htmlFor="password" className="font-ShabnamBold text-DarkGray text-[14px]">
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
          <span onClick={togglePassword} className="absolute left-[20px] top-[60px] -translate-y-1/2 text-[25px] cursor-pointer">
            {showPassword ? <HiMiniEye /> : <HiMiniEyeSlash />}
          </span>
        </div>

        {serverError && <p className="text-red-600 text-center text-sm mt-2">{serverError}</p>}

        {/* دکمه ورود */}
        <div className="w-full flex justify-center mt-[10px]">
          <button
            type="submit"
            disabled={loading}
            className="w-[60%] p-[10px] rounded-[100px] bg-DarkGray text-white text-[16px] hover:bg-opacity-90 transition disabled:opacity-60"
          >
            {loading ? "در حال ورود..." : "ورود به حساب کاربـری"}
          </button>
        </div>

        <Link to="/forget-password" className="block text-primary text-[14px] font-bold mt-[10px]">
          رمز عبور خود را فراموش کرده‌اید؟
        </Link>

        <p className="text-center text-[14px] font-bold mt-[10px]">
          حساب کاربـری ندارید؟{" "}
          <Link to="/register" className="text-primary">
            ثبت نام
          </Link>
        </p>
      </form>
    </section>
  );
};

export default LoginForm;
