import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

export default function Header() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showInstallButton, setShowInstallButton] = useState(false);

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault(); // جلوگیری از نمایش پیش‌فرض مرورگر
            setDeferredPrompt(e); // ذخیره event برای استفاده بعد
            setShowInstallButton(true); // نمایش دکمه نصب
        });
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt(); // نمایش پنجره نصب
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('✅ کاربر نصب را قبول کرد');
                } else {
                    console.log('❌ کاربر نصب را رد کرد');
                }
                setDeferredPrompt(null);
                setShowInstallButton(false);
            });
        }
    };

    return (
        <header className="w-full min-h-[200px] bg-[blue]">
            <nav className="w-full h-[60px] bg-[#97d700]">
                <div className="container mx-auto h-full border flex items-center">
                    <strong> <Link to="/">حـصارک پنجشِیـر</Link> </strong>
                    {showInstallButton && (
                        <button onClick={handleInstallClick} className="mx-[14px] font-bold">
                            نصب اپلیکیشن
                        </button>
                    )}
                    <ul className="flex h-full items-center">
                        <li className="px-[15px]"><Link to="/">صفحه اصلی</Link></li>
                        <li className="px-[15px]"><Link to="/about">دربـاره مـا</Link></li>
                        <li className="px-[15px]"><Link to="/tickets">بـوک کـردن تـکت</Link></li>
                        <li className="px-[15px]"><Link to="/blog">بـلاگ</Link></li>
                        <li className="px-[15px]"><Link to="/contact">ارتـبـاط بـامـا</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}