import React, { useEffect, useState } from "react";
import ImgDemo from '../assets/image/about-header.jpg'
import dayjs from "dayjs";
import jalali from "jalali-dayjs"; // افزونه تاریخ شمسی
dayjs.extend(jalali); 
const Blog = () => {


    return (
        <section className="w-full flex flex-wrap">
            <ShowContent />
            <BlogCards />
        </section>
    );
};

export default Blog;




function ShowContent() {
    return (
        <div className="w-full lg:w-[45%] p-[10px] min-h-[400px] sticky top-[30px]">
            <h2 className='font-ShabnamBold w-[150px] rounded-sm py-[10px] px-[22px] bg-DarkGray text-white mb-[15px]'>جـدیدترین اخـبار</h2>
            <img src={ImgDemo} className='w-full object-cover h-[350px] rounded-lg' alt="xxxxxx" />
            <h3 className='font-ShabnamBold mt-[15px]'>This come text of Api</h3>
            <span className='font-ShabnamLight text-[12px]'>1404 / 5/ 29</span>
            <p className='font-ShabnamLight'>this is body if texts</p>
        </div>
    )
}


function BlogCards() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://192.168.0.21:8000/api/blog/posts/")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("خطا در دریافت داده‌ها");
                }
                return res.json();
            })
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("خطا:", Error);
                setError(Error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>در حال بارگذاری...</p>;
    if (Error) return <p>خطا: {Error}</p>;
    return (
        <div className="w-full lg:w-[55%] flex flex-wrap align-content-start">
            <h1 className="mb-4 font-ShabnamBold w-[150px] rounded-sm py-[10px] px-[22px] bg-DarkGray text-white">مقالات وبلاگ</h1>
            <section className="w-full lg:ps-[30px]">
                {posts.length === 0 ? (
                    <p className="text-red-600">هیچ پستی یافت نشد.</p>
                ) : (
                    posts.map((post) => (
                        <div
                            key={post.id}
                            className="p-4 flex cursor-pointer"
                        >
                            <img src={post.img} className="w-[130px] h-[130px] border" alt="" />
                            <section className="w-[400px] border pr-[30px]">
                                <h2 className="text-xl font-ShabnamBold">{post.title}</h2>
                                <p className="text-gray-700 mb-2 font-ShabnamLight">{post.body}</p>
                                {post.author && <p className="text-[10px] text-gray-500 font-ShabnamLight">نویسنده: {post.author}</p>}
                                {post.published && (
                                // <p className="text-sm text-gray-400">تاریخ انتشار: {post.published?.slice(0,7)}</p>)}
                                <p className="text-sm text-gray-400 font-ShabnamLight">تاریخ انتشار: {dayjs(post.published).locale('fa').format("YYYY/MM/DD")}</p>)}
                            </section>
                        </div>
                    ))
                )}
            </section>
        </div>
    )
}













