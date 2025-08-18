// import { Link } from "react-router-dom";
// import React, { useEffect, useRef, useState } from 'react';
// // import { BsBoxArrowInLeft } from "react-icons/bs";
// import { MdInstallDesktop } from "react-icons/md";
// import { PiListBold } from "react-icons/pi";
// import { FaCircleUser, FaFacebook, FaSquareWhatsapp } from "react-icons/fa6";
// import { IoMdClose } from "react-icons/io";
// import { ImTelegram } from "react-icons/im";
// import { FaInstagramSquare } from "react-icons/fa";
// import { BsBoxArrowInLeft, BsBoxArrowRight } from "react-icons/bs"; // خروج
// import Logo from '../assets/image/logo1920.png';
// import { useUser } from "../context/UserContext.jsx";



// export default function Header() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [deferredPrompt, setDeferredPrompt] = useState(null);
//     const [showInstallButton, setShowInstallButton] = useState(false);
//     const menuToggleRef = useRef(null);
//     const toggleRef = useRef(null);

//     const checkAuthStatus = async () => {
//         try {
//             const res = await fetch(
//                 "https://hesarak-backend.vercel.app/api/users/me",
//                 {
//                     method: "GET",
//                     headers: { "Content-Type": "application/json" },
//                     credentials: "include", // Important to send cookies
//                 }
//             );

//             if (res.status === 200) {
//                 setIsLoggedIn(true);
//             } else {
//                 setIsLoggedIn(false);
//             }
//         } catch (err) {
//             console.error("Auth check failed:", err);
//             setIsLoggedIn(false);
//         }
//     };

//     const logout = async () => {
//         try {
//             const res = await fetch(
//                 "https://hesarak-backend.vercel.app/admin/logout",
//                 {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     credentials: "include", // Sends the HTTP-only cookie
//                 }
//             );

//             if (res.ok) {
//                 setIsLoggedIn(false);
//             } else {
//                 console.error("Logout failed");
//             }
//         } catch (err) {
//             console.error("Logout error:", err);
//         }
//     };


//     useEffect(() => {
//         checkAuthStatus()
//     }, [])





//     useEffect(() => {
//         const handleInstallEvent = (e) => {
//             e.preventDefault();
//             setDeferredPrompt(e);
//             setShowInstallButton(true);
//         };

//         window.addEventListener('beforeinstallprompt', handleInstallEvent);
//         return () => {
//             window.removeEventListener('beforeinstallprompt', handleInstallEvent);
//         };
//     }, []);

//     const handleInstallClick = () => {
//         if (deferredPrompt) {
//             deferredPrompt.prompt();
//             deferredPrompt.userChoice.then(() => {
//                 setDeferredPrompt(null);
//                 setShowInstallButton(false);
//             });
//         }
//     };

//     const handleMenu = () => {
//         if (menuToggleRef.current) {
//             menuToggleRef.current.style.right = "0";
//         }
//     };

//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (
//                 menuToggleRef.current &&
//                 toggleRef.current &&
//                 !menuToggleRef.current.contains(e.target) &&
//                 !toggleRef.current.contains(e.target)
//             ) {
//                 menuToggleRef.current.style.right = "-400px";
//             }
//         };

//         document.addEventListener('click', handleClickOutside);
//         return () => {
//             document.removeEventListener('click', handleClickOutside);
//         };
//     }, []);


//     function closeNavbar() {
//         if (menuToggleRef.current) {
//             menuToggleRef.current.style.right = "-400px";
//         }
//     }


//     // __________________________CLOSE____menuToggle___To___Phone_State__
//     const _liMenu = document.querySelectorAll('#menuToggle>ul>li')
//     _liMenu.forEach((li) => {
//         li.addEventListener('click', () => {
//             document.getElementById('menuToggle').style.right = '-400px'
//         })
//     })

