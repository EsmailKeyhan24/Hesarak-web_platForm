import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react';
import { BsBoxArrowInLeft } from "react-icons/bs";
import { MdInstallDesktop } from "react-icons/md";
import { PiListBold } from "react-icons/pi";
import { FaCircleUser, FaFacebook, FaSquareWhatsapp } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { ImTelegram } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";



export default function Header() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showInstallButton, setShowInstallButton] = useState(false);
    const menuToggleRef = useRef(null);
    const toggleRef = useRef(null);

    useEffect(() => {
        const handleInstallEvent = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowInstallButton(true);
        };

        window.addEventListener('beforeinstallprompt', handleInstallEvent);
        return () => {
            window.removeEventListener('beforeinstallprompt', handleInstallEvent);
        };
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(() => {
                setDeferredPrompt(null);
                setShowInstallButton(false);
            });
        }
    };

    const handleMenu = () => {
        if (menuToggleRef.current) {
            menuToggleRef.current.style.right = "0";
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuToggleRef.current &&
                toggleRef.current &&
                !menuToggleRef.current.contains(e.target) &&
                !toggleRef.current.contains(e.target)
            ) {
                menuToggleRef.current.style.right = "-400px";
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    function closeNavbar() {
        if (menuToggleRef.current) {
            menuToggleRef.current.style.right = "-400px";
        }
    }

    return (
        <header className="w-full min-h-[200px]">
            <nav className="w-full h-[65px] bg-[#f8f9fa] px-[20px]">
                {/* MENU for LG */}
                {/* __________________MENU___LG________ */}
                <div className="container mx-auto h-full  items-center justify-between hidden lg:flex">
                    <strong className="font-PlaypenExtraBold text-DarkGray"> <Link to="/">حـصارک پنجشِیـر</Link> </strong>

                    <ul className="flex h-full items-center">
                        <li className="h-full  text-DarkGray px-[15px] font-PlaypenMedium"><Link className="h-full flex items-center" to="/">صفحه اصلی</Link></li>
                        <li className="h-full  text-DarkGray px-[15px] font-PlaypenMedium"><Link className="h-full flex items-center" to="/about">دربـاره مـا</Link></li>
                        <li className="h-full  text-DarkGray px-[15px] font-PlaypenMedium"><Link className="h-full flex items-center" to="/tickets">بـوک کـردن تـکت</Link></li>
                        <li className="h-full  text-DarkGray px-[15px] font-PlaypenMedium"><Link className="h-full flex items-center" to="/blog">بـلاگ</Link></li>
                        <li className="h-full  text-DarkGray px-[15px] font-PlaypenMedium"><Link className="h-full flex items-center" to="/contact">ارتـبـاط بـامـا</Link></li>
                    </ul>
                    <section className="flex items-center">
                        {showInstallButton && (
                            <button onClick={handleInstallClick} className="font-PlaypenBold mx-[14px] ml-[20px] flex text-DarkGray">
                                <span className="mt-[5px] ml-[5px]"><MdInstallDesktop /></span>  نصب
                            </button>
                        )}
                        <div>
                            <Link to="/" className="font-PlaypenMedium text-[13px] text-DarkGray   py-[7px] px-[14px]  rounded-[100px] flex items-center transition duration-300 ease-in-out hover:bg-[#F3F4F6] "> <span className="text-[20px] ml-[10px]"><BsBoxArrowInLeft /></span> ثبت نام  یا ورود</Link>
                        </div>
                    </section>
                </div>
                {/* ______END___OF____________MENU___LG________ */}

                {/* MENU for Mobile */}
                <div className="h-full flex items-center lg:hidden justify-between relative">
                    <span className="cursor-pointer text-[30px]" onClick={handleMenu} id="Toggle" ref={toggleRef}><PiListBold /></span>
                    <strong className="text-[20px] font-PlaypenBold"><Link to="/">حـصارک پنجشِیـر</Link></strong>
                    <span className="cursor-pointer text-[30px]"><FaCircleUser /></span>

                    {/* ============NAVBAR========== */}
                    <nav className="w-[400px] h-[100vh] bg-[#1f2c30] fixed top-0 right-[-400px] transition-all duration-300 ease-linear flex flex-wrap justify-end content-start px-[20px] py-[20px]" id="menuToggle" ref={menuToggleRef}>
                        {/* ========BTN====CLose====NAVBAR======= */}
                        <span className="flex w-[40px] h-[40px] items-center justify-center cursor-pointer border rounded-[4px] text-[#fff] text-[25px]" onClick={closeNavbar}><IoMdClose /></span>
                        <ul className="w-full mt-[20px]">
                            <li className="text-[#fff] text-[15px] font-PlaypenMedium w-full h-[45px] border-b border-[#f8f8f8]"><Link className="flex w-full h-full items-center " to="/">صفحه اصلی</Link></li>
                            <li className="text-[#fff] text-[15px] font-PlaypenMedium w-full h-[45px] border-b border-[#f8f8f8]"><Link className="flex w-full h-full items-center " to="/about">درباره ما</Link></li>
                            <li className="text-[#fff] text-[15px] font-PlaypenMedium w-full h-[45px] border-b border-[#f8f8f8]"><Link className="flex w-full h-full items-center " to="/tickets">بوک کردن تکت</Link></li>
                            <li className="text-[#fff] text-[15px] font-PlaypenMedium w-full h-[45px] border-b border-[#f8f8f8]"><Link className="flex w-full h-full items-center " to="/blog">بلاگ</Link></li>
                            <li className="text-[#fff] text-[15px] font-PlaypenMedium w-full h-[45px] border-b border-[#f8f8f8]"><Link className="flex w-full h-full items-center " to="/contact">ارتباط با ما</Link></li>
                        </ul>
                        <div className="w-full h-[60px] mt-[40px] flex justify-center items-center gap-[10px] text-[25px] text-[#fff]">
                            <a href="https://www.facebook.com/FrontWebAcademy" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>

                            <a href="https://www.instagram.com/frontwebacademy/" target="_blank" rel="noopener noreferrer">
                                <FaInstagramSquare />
                            </a>

                            <a href="https://t.me/frontwebacademy" target="_blank" rel="noopener noreferrer">
                                <ImTelegram />
                            </a>

                            <a href="https://wa.me/989123456789" target="_blank" rel="noopener noreferrer">
                                <FaSquareWhatsapp />
                            </a>
                        </div>
                        <div className="flex justify-center w-full mt-[10px]">
                            {showInstallButton && (
                                <button onClick={handleInstallClick} className="font-PlaypenBold  ml-[20px] flex text-[#fff]">
                                    <span className="mt-[5px] ml-[5px]"><MdInstallDesktop /></span>  نصب
                                </button>
                            )}
                        </div>
                    </nav>
                </div>
            </nav>
        </header>
    );
}
