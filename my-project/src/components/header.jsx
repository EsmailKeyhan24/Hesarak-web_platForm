import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full min-h-[200px] bg-[blue]">
            <nav className="w-full h-[60px] bg-[#97d700]">
                <div className="container mx-auto h-full border flex">
                    <strong> <Link to="/">حـصارک پنجشِیـر</Link> </strong>
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