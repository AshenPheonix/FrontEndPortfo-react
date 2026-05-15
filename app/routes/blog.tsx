import { Suspense, useEffect, useState } from "react";
import type { Route } from "./+types/home";
import { getPosts } from "~/services/Connect";
import BlogPost from "./components/Blog";
import { skip } from "rxjs";
import type { Post } from "~/types/PostInterface";

export function meta({}: Route.MetaArgs) {

}

export default function Blog() {
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(10);
    const [blogPosts, setBlogPosts] = useState<Post[]>([]);
    const [state, setState] = useState<'loading' | 'loaded' | 'error'>('loading');
    
    useEffect(()=>{
        setState('loading');
        async function fetch(){
            const data = await getPosts(count);
            console.log(data);
            setBlogPosts(data);
            setState('loaded');
        }
        fetch();
    },[])

    function handleClick(){

    }

    return (
        <section className="postList w-full flex flex-col">
            {blogPosts.length == 0 && 
                <Suspense fallback={<div>Loading...</div>}>
                    <div>Loading...</div>
                </Suspense>
            }
            {blogPosts && blogPosts.map((post) => (
                <BlogPost key={post.id} title={post.title} pip={post.pip} />
            ))}
            
        </section>       
    )
}