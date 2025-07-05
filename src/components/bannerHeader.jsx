import Banner from '../assets/image/banner.jpeg'
export default function BannerHeader(){
    return(
        <section className="w-full min-h-[300px] bg-slate-400">
            <img src={Banner} className='w-full h-[440px] object-cover' alt="" />
        </section>
    )
}