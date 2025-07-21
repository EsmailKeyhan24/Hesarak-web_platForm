import React  from "react";
import BlogPost from "../components/blogApi";
export default function Blog(){
    return(
        <section className="w-full mt-[65px]">
            <section className="w-full py-[70px]">
                <div className="container mx-auto">
                    <BlogPost />
                </div>
            </section>
        </section>
    )
}