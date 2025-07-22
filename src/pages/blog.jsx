import React  from "react";
import BlogPost from "../components/blogApi";
export default function Blog(){
    return(
        <section className="w-full mt-[65px]">
            <section className="w-full py-[70px]">
                <div className="container mx-auto px-[20px] lg:px-0">
                    <BlogPost />
                </div>
            </section>
        </section>
    )
}