//     return (
//         <header className="w-full bg-[red] fixed top-0  z-[999]">
//             <nav className="w-full h-[65px] bg-[#f8f9fa] px-[20px]">
//                 {/* MENU for LG */}
//                 {/* __________________MENU___LG________ */}
//                 <div className="container mx-auto h-full  items-center justify-between hidden lg:flex">
//                     <div className="w-[90px] h-[65] flex flex-wrap">
//                         <a href="https://hesarakbus.com" title="لوگوی حصارک پنجشیر"><img src={Logo} className="w-[50px] rounded-[50%]" alt="لوگوی حصارک پنجشیر" /></a>
//                         <strong className="font-PlaypenExtraBold text-DarkGray text-[12px]"> <Link to="/">حـصارک پنجشِیـر</Link> </strong>
//                     </div>

//                     <ul className="flex h-full items-center">
//                         <li className="h-full  text-DarkGray px-[15px] font-ShabnamMedium"><Link className="h-full flex items-center" to="/">صفحه اصلی</Link></li>
//                         <li className="h-full  text-DarkGray px-[15px] font-ShabnamMedium"><Link className="h-full flex items-center" to="/about">دربـاره مـا</Link></li>
//                         <li className="h-full  text-DarkGray px-[15px] font-ShabnamMedium"><Link className="h-full flex items-center" to="/blog">بـلاگ</Link></li>
//                         <li className="h-full  text-DarkGray px-[15px] font-ShabnamMedium"><Link className="h-full flex items-center" to="/contact">ارتـبـاط بـامـا</Link></li>
//                     </ul>
//                     <section className="flex items-center">
//                         {showInstallButton && (
//                             <button onClick={handleInstallClick} className="font-ShabnamBold mx-[14px] ml-[20px] flex text-DarkGray">
//                                 <span className="mt-[5px] ml-[5px]"><MdInstallDesktop /></span>  نصب
//                             </button>
//                         )}
//                         {!isLoggedIn && <div>
//                             <Link to="/login" className="font-ShabnamBold text-[13px] text-DarkGray   py-[7px] px-[14px]  rounded-[100px] flex items-center transition duration-300 ease-in-out hover:bg-[#F3F4F6] ">
//                                 <span className="text-[20px] ml-[10px]"><BsBoxArrowInLeft /></span> ثبت نام  یا ورود
//                             </Link>
//                         </div>}
//                         {/* {isLoggedIn && <div className="w-[180px] h-[45px] group">
//                             <strong className="w-full h-full flex items-center cursor-pointer font-ShabnamBold">اسماعیل کیهان</strong>
//                             <ul className="w-full bg-white p-2 rounded-sm duration-150 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
//                                 <li className="w-full h-[40px] flex items-center font-ShabnamBold"><Link to={'/tickets'}>سفر های من</Link></li>
//                                 <li className="w-full h-[40px] flex items-center">
//                                     <button onClick={logout} className="font-ShabnamBold text-[13px] text-DarkGray   py-[7px] px-[14px]  rounded-[100px] flex items-center transition duration-300 ease-in-out hover:bg-[#F3F4F6] ">
//                                         <span className="text-[20px] ml-[10px] font-ShabnamBold"><BsBoxArrowRight /></span>خروج
//                                     </button>
//                                 </li>
//                             </ul>
//                         </div>
//                         } */}
//                         {isLoggedIn && (
//                             <div className="w-[180px] h-[45px] group">
//                                 <strong className="w-full h-full flex items-center cursor-pointer font-ShabnamBold">
//                                     {user?.name || "کاربر"}
//                                 </strong>
//                                 <ul className="w-full bg-white p-2 rounded-sm duration-150 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
//                                     <li className="w-full h-[40px] flex items-center font-ShabnamBold">
//                                         <Link to={'/tickets'}>سفر های من</Link>
//                                     </li>
//                                     <li className="w-full h-[40px] flex items-center">
//                                         <button onClick={logout} className="font-ShabnamBold text-[13px] text-DarkGray py-[7px] px-[14px] rounded-[100px] flex items-center transition duration-300 ease-in-out hover:bg-[#F3F4F6]">
//                                             <span className="text-[20px] ml-[10px] font-ShabnamBold"><BsBoxArrowRight /></span>
//                                             خروج
//                                         </button>
//                                     </li>
//                                 </ul>
//                             </div>
//                         )}

//                     </section>
//                 </div>
//                 {/* ______END___OF____________MENU___LG________ */}

