import React from "react";
import { Link } from "react-router-dom";
import LogoFoter from '../assets/image/logo192.png'
import { TiHomeOutline } from "react-icons/ti";
import { TbInfoTriangleFilled } from "react-icons/tb";
import { LuTicketCheck } from "react-icons/lu";
import { MdContactPhone } from "react-icons/md";
import { FcRules } from "react-icons/fc";
import { FcQuestions } from "react-icons/fc";
import { ImLocation2 } from "react-icons/im";
import { HiPhoneIncoming } from "react-icons/hi";
import { MdMarkEmailRead } from "react-icons/md";   
import { RiMapPinTimeFill } from "react-icons/ri";
import {  FaFacebook } from "react-icons/fa6"; 
import { TbBrandInstagram } from "react-icons/tb";
import { TbBrandTelegram } from "react-icons/tb";
import { FaSquareWhatsapp } from "react-icons/fa6";


export default function Footer() {
    return (
        <footer className="w-full min-h-[120px] bg-DarkGray py-[50px]">
            <div className="container text-light mx-auto">

                <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* =============DIV-ONE============= */}
                    <div className="flex flex-wrap px-[7px]">
                        <img src={LogoFoter} className="w-[120px] h-[110px]" alt="لوگوی حصارک پنشجیر" />
                        <p className="w-full font-ShabnamMedium my-[20px]">با حصارک، سفر را ایمن‌تر تجربه کنید</p>
                        <p className="font-ShabnamLight text-justify">شرکت ترانسپورتی حصارک پنجشیر با هدف ارائه خدمات مطمئن، سریع و ایمن در زمینه جابه‌جایی مسافرین بین شهرهای افغانستان فعالیت می‌کند.</p>
                    </div>



                    {/* =============DIV-TOW============= */}
                    <div className="px-[15px]">
                        <h3 className="font-ShabnamBold text-[22px]">لینک های مفید  </h3>
                        <ul className="w-full mt-[30px]">
                            <li className="font-ShabnamMedium h-[40px] hover:pr-[7px]  transition-all duration-100">
                                <Link className="h-full flex items-center" to="/"> <TiHomeOutline className="text-[19px] ml-[10px]" />صفحه اصلی</Link>
                            </li>
                            <li className="font-ShabnamMedium h-[40px] hover:pr-[7px]  transition-all duration-100">
                                <Link className="h-full flex items-center" to="/about"> <TbInfoTriangleFilled className="text-[19px] ml-[10px]" />دربـاره مـا</Link>
                            </li>
                            <li className="font-ShabnamMedium h-[40px] hover:pr-[7px]  transition-all duration-100">
                                <Link className="h-full flex items-center" to="/tickets"><LuTicketCheck className="text-[19px] ml-[10px]" /> بـوک کـردن تـکت</Link>
                            </li>
                            <li className="font-ShabnamMedium h-[40px] hover:pr-[7px]  transition-all duration-100">
                                <Link className="h-full flex items-center" to="/contact"><MdContactPhone  className="text-[19px] ml-[10px]"/> ارتـبـاط بـامـا</Link>
                            </li>
                            <li className="font-ShabnamMedium h-[40px] hover:pr-[7px]  transition-all duration-100">
                                <Link className="h-full flex items-center" to="/blog"><FcRules className="text-[19px] ml-[10px]" /> قوانین و مقررات</Link>
                            </li>
                            <li className="font-ShabnamMedium h-[40px] hover:pr-[7px]  transition-all duration-100">
                                <Link className="h-full flex items-center" to="/blog"><FcQuestions  className="text-[19px] ml-[10px]"/> سوالات متداول</Link>
                            </li>
                        </ul>
                    </div>


                    {/* =============DIV-THREE============= */}
                    <div>
                        <h3 className="font-ShabnamBold text-[22px]">راه های ارتباطی ما</h3>
                        <ul className="w-full mt-[30px]">
                            <li className="text-lightGray font-ShabnamLight mt-[10px] flex">
                                <ImLocation2 className="text-[26px]" /> 
                                <p className="mt-[10px]">کابل، سرای شمالی، جاده عمومی</p>
                            </li>
                            <li className="font-ShabnamLight mt-[15px] flex">
                            <HiPhoneIncoming className="text-[26px]" />
                                <a className="mt-[12px]" href="tel:92788 123 456">63 488 75 078 / </a>  <a className="mt-[12px]" href="tel:93799 654 321">63 488 75 078</a>
                            </li>
                            <li className="font-ShabnamLight mt-[11px] flex">
                            <MdMarkEmailRead className="text-[26px]" />
                                <p className="mt-[12px]">info@hisaraktrans.af</p>
                            </li>
                            <li className="text-light font-ShabnamLight mt-[10px] flex">
                            <RiMapPinTimeFill className="text-[26px]" />
                                <p className="mt-[12px]"> ساعت کاری: ۸ صبح تا ۶ عصر (هر روز بجز جمعه)</p>
                            </li>
                        </ul>

                        {/* ___________SOCIAL__FOOTER____ */}
                        <div className="w-full mt-[20px] flex justify-center">
                            <a className="w-[50px] h-[50px] rounded-[50px] custom-neomorphic-shadow_social bg-DarkGray flex justify-center items-center text-[22px] mx-[5px]" href="https://www.facebook.com/FrontWebAcademy" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook />
                            </a>
                            <a className="w-[50px] h-[50px] rounded-[50px] custom-neomorphic-shadow_social bg-DarkGray flex justify-center items-center text-[22px] mx-[5px]" href="https://www.instagram.com/frontwebacademy/" target="_blank" rel="noopener noreferrer">
                                    <TbBrandInstagram />
                            </a>

                            <a className="w-[50px] h-[50px] rounded-[50px] custom-neomorphic-shadow_social bg-DarkGray flex justify-center items-center text-[22px] mx-[5px]" href="https://t.me/frontwebacademy" target="_blank" rel="noopener noreferrer">
                                    <TbBrandTelegram />
                            </a>

                            <a className="w-[50px] h-[50px] rounded-[50px] custom-neomorphic-shadow_social bg-DarkGray flex justify-center items-center text-[22px] mx-[5px]" href="https://wa.me/989123456789" target="_blank" rel="noopener noreferrer">
                                    <FaSquareWhatsapp />
                            </a>

                        </div>
                        {/* __END_________SOCIAL__FOOTER____ */}
                    </div>
                </section>



                {/* _____________COPY___RIGHT____ */}
                <section className="w-full mt-[40px] border-t-orange-400 ">
                    <p className="text-white text-center font-ShabnamLight font-medium">© 2025 حصارک پنجشیر | تمامی حقوق محفوظ است</p>
                </section>
            </div>
        </footer>
    )
}