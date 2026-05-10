import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getPosts } from "~/services/Connect";
import type { Post } from "~/types/PostInterface";

export default function single(which=0) {
    const nav = useNavigate();
    const [post, setPost] = useState<null | Post>(null);
    useEffect(()=>{
        if(which == 0){
            nav(`/blog`);
        } else {
            getPosts(which).subscribe((data) => {
                if(data.error){
                    return (
                        <section className="error">
                            <h1>Post Not Found</h1>
                            <p>The requested post could not be found.</p>
                        </section>
                    )
                } else {
                    setPost(data);
                }
            }).unsubscribe();
        }
    }, [])

    return (
        <section className="singlePost">
            <h1>{post?.title}</h1>
            <h2>{post?.author}</h2>
            <pre>{post?.stuff}</pre>
        </section>
    )
}