//                 {/* MENU for Mobile */}
//                 <div className="h-full flex items-center lg:hidden justify-between relative">
//                     <span className="cursor-pointer text-[30px]" onClick={handleMenu} id="Toggle" ref={toggleRef}><PiListBold /></span>
//                     <strong className="text-[20px] font-PlaypenBold"><Link to="/">حـصارک پنجشِیـر</Link></strong>
//                     <span className="cursor-pointer text-[30px] "><Link to="/login"><FaCircleUser /></Link></span>

//                     {/* ============NAVBAR========== */}
//                     <nav className="w-[360px] h-[100vh] bg-[#1f2c30] fixed top-0 right-[-400px] transition-all duration-300 ease-linear flex flex-wrap justify-end content-start px-[20px] py-[20px] z-[99999]" id="menuToggle" ref={menuToggleRef}>
//                         {/* ========BTN====CLose====NAVBAR======= */}
//                         <span className="flex w-[40px] h-[40px] items-center justify-center cursor-pointer border rounded-[4px] text-[#fff] text-[25px]" onClick={closeNavbar}><IoMdClose /></span>
//                         <ul className="w-full mt-[20px]">
//                             <li className="text-[#fff] text-[15px] font-ShabnamMedium w-full h-[45px] border-b border-[#f8f8f8]"><Link className="flex w-full h-full items-center " to="/">صفحه اصلی</Link></li>
//                             <li className="text-[#fff] text-[15px] font-ShabnamMedium w-full h-[45px] border-b border-[#f8f8f8]"><Link className="flex w-full h-full items-center " to="/about">درباره ما</Link></li>
//                             <li className="text-[#fff] text-[15px] font-ShabnamMedium w-full h-[45px] border-b border-[#f8f8f8]"><Link className="flex w-full h-full items-center " to="/blog">بلاگ</Link></li>
//                             <li className="text-[#fff] text-[15px] font-ShabnamMedium w-full h-[45px] border-b border-[#f8f8f8]"><Link className="flex w-full h-full items-center " to="/contact">ارتباط با ما</Link></li>
//                             <li className="text-[#fff] text-[15px] font-ShabnamMedium w-full h-[45px] border-b border-[#f8f8f8] flex items-center">
//                                 {isLoggedIn ? (
//                                     <button className="flex items-center">
//                                         <BsBoxArrowRight className="ml-2" /> خروج
//                                     </button>
//                                 ) : (
//                                     <Link to="/login" className="flex items-center">
//                                         <BsBoxArrowInLeft className="ml-2" /> ثبت نام یا ورود
//                                     </Link>
//                                 )}
//                             </li>
//                         </ul>
//                         <div className="w-full h-[60px] mt-[40px] flex justify-center items-center gap-[10px] text-[25px] text-[#fff]">
//                             <a href="https://www.facebook.com/FrontWebAcademy" target="_blank" rel="noopener noreferrer">
//                                 <FaFacebook />
//                             </a>

//                             <a href="https://www.instagram.com/frontwebacademy/" target="_blank" rel="noopener noreferrer">
//                                 <FaInstagramSquare />
//                             </a>

//                             <a href="https://t.me/frontwebacademy" target="_blank" rel="noopener noreferrer">
//                                 <ImTelegram />
//                             </a>

//                             <a href="https://wa.me/989123456789" target="_blank" rel="noopener noreferrer">
//                                 <FaSquareWhatsapp />
//                             </a>
//                         </div>
//                         <div className="flex justify-center w-full mt-[10px]">
//                             {showInstallButton && (
//                                 <button onClick={handleInstallClick} className="font-PlaypenBold  ml-[20px] flex text-[#fff]">
//                                     <span className="mt-[5px] ml-[5px]"><MdInstallDesktop /></span>  نصب
//                                 </button>
//                             )}
//                         </div>
//                     </nav>
//                 </div>
//             </nav>
//         </header>
//     );
// }





import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react';
import { MdInstallDesktop } from "react-icons/md";
import { PiListBold } from "react-icons/pi";
import { FaCircleUser, FaFacebook, FaSquareWhatsapp } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { ImTelegram } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { BsBoxArrowInLeft, BsBoxArrowRight } from "react-icons/bs";
import Logo from '../assets/image/logo1920.png';
import { useUser } from "../context/UserContext.jsx";

