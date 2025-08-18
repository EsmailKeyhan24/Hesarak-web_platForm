import { useState } from "react";
import { PiUserCircleCheckFill } from "react-icons/pi";
import { IoPhonePortrait } from "react-icons/io5";
import { TbLockPassword } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    email: '',
    phone: '',
    password: '',
    rec_password: '',
    gender: 'male'  // مقدار پیشفرض
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" یا "error"

  const showMessage = (msg, type = "success") => {
    setStatusMessage(msg);
    setMessageType(type);
    setTimeout(() => {
      setStatusMessage("");
      setMessageType("");
    }, 3000);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    setErrors(prev => ({
      ...prev,
      [id]: ''
    }));
  };

  const handleGenderChange = (e) => {
    setFormData(prev => ({
      ...prev,
      gender: e.target.value
    }));
    setErrors(prev => ({
      ...prev,
      gender: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // اعتبارسنجی ساده
    let newErrors = {};
    const requiredFields = ['fullName', 'fatherName', 'email', 'phone', 'password', 'rec_password', 'gender'];

    requiredFields.forEach(field => {
      if (!formData[field] || !formData[field].trim()) {
        newErrors[field] = "این فیلد الزامی است";
      }
    });

    // چک کردن مطابقت رمز عبور و تکرار رمز عبور
    if (formData.password !== formData.rec_password) {
      newErrors.rec_password = "تکرار رمز عبور با رمز عبور مطابقت ندارد";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    
    const sendData = {
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      fullName: formData.fullName,
      fatherName: formData.fatherName,
      gender: formData.gender
    };

    try {
      const res = await fetch("https://hesarak-backend.vercel.app/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendData)
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        showMessage("ثبت نام با موفقیت انجام شد ✅", "success");
        setFormData({
          fullName: '',
          fatherName: '',
          email: '',
          phone: '',
          password: '',
          rec_password: '',
          gender: 'male'
        });
        setFormData({
          fullName: '',
          fatherName: '',
          email: '',
          phone: '',
          password: '',
          rec_password: '',
          gender: 'male'
        });
      } else {
        showMessage(data.message || "خطایی رخ داد ❌", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      showMessage("ارتباط با سرور برقرار نشد ❌", "error");
    }
  };

  return (
    <section className="w-full min-[90vh] py-[40px] bg-lightGray flex items-center justify-center mt-[65px]">


      {/* _____ALL__Message___Show___ */}
      {statusMessage && (
        <span
          className={`flex w-[250px] h-[90px] rounded-md p-[10px] absolute top-[100px] left-[15px] font-ShabnamMedium
          ${messageType === "success" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}
        >
          {statusMessage}
        </span>
      )}


      <form onSubmit={handleSubmit} className="w-[360px] bg-white rounded-lg p-[20px]" autoComplete="off">

        <h3 className="font-PlaypenExtraBold text-DarkGray text-[16px]">ثبت نام</h3>
        <p className="font-ShabnamLight font-black text-[12px]">لطفاً تمامی اطلاعات خویش را درج نمایید.</p>

        {/* fullName */}
        <InputField
          id="fullName"
          label="نام و تخلص"
          type="text"
          icon={<PiUserCircleCheckFill />}
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />

        {/* fatherName */}
        <InputField
          id="fatherName"
          label="نام پدر"
          type="text"
          icon={<PiUserCircleCheckFill />}
          value={formData.fatherName}
          onChange={handleChange}
          error={errors.fatherName}
        />

        {/* email */}
        <InputField
          id="email"
          label="ایمیل"
          type="email"
          icon={<IoPhonePortrait />}
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        {/* phone */}
        <InputField
          id="phone"
          label="شماره تماس"
          type="text"
          icon={<IoPhonePortrait />}
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        {/* password */}
        <InputField
          id="password"
          label="رمـزعبــور"
          type="password"
          icon={<TbLockPassword />}
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        {/* rec_password */}
        <InputField
          id="rec_password"
          label="تکرار رمز عبور"
          type="password"
          icon={<TbLockPassword />}
          value={formData.rec_password}
          onChange={handleChange}
          error={errors.rec_password}
        />

        {/* gender */}
        {/* <div className="mt-[20px]">
          <label className="font-ShabnamLight font-black text-[14px] mb-2 block">جنسیت</label>
          <select
            id="gender"
            value={formData.gender}
            onChange={handleGenderChange}
            className="w-full h-[40px] rounded-md border border-gray-300 px-3 text-[14px] outline-none"
          >
            <option value="male">مذکر</option>
            <option value="female">مونث</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-[12px] font-PlaypenLight mt-[5px] pr-[10px]">{errors.gender}</p>
          )}
        </div> */}
        <div className="mt-[20px]">
          <label className="font-ShabnamLight font-black text-[14px] mb-2 block">جنسیت</label>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleGenderChange}
                className="accent-DarkGray w-4 h-4 "
              />
              <span className="font-ShabnamBold">مذکر</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleGenderChange}
                className="accent-DarkGray w-4 h-4 font-ShabnamBold"
              />
              <span className="font-ShabnamBold">مونث</span>
            </label>
          </div>

          {errors.gender && (
            <p className="text-red-500 text-[12px] font-PlaypenLight mt-[5px] pr-[10px]">
              {errors.gender}
            </p>
          )}
        </div>


        <div className="w-full flex justify-center mt-[10px]">
          <button
            type="submit"
            className="w-[60%] p-[10px] font-ShabnamBold mt-[20px] rounded-[100px] bg-DarkGray text-white text-[16px] outline-none focus:outline-none hover:bg-opacity-90 transition"
          >
            ثبت نام
          </button>
        </div>

        <p className="text-center text-[14px] font-bold font-vazir mt-[10px]">
          از قبل حساب کاربری دارید؟
          <Link to="/login" className="text-primary text-[14px] font-bold font-vazir mt-[10px]"> از اینجا وارد شوید</Link>
        </p>
      </form>
    </section>
  );
}

function InputField({ id, label, type, icon, value, onChange, error }) {
  return (
    <div className="w-full mt-[20px]">
      <div className="h-[60px] flex rounded-[100px] overflow-hidden border-[#fff] custom-neomorphic-shadow border-[6px]">
        <span className="w-[60px] h-full bg-DarkGray flex justify-center items-center text-white text-[26px]">{icon}</span>
        <section className="h-full w-[340px] relative">
          <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder=""
            className="w-full h-full pr-[10px] outline-none peer font-ShabnamMedium text-[14px]"
          />
          <label
            htmlFor={id}
            className="font-ShabnamLight font-black text-[12px] absolute top-[15px] right-[15px] transition-all peer-focus:-translate-y-4 peer-focus:text-blue-500 peer-valid:-translate-y-4"
          >
            {label}
          </label>
        </section>
      </div>
      {error && <p className="text-red-500 text-[12px] font-PlaypenLight mt-[5px] pr-[10px]">{error}</p>}
    </div>
  );
}
