import React, { useEffect, useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import ImgDemo from '../assets/image/banner.jpeg';
import dayjs from "dayjs";
import jalali from "jalali-dayjs"; // افزونه تاریخ شمسی
dayjs.extend(jalali);


// ✅ تغییر در این بخش: Blog
const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const fetchPostById = async (id) => {
        try {
            const res = await fetch(`https://hesarak-backend.vercel.app/api/posts/${id}`);
            const data = await res.json();
            setSelectedPost(data);
        } catch (err) {
            console.error("Error fetching post by ID:", err);
        }
    };

    return (
        <section className="w-full flex flex-wrap">
            <ShowContent post={selectedPost} />
            <PostList onSelectPost={(id) => fetchPostById(id)} />
        </section>
    );
};

export default Blog;


// ✅ تغییر در این بخش: ShowContent با دریافت prop
function ShowContent({ post }) {
    if (!post) {
        return (
            <div className="w-full lg:w-[45%] p-[10px] min-h-[400px] top-[30px]">
                <span className='font-ShabnamLight font-bold text-sm'>جهت مشاهدهٔ محتوای کامل خبر، ابتدا یک خبر از فهرست سمت چپ انتخاب کنید. 👈</span>
                <img src={ImgDemo} className="w-full h-[350px] rounded-sm object-cover" alt="" />
            </div>
        );
    }

    return (
        <div className="w-full lg:w-[45%] p-[10px] min-h-[400px] top-[30px]">
            <img
                src={`https://hesarak-backend.vercel.app${post.image?.url}`}
                className='w-full object-cover h-[350px] rounded-lg'
                alt={post.image?.alt || post.title}
            />
            <h3 className='font-ShabnamBold mt-[15px]'>{post.title}</h3>
            <span className='font-ShabnamLight text-[12px]'>
                {toPersianDigits(dayjs(post.publishedAt).locale('fa').format("YYYY/MM/DD"))}
            </span>
            <p className='font-ShabnamLight'>{post.excerpt || "متن مقاله"}</p>
        </div>
    );
}


const ReadOnlyEditor = ({ initialEditorState }) => {
    const config = {
        namespace: "ReadOnlyEditor",
        editable: false,
        onError: (error) => console.error("Lexical Error:", error),
        editorState: initialEditorState,
    };

    return (
        <LexicalComposer initialConfig={config}>
            <RichTextPlugin
                contentEditable={<ContentEditable className="p-2 bg-gray-50 rounded" />}
                placeholder={null}
            />
            <HistoryPlugin />
        </LexicalComposer>
    );
};


// ✅ تغییر در این بخش: PostList با ارسال onSelectPost
const PostList = ({ onSelectPost }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://hesarak-backend.vercel.app/api/posts")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.docs.filter((post) => post._status === "published"));
            })
            .catch((err) => console.error("Error fetching posts:", err));
    }, []);

    return (
        <div className="w-full lg:w-[50%]">
            <h2 className="mb-4 font-ShabnamBold  custom-neomorphic-shadow py-[10px] px-[22px] text-[25px] border rounded-[100px]">فـهرسـت جدیدتـریـن اخـبار 👇 </h2>
            {posts.map((post) => (
                <div key={post.id} className="lg:pr-5">
                    <div className="w-full flex mt-9 cursor-pointer" onClick={() => onSelectPost(post.id)}>
                        {post.image?.url && (
                            <img
                                src={`https://hesarak-backend.vercel.app${post.image.url}`}
                                alt={post.image?.alt || post.title}
                                className="w-[130px] h-[130px] object-cover"
                            />
                        )}
                        <section className="min-w-[200px] pr-[30px]">
                            <h2 className="text-lg font-ShabnamBold mb-2">{post.title}</h2>
                            <span className="d-flex w-full font-ShabnamLight text-[12px]">
                                تاریخ انتشار: {toPersianDigits(dayjs(post.publishedAt).locale('fa').format("YYYY/MM/DD"))}
                            </span>
                        </section>
                    </div>
                </div>
            ))}
        </div>
    );
};


function toPersianDigits(str) {
    return str.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
}
