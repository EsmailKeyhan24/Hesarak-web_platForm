import Banner1 from '../assets/image/banner.jpeg'
import Banner2 from '../assets/image/header-2.jpg'
export default function BannerHeader(){
    return(
        <section className="w-full min-h-[300px] bg-slate-400">
            <img src={Banner1} className='w-full h-[440px] object-cover  hidden md:flex' alt="حصارک پنجشیر" />
            <img src={Banner2} className='w-full h-[440px] object-cover md:hidden' alt="حصارک پنجشیر" />
        </section>
    )
}