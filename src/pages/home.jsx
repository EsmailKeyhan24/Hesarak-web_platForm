import React from "react"
import BannerHeader from "../components/bannerHeader";
import Serach from '../components/search';
import FeaturesSection from "./FeaturesSection";
import Slider from "../components/Slider";
import ContentSlider from "../components/contentSlider";

export default function Home(){
    return(
        <section className="w-full mt-[65px]">
            <BannerHeader />
            <ConentHome />
            <BannerHome />
        </section>
    )
}


function ConentHome(){
    return(
        <section className="w-full  bg-lightGray px-[30px] md:px-0">
            <div className="container mx-auto">
                <div className="w-full md:w-[80%] lg:w-[60%] md:h-[140px] mx-auto  mt-[-95px] md:mt-[-75px] relative z-10 py-10 rounded-md  bg-[white] lg:shadow-md ">
                    <Serach />
                </div>
                <div className="w-full min-h-[100px] mt-[40px]">
                    <FeaturesSection />
                </div>
            </div>
        </section>
    )
}


function BannerHome(){
    return(
        <section className="w-full min-h-[400px] px-[30px] py-[40px]">
            <div className="container mx-auto flex flex-wrap">
                <section className="w-full md:w-[50%] lg:w-[40%] overflow-hidden pt-[30px]">
                    <h2 className="font-ShabnamBold text-sm">بهترین موترهای ترانسپورت VIP و ۵۸۰  حصارک پنجشیر</h2>
                    <p className="font-ShabnamLight my-4">
                        با انتخاب خدمات ترانسپورت ما  ، با موترهای لوکس VIP و ۵۸۰، سفرهای راحت، سریع و ایمن را تجربه کنید.
                    </p>
                    <Slider />
                </section>
                <section className="w-full md:w-[50%] lg:w-[60%] lg:pr-[40px]">
                    <ContentSlider />
                </section>
            </div>
        </section>
    )
}