export default function Header() {
    const { user, isLoggedIn, setUser } = useUser(); // ✅ استفاده از Context
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showInstallButton, setShowInstallButton] = useState(false);
    const menuToggleRef = useRef(null);
    const toggleRef = useRef(null);

    const logout = async () => {
        try {
            const res = await fetch(
                "https://hesarak-backend.vercel.app/admin/logout",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                }
            );

            if (res.ok) {
                setUser(null); // ❌ پاک کردن اطلاعات کاربر
            } else {
                console.error("Logout failed");
            }
        } catch (err) {
            console.error("Logout error:", err);
        }
    };

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


    // __________________________CLOSE____menuToggle___To___Phone_State__
    const _liMenu = document.querySelectorAll('#menuToggle>ul>li')
    _liMenu.forEach((li) => {
        li.addEventListener('click', () => {
            document.getElementById('menuToggle').style.right = '-400px'
        })
    })


    const closeNavbar = () => {
        if (menuToggleRef.current) menuToggleRef.current.style.right = "-400px";
    };

    return (
        <header className="w-full bg-[red] fixed top-0 z-[999]">
            <nav className="w-full h-[65px] bg-[#f8f9fa] px-[20px]">
                {/* --- MENU for LG --- */}
                <div className="container mx-auto h-full items-center justify-between hidden lg:flex">
                    <div className="w-[90px] h-[65px] flex flex-wrap">
                        <a href="https://hesarakbus.com" title="لوگوی حصارک پنجشیر">
                            <img src={Logo} className="w-[50px] rounded-[50%]" alt="لوگو" />
                        </a>
                        <strong className="font-PlaypenExtraBold text-DarkGray text-[12px]">
                            <Link to="/"> شرکت ترانسپورتی حـصارک پنجشِیـر</Link>
                        </strong>
                    </div>
                    <ul className="flex h-full items-center">
                        <li className="h-full text-DarkGray px-[15px] font-ShabnamMedium">
                            <Link className="h-full flex items-center" to="/">صفحه اصلی</Link>
                        </li>
                        <li className="h-full text-DarkGray px-[15px] font-ShabnamMedium">
                            <Link className="h-full flex items-center" to="/about">دربـاره مـا</Link>
                        </li>
                        <li className="h-full text-DarkGray px-[15px] font-ShabnamMedium">
                            <Link className="h-full flex items-center" to="/blog">بـلاگ</Link>
                        </li>
                        <li className="h-full text-DarkGray px-[15px] font-ShabnamMedium">
                            <Link className="h-full flex items-center" to="/contact">ارتـبـاط بـامـا</Link>
                        </li>
                    </ul>
                    <section className="flex items-center">
                        {showInstallButton && (
                            <button onClick={handleInstallClick} className="font-ShabnamBold mx-[14px] ml-[20px] flex text-DarkGray">
                                <span className="mt-[5px] ml-[5px]"><MdInstallDesktop /></span> نصب
                            </button>
                        )}
                        {!isLoggedIn ? (
                            <Link to="/login" className="font-ShabnamBold text-[13px] text-DarkGray py-[7px] px-[14px] rounded-[100px] flex items-center hover:bg-[#F3F4F6]">
                                <BsBoxArrowInLeft className="ml-[10px]" /> ثبت نام یا ورود
                            </Link>
                        ) : (
                            <div className="w-[180px] h-[45px] group">
                                <strong className="w-full h-full flex items-center cursor-pointer font-ShabnamBold">
                                    {user?.user.email || "کاربر"}
                                </strong>
                                <ul className="w-full bg-white p-2 rounded-sm duration-150 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                    <li className="w-full h-[40px] flex items-center font-ShabnamBold">
                                        <Link to={'/tickets'} className="flex w-full hover:bg-[#F3F4F6] px-[4px] py-[4px] rounded-[4px]">سفر های من</Link>
                                    </li>
                                    <li className="w-full h-[40px] flex items-center">
                                        <button onClick={logout} className="font-ShabnamBold text-[13px] text-DarkGray py-[4px] w-full rounded-[4px] flex items-center hover:bg-[#F3F4F6]">
                                             <BsBoxArrowRight className="ml-[10px]" /> خروج
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </section>
                </div>



                {/* MENU for Mobile */}
                <div className="h-full flex items-center lg:hidden justify-between relative">
                    <span className="cursor-pointer text-[30px]" onClick={handleMenu} id="Toggle" ref={toggleRef}><PiListBold /></span>
                    <strong className="text-[20px] font-PlaypenBold"><Link to="/">حـصارک پنجشِیـر</Link></strong>
                    <span className="cursor-pointer text-[30px] "><Link to="/login"><FaCircleUser /></Link></span>

                    {/* ============NAVBAR========== */}
                    <nav className="w-[360px] h-[100vh] bg-[#1f2c30] fixed top-0 right-[-400px] transition-all duration-300 ease-linear flex flex-wrap justify-end content-start px-[20px] py-[20px] z-[99999]" id="menuToggle" ref={menuToggleRef}>
                        {/* ========BTN====CLose====NAVBAR======= */}
                        <span className="flex w-[40px] h-[40px] items-center justify-center cursor-pointer border rounded-[4px] text-[#fff] text-[25px]" onClick={closeNavbar}><IoMdClose /></span>
                        <ul className="w-full mt-[20px]">
                            <li className="text-[#fff] text-[15px] font-ShabnamMedium w-full h-[45px] border-b border-[#f8f8f8]"><Link className="flex w-full h-full items-center " to="/">صفحه اصلی</Link></li>
                            <li className="text-[#fff] text-[15px] font-ShabnamMedium w-full h-[45px] border-b border-[#f8f8f8]"><Link className="flex w-full h-full items-center " to="/about">درباره ما</Link></li>
                            <li className="text-[#fff] text-[15px] font-ShabnamMedium w-full h-[45px] border-b border-[#f8f8f8]"><Link className="flex w-full h-full items-center " to="/blog">بلاگ</Link></li>
                            <li className="text-[#fff] text-[15px] font-ShabnamMedium w-full h-[45px] border-b border-[#f8f8f8]"><Link className="flex w-full h-full items-center " to="/contact">ارتباط با ما</Link></li>
                            <li className="text-[#fff] text-[15px] font-ShabnamMedium w-full h-[45px] border-b border-[#f8f8f8] flex items-center">
                                {/* {isLoggedIn ? (
                                    <button className="flex items-center">
                                        <BsBoxArrowRight className="ml-2" /> خروج
                                    </button>
                                ) : (
                                    <Link to="/login" className="flex items-center">
                                        <BsBoxArrowInLeft className="ml-2" /> ثبت نام یا ورود
                                    </Link>
                                )} */}
                                {!isLoggedIn ? (
                                    <Link to="/login" className="font-ShabnamBold text-[13px] text-DarkGray py-[7px] px-[14px] rounded-[100px] flex items-center hover:bg-[#F3F4F6]">
                                        <BsBoxArrowInLeft className="ml-[10px]" /> ثبت نام یا ورود
                                    </Link>
                                ) : (
                                    <div className="w-[180px] h-[45px] group">
                                        <strong className="w-full h-full flex items-center cursor-pointer font-ShabnamBold">
                                            {user?.user.email || "کاربر"}
                                        </strong>
                                        <ul className="w-full bg-white p-2 rounded-sm duration-150 opacity-0 invisible group-hover:opacity-100 group-hover:visible relative z-10">
                                            <li className="w-full h-[40px] flex items-center font-ShabnamBold text-DarkGray">
                                                <Link to={'/tickets'} className="flex w-full hover:bg-[#F3F4F6] px-[4px] py-[4px] rounded-[4px]">سفر های من</Link>
                                            </li>
                                            <li className="w-full h-[40px] flex items-center">
                                                <button onClick={logout} className="font-ShabnamBold text-[13px] text-DarkGray py-[4px] w-full rounded-[4px] flex items-center hover:bg-[#F3F4F6]">
                                                    <BsBoxArrowRight className="ml-[10px]" /> خروج
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
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






