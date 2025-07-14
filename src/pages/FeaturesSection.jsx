// components/FeaturesSection.jsx
import React from "react";
import FeatureCard from "./FeatureCard";

// آیکون‌ها از Lucide
import { CalendarCheck, Headphones, ShieldCheck, MapPin } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: CalendarCheck,
      title: "اخذ تکت",
      description: "در چند ثانیه و بدون دردسر، تکت سفر خود را خرید کنید!",
    },
    {
      icon: Headphones,
      title: "پشتیبانی شبانه‌روزی",
      description: "تیم ما ۲۴ ساعته در تمام روزهای هفته همراه شماست!",
    },
    {
      icon: ShieldCheck,
      title: "امنیت و راحتی سفر",
      description: "با ما مطمئن و با آرامش کامل سفر کنید.",
    },
    {
      icon: MapPin,
      title: " دسترسی به نمایندگی‌ها در تمام ولایات",
      description: "فرقی نمی‌کند در کابل باشید یا ولایت؛ نمایندگی‌های ما در سراسر افغانستان آماده خدمت‌رسانی به شما هستند.",
    },
  ];

  return (
    <section className="pb-7">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold font-ShabnamBold text-center mb-10">
          چرا ما را انتخاب کنید؟
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
