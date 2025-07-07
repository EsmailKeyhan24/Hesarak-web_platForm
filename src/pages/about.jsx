import React  from "react";
import { Link } from "react-router-dom";
export default function About(){
    return(
        <section className="w-full min-h-[100vh] py-[50px]">
            <div className="container mx-auto">
                <ContentAbout />
            </div>
        </section>
    )
}


function ContentAbout(){
    return(
        <section className="md:w-[70%] mx-auto">
            <h1 className="font-ShabnamBold text-[25px] text-center md:text-[30px] w-full">دربـاره شـرکت حصـارک پـنـجشـیر</h1>
            <p className="text-justify font-ShabnamLight text-[#000] text-[16px] mt-[15px]">
                شرکت ترانسپورتی <strong>حصارک پنجشیر</strong> یکی از معتبرترین ارائه‌دهندگان خدمات مسافربری در افغانستان می‌باشد. ما با استفاده از موترهای 580 , VIP و مجهز، خدمات ترانسپورت منظم و مطمئن را از ولایت کابل به سایر ولایات کشور فراهم می‌کنیم.
            </p>
            <p className="text-[16px] mb-4 text-justify mx-auto font-ShabnamLight text-[#000] mt-[15px]">
          هدف ما فراهم نمودن یک سیستم ترانسپورتی معیاری، امن و قابل اعتماد است تا مسافران عزیز سفرهای آرام، سریع و مطمئن را تجربه نمایند.
        </p>
        <h3 className="text-2xl font-ShabnamBold text-[#000] mt-8 mb-4">خدمات ما</h3>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li className="font-ShabnamLight">ترانسپورت بین‌ولایتی با موترهای مجهز</li>
            <li className="font-ShabnamLight">خرید تکت آنلاین و حضوری</li>
            <li className="font-ShabnamLight">رانندگان حرفه‌ای و مجرب</li>
            <li className="font-ShabnamLight">تیم پاسخ‌گو برای خدمات پشتیبانی</li>
        </ul>
        <p className="text-[16px] mb-4 text-justify mx-auto font-ShabnamLight text-[#000] mt-[15px]">
          ما باور داریم که <strong>رضایت شما، بزرگ‌ترین سرمایه ماست.</strong>
        </p>

        <h3 className="text-2xl font-ShabnamBold text-[#000] mt-8 mb-4"> ارزش‌ها و تعهدات</h3>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li className="font-ShabnamLight">امنیت و سلامت مسافران در اولویت ماست</li>
            <li className="font-ShabnamLight">پایبندی به وقت و زمان‌بندی دقیق</li>
            <li className="font-ShabnamLight">احترام به مسافر و حفظ کرامت انسانی</li>
            <li className="font-ShabnamLight">نوآوری در ارائه خدمات آنلاین (خرید آنلاین تکت، پیگیری سفر و…)</li>
        </ul>

        <p class="mt-6 text-gray-700">
             برای اطلاعات بیشتر یا خرید تکت، لطفاً به 
            <Link  to="/contact" className="text-blue-600 font-ShabnamMedium underline hover:text-blue-800"> صفحه ارتـبـاط باما</Link>
            مراجعه نمایید.
        </p>
        </section>
    )
}