import React  from "react";
export default function Contact(){
    return(
        <section className="w-full min-h-[300px py-[50px]">
            <div className="container mx-auto flex justify-center flex-wrap">
                <h1 className="font-ShabnamBold text-[30px] text-center w-full"> ارتباط با شرکت ترانسپورتی حصارک پنجشیر</h1>
                <p className="font-ShabnamLight lg:w-[70%] text-justify mt-[20px]">
                    شرکت ترانسپورتی حصارک پنجشیر با سال‌ها تجربه در زمینه حمل‌ونقل شهری و بین‌شهری، آماده است تا خدماتی مطمئن، سریع و حرفه‌ای را به مشتریان گرامی ارائه نماید.
                    در صورتی که سوال، پیشنهاد، یا انتقادی دارید، خوشحال می‌شویم از طریق یکی از راه‌های زیر با ما در تماس شوید. هدف ما رضایت کامل شماست.
                </p>
                <section className="w-full min-h-[100px] py-[50px]">
                    <Map />
                    <ContactAbout />
                </section>
            </div>
        </section>
    )
}

function Map(){
    return(
        <div className="lg:w-[70%] border mx-auto h-[350px]">
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13146.41279005968!2d69.1446149!3d34.5382799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16f70c9593667%3A0x4eb6762902bb0720!2sFrontWe!5e0!3m2!1sfa!2s!4v1711180698531!5m2!1sfa!2s"
                         loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}


function ContactAbout(){
    return(
        <div className="lg:w-[80%] mx-auto mt-[40px]">
            <h2 className="font-ShabnamMedium">اطـلاعات تـماس دفـترمـرکـزی و نـمایـندگــی هــا</h2>

            {/* =========Cards================ */}
            <div className="w-full flex flex-wrap py-[40px] justify-between">


                {/* ________________Section______One____________ */}
                <section className="w-full sm:w-[50%] md:w-[30%] p-[12px]  mt-[20px] border-b">
                    <h3 className="font-ShabnamBold">دفـترمـرکـزی</h3>
                    <ul className="w-full mt-[20px]">
                        <li>
                            <p className="font-ShabnamLight text-[14px] font-black">شماره تماس دفتر مرکزی</p>
                            <div className="w-full">
                                <a href="tel:+93700000000">93700000000</a> /
                                <a href="tel:+93700000000">93700000000</a>
                            </div>
                        </li>
                        <li className="mt-[20px]">
                            <p className="font-ShabnamLight text-[14px] font-black">آدرس فیـزیـکـی شـرکـت</p>
                            <p className="font-ShabnamLight text-justify">
                                1- دفتر مرکزی لوای بابه جان  ترمینال پایتخت <br />
                                2-دفتر نمایندگی چهاراهی بره کی <br />
                                3-دفتر نمایندگی سرای سعادت  <br />
                                4-دفتر نمایندگی جاده میوند
                            </p>
                        </li>
                    </ul>
                </section>



                {/* _______________________Section_____________Tow____________ */}
                <section className="w-full sm:w-[50%] md:w-[30%]  mt-[20px] px-[10px] border-b">
                <h3 className="font-ShabnamBold text-[15px]">نمایندگی ولایت سمنگان </h3>
                    <ul className="w-full mt-[20px]">
                        <li>
                            <p className="font-ShabnamLight text-[14px] font-black">شماره تماس </p>
                            <div className="w-full">
                                <a href="tel:+93۷۹۶۰۰۵۰۸۵">۰۷۹۶۰۰۵۰۸۵</a> /
                                <a href="tel:+93۷۷۵۴۰۰۷۶۲">۰۷۷۵۴۰۰۷۶۲</a>
                            </div>
                        </li>
                        <li className="mt-[20px]">
                            <p className="font-ShabnamLight text-[14px] font-black">آدرس فیـزیـکـی نمایـندگـی</p>
                            <p className="font-ShabnamLight text-justify">
                                نمایندگی ولایت سمنگان واقع بندر کابل
                            </p>
                        </li>
                    </ul>
                </section>


                {/* _________________Section_______________Three________________ */}
                <section className="w-full sm:w-[50%] md:w-[30%]  mt-[20px] border-b">
                <h3 className="font-ShabnamBold text-[15px]">نمایندگی مزار شریف</h3>
                    <ul className="w-full mt-[20px]">
                        <li>
                            <p className="font-ShabnamLight text-[14px] font-black">شماره تماس </p>
                            <div className="w-full">
                                <a href="tel:+93۷۹۶۰۰۵۰۸۵">۰۷۹۶۰۰۵۰۸۵</a> /
                                <a href="tel:+93۷۷۵۴۰۰۷۶۲">۰۷۷۵۴۰۰۷۶۲</a>
                            </div>
                        </li>



                        <li className="mt-[20px]">
                            <p className="font-ShabnamLight text-[14px] font-black">آدرس فیـزیـکـی نمایـندگـی</p>
                            <p className="font-ShabnamLight text-justify">
                                1- دروازه جمهوری مقابل پارک افغان ترک      
                            </p>
                            <div>
                                <a href="tel:+93۷۹۹۳۸۳۸۷۱">۰۷۹۹۳۸۳۸۷۱</a> /
                                <a href="tel:+93۷۹۲۶۰۳۰۳۰">۰۷۹۲۶۰۳۰۳۰</a>
                            </div>
                            <p className="font-ShabnamLight text-justify">
                                2- دروازه بلخ عقب مارکیت کفایت
                            </p>
                            <div>
                                <a href="tel:+93۷۹۵۰۰۵۱۱۵">۰۷۹۵۰۰۵۱۱۵</a> /
                                <a href="tel:+92۷۸۶۳۰۹۴۰۹">۰۷۸۶۳۰۹۴۰۹</a>
                            </div>
                        </li>
                    </ul>
                </section>


                {/* _____________________section____________Foure________________ */}
                <section className="w-full sm:w-[50%] md:w-[30%]  mt-[20px] border-b">
                <h3 className="font-ShabnamBold text-[15px]">نمایندگی آقچه</h3>
                    <ul className="w-full mt-[20px]">
                        <li>
                            <p className="font-ShabnamLight text-[14px] font-black">شماره تماس </p>
                            <div className="w-full">
                                <a href="tel:+93۷۹۱۸۵۸۵۸۰">۰۷۹۱۸۵۸۵۸۰</a>
                            </div>
                        </li>

                        <li className="mt-[20px]">
                            <p className="font-ShabnamLight text-[14px] font-black">آدرس فیـزیـکـی نمایـندگـی</p>
                            <p className="font-ShabnamLight text-justify">
                                شهر آقچه واقع سرای چوب فروشی        
                            </p>
                        </li>
                    </ul>
                </section>


                 {/* _____________________section____________Five________________ */}
                 <section className="w-full sm:w-[50%] md:w-[30%]  mt-[20px] border-b">
                <h3 className="font-ShabnamBold text-[15px]">نمایندگی جوزجان</h3>
                    <ul className="w-full mt-[20px]">
                        <li>
                            <p className="font-ShabnamLight text-[14px] font-black">شماره تماس </p>
                            <div className="w-full">
                                <a href="tel:+94۰۷۹۷۵۰۰۰۵۶">۰۷۹۷۵۰۰۰۵۶</a> / 
                                <a href="tel:+93۰۷۸۱۴۳۰۷۰۷">۰۷۸۱۴۳۰۷۰۷</a>
                            </div>
                        </li>

                        <li className="mt-[20px]">
                            <p className="font-ShabnamLight text-[14px] font-black">آدرس فیـزیـکـی نمایـندگـی</p>
                            <p className="font-ShabnamLight text-justify">
                            آدرس نمایندگی ناحیه ۴ ترمینال جوزجان      
                            </p>
                        </li>
                    </ul>
                </section>




                 {/* _____________________section____________Sixe________________ */}
                 <section className="w-full sm:w-[50%] md:w-[30%]  mt-[20px] md:px-[15px] border-b">
                <h3 className="font-ShabnamBold text-[15px]">نمایندگی اندخوی </h3>
                    <ul className="w-full mt-[20px]">
                        <li>
                            <p className="font-ShabnamLight text-[14px] font-black">شماره تماس </p>
                            <div className="w-full">
                                <a href="tel:+93۷۹۶۲۱۰۲۶۰">۰۷۹۶۲۱۰۲۶۰</a> / 
                                <a href="tel:+93۷۸۰۸۴۱۳۱۳">۰۷۸۰۸۴۱۳۱۳</a>
                            </div>
                        </li>

                        <li className="mt-[20px]">
                            <p className="font-ShabnamLight text-[14px] font-black">آدرس فیـزیـکـی نمایـندگـی</p>
                            <p className="font-ShabnamLight text-justify">
                                آدرس نمایندگی اندخوی واقع چوک اندخوی
                            </p>
                        </li>
                    </ul>
                </section>



                 {/* _____________________section____________Siven  ________________ */}
                 <section className="w-full sm:w-[50%] md:w-[30%] mt-[20px] md:px-[15px] border-b">
                <h3 className="font-ShabnamBold text-[15px]">نمایندگی ولایت فاریاب</h3>
                    <ul className="w-full mt-[20px]">
                        <li>
                            <p className="font-ShabnamLight text-[14px] font-black">شماره تماس </p>
                            <div className="w-full">
                                <a href="tel:+93۷۹۷۵۰۰۰۹۵">۰۷۹۷۵۰۰۰۹۵</a> / 
                                <a href="tel:+93۷۹۷۵۰۰۰۹۴">۰۷۹۷۵۰۰۰۹۴</a>
                            </div>
                        </li>

                        <li className="mt-[20px]">
                            <p className="font-ShabnamLight text-[14px] font-black">آدرس فیـزیـکـی نمایـندگـی</p>
                            <p className="font-ShabnamLight text-justify">
                            آدرس نمایندگی  فاریاب 
                            بغل بازار واقع تربت جام بابا 
                            </p>
                        </li>
                    </ul>
                </section>



                {/* _____________________section____________Ethe  ________________ */}
                <section className="w-full sm:w-[50%] md:w-[30%]  mt-[20px] md:px-[15px] border-b">
                <h3 className="font-ShabnamBold text-[15px]">نمایندگی ولایت سرپل</h3>
                    <ul className="w-full mt-[20px]">
                        <li>
                            <p className="font-ShabnamLight text-[14px] font-black">شماره تماس </p>
                            <div className="w-full">
                                <a href="tel:+93۷۹۷۵۰۰۰۶۲">۰۷۹۷۵۰۰۰۶۲</a> / 
                                <a href="tel:+93۷۴۹۵۶۴۶۴۶">۰۷۴۹۵۶۴۶۴۶</a>
                            </div>
                        </li>

                        <li className="mt-[20px]">
                            <p className="font-ShabnamLight text-[14px] font-black">آدرس فیـزیـکـی نمایـندگـی</p>
                            <p className="font-ShabnamLight text-justify">
                                آدرس نمایندگی    واقع عزیزی بانک پهلوی گدام باغ  
                            </p>
                        </li>
                    </ul>
                </section>



              {/* _____________________section____________Nine ________________   */}
                <section className="w-full sm:w-[50%] md:w-[30%] mt-[20px] md:px-[15px] border-b">
                <h3 className="font-ShabnamBold text-[15px]">نمایندگی ولایت کندز</h3>
                    <ul className="w-full mt-[20px]">
                        <li>
                            <p className="font-ShabnamLight text-[14px] font-black">شماره تماس </p>
                            <div className="w-full">
                                <a href="tel:+93۰۷۹۷۵۰۰۰۲۹">۰۷۹۷۵۰۰۰۲۹</a>
                            </div>
                        </li>

                        <li className="mt-[20px]">
                            <p className="font-ShabnamLight text-[14px] font-black">آدرس فیـزیـکـی نمایـندگـی</p>
                            <p className="font-ShabnamLight text-justify">
                                 آدرس  نمایندگی ولایت کندز واقع سه درک ترمینال کندز
                            </p>
                        </li>
                    </ul>
                </section>



                 {/* _____________________section____________Teen ________________   */}
                 <section className="w-full sm:w-[50%] md:w-[30%] mt-[20px] md:px-[15px] border-b">
                <h3 className="font-ShabnamBold text-[15px]">نمایندگی ولایت تخار</h3>
                    <ul className="w-full mt-[20px]">
                        <li>
                            <p className="font-ShabnamLight text-[14px] font-black">شماره تماس </p>
                            <div className="w-full">
                                <a href="tel:+93۷۹۹۵۶۳۲۲۲ ">۰۷۹۹۵۶۳۲۲۲ </a> / 
                                <a href="tel:+93۷۴۷۹۰۹۰۳۰">۰۷۴۷۹۰۹۰۳۰</a>
                            </div>
                        </li>

                        <li className="mt-[20px]">
                            <p className="font-ShabnamLight text-[14px] font-black">آدرس فیـزیـکـی نمایـندگـی</p>
                            <p className="font-ShabnamLight text-justify">
                             آدرس نمایندگی واقع پل کلان ترمینال دریا
                            </p>
                        </li>
                    </ul>
                </section>



                 {/* _____________________section____________11 ________________   */}
                 <section className="w-full sm:w-[50%] md:w-[30%]  mt-[20px] md:px-[15px] border-b">
                <h3 className="font-ShabnamBold text-[15px]">نمایندگی والسوالی خواجه غار</h3>
                    <ul className="w-full mt-[20px]">
                        <li>
                            <p className="font-ShabnamLight text-[14px] font-black">شماره تماس </p>
                            <div className="w-full">
                                <a href="tel:+93۷۹۹۴۰۱۴۱۳ ">۰۷۹۹۴۰۱۴۱۳ </a> / 
                                <a href="tel:+93۷۸۰۰۰۰۱۸۰">۰۷۸۰۰۰۰۱۸۰</a>
                            </div>
                        </li>

                        <li className="mt-[20px]">
                            <p className="font-ShabnamLight text-[14px] font-black">آدرس فیـزیـکـی نمایـندگـی</p>
                            <p className="font-ShabnamLight text-justify">
                            آدرس نمایندگی والسوالی خواجه غار قلب شهر 
                            واقع مسجد جامع 
                            </p>
                        </li>
                    </ul>
                </section>



                {/* _____________________section____________11 ________________   */}
                <section className="w-full sm:w-[50%] md:w-[30%]  mt-[20px] md:px-[15px] border-b">
                <h3 className="font-ShabnamBold text-[15px]"> نمایندگی والسوالی دشت قلعه</h3>
                    <ul className="w-full mt-[20px]">
                        <li>
                            <p className="font-ShabnamLight text-[14px] font-black">شماره تماس </p>
                            <div className="w-full">
                                <a href="tel:+93۷۰۴۷۴۷۶۷۳ ">۰۷۰۴۷۴۷۶۷۳ </a> / 
                                <a href="tel:+93۷۹۶۰۰۵۰۶۶">۰۷۹۶۰۰۵۰۶۶</a>
                            </div>
                        </li>

                        <li className="mt-[20px]">
                            <p className="font-ShabnamLight text-[14px] font-black">آدرس فیـزیـکـی نمایـندگـی</p>
                            <p className="font-ShabnamLight text-justify">
                                آدرس نمایندگی والسوالی دشت قلعه 
                                واقع بلاک تاش تیمور 
                            </p>
                        </li>
                    </ul>
                </section>



                 {/* _____________________section____________12 ________________   */}
                 <section className="w-full sm:w-[50%] md:w-[30%]  mt-[20px] md:px-[15px] border-b">
                <h3 className="font-ShabnamBold text-[15px]"> نمایندگی والسوالی ینگی قلعه</h3>
                    <ul className="w-full mt-[20px]">
                        <li>
                            <p className="font-ShabnamLight text-[14px] font-black">شماره تماس </p>
                            <div className="w-full">
                                <a href="tel:+93۷۰۵۴۰۰۷۴۵ ">۰۷۰۵۴۰۰۷۴۵ </a> / 
                                <a href="tel:+93۷۸۱۷۲۷۲۸۷">۰۷۸۱۷۲۷۲۸۷</a>
                            </div>
                        </li>

                        <li className="mt-[20px]">
                            <p className="font-ShabnamLight text-[14px] font-black">آدرس فیـزیـکـی نمایـندگـی</p>
                            <p className="font-ShabnamLight text-justify">
                                آدرس نمایندگی والسوالی ینگی قلعه 
                                چوک ینگی قلعه
                            </p>
                        </li>
                    </ul>
                </section>



                 {/* _____________________section____________13 ________________   */}
                 <section className="w-full sm:w-[50%] md:w-[30%]  mt-[20px] md:px-[15px] border-b">
                <h3 className="font-ShabnamBold text-[15px]"> نمایندگی والسوالی امام صاحب</h3>
                    <ul className="w-full mt-[20px]">
                        <li>
                            <p className="font-ShabnamLight text-[14px] font-black">شماره تماس </p>
                            <div className="w-full">
                                <a href="tel:+93۷۰۳۰۳۰۳۵۰ ">۰۷۰۳۰۳۰۳۵۰ </a> / 
                                <a href="tel:+93۷۴۹۶۶۶۵۶۵">۰۷۴۹۶۶۶۵۶۵</a>
                            </div>
                        </li>

                        <li className="mt-[20px]">
                            <p className="font-ShabnamLight text-[14px] font-black">آدرس فیـزیـکـی نمایـندگـی</p>
                            <p className="font-ShabnamLight text-justify">
                               آدرس نمایندگی والسوالی امام صاحب 
                                واقع عده جدید کندز 
                            </p>
                        </li>
                    </ul>
                </section>



                {/* _____________________section____________14 ________________   */}
                <section className="w-full sm:w-[50%] md:w-[30%]  mt-[20px] md:px-[15px] border-b">
                <h3 className="font-ShabnamBold text-[15px]">نمایندگی کشم </h3>
                    <ul className="w-full mt-[20px]">
                        <li>
                            <p className="font-ShabnamLight text-[14px] font-black">شماره تماس </p>
                            <div className="w-full">
                                <a href="tel:+93۷۹۷۵۰۰۰۷۸ ">۰۷۹۷۵۰۰۰۷۸ </a>
                            </div>
                        </li>

                        <li className="mt-[20px]">
                            <p className="font-ShabnamLight text-[14px] font-black">آدرس فیـزیـکـی نمایـندگـی</p>
                            <p className="font-ShabnamLight text-justify">
                                نمایندگی کشم واقع باغ شاروالی
                            </p>
                        </li>
                    </ul>
                </section>



                {/* _____________________section____________15 ________________   */}
                <section className="w-full sm:w-[50%] md:w-[30%] mt-[20px] md:px-[15px] border-b">
                <h3 className="font-ShabnamBold text-[15px]">نمایندگی فیض اباد بدخشان</h3>
                    <ul className="w-full mt-[20px]">
                        <li>
                            <p className="font-ShabnamLight text-[14px] font-black">شماره تماس </p>
                            <div className="w-full">
                                <a href="tel:+93۷۹۶۰۰۵۰۲۰ ">۰۷۹۶۰۰۵۰۲۰ </a> / 
                                <a href="tel:+93۷۹۶۰۰۵۰۸۳">۰۷۹۶۰۰۵۰۸۳</a>
                            </div>
                        </li>

                        <li className="mt-[20px]">
                            <p className="font-ShabnamLight text-[14px] font-black">آدرس فیـزیـکـی نمایـندگـی</p>
                            <p className="font-ShabnamLight text-justify">
                               آدرس نمایندگی فیض اباد بدخشان 
                               چوک حاجی خلیل ترمینال فیض اباد
                            </p>
                        </li>
                    </ul>
                </section>




                {/* _____________________section____________16 ________________   */}
                <section className="w-full sm:w-[50%] md:w-[30%] mt-[20px] px-[12px]">
                <h3 className="font-ShabnamBold text-[15px]">نمایندگی بهارک بدخشان</h3>
                    <ul className="w-full mt-[20px]">
                        <li>
                            <p className="font-ShabnamLight text-[14px] font-black">شماره تماس </p>
                            <div className="w-full">
                                <a href="tel:+93۷۹۷۵۰۰۰۹۹ ">۰۷۹۷۵۰۰۰۹۹ </a> / 
                                <a href="tel:+93۷۷۸۳۰۹۴۰۹">۰۷۷۸۳۰۹۴۰۹</a>
                            </div>
                        </li>

                        <li className="mt-[20px]">
                            <p className="font-ShabnamLight text-[14px] font-black">آدرس فیـزیـکـی نمایـندگـی</p>
                            <p className="font-ShabnamLight text-justify">
                               آدرس  نمایندگی بهارک بدخشان پل شلشه ترمینال بهارک بدخشان
                            </p>
                        </li>
                    </ul>
                </section>
            </div>
            {/* ====End========Cards================ */}
        </div>
    )
}
