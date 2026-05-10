import { Suspense, useEffect, useState } from "react";
import type { Route } from "./+types/home";
import { getPosts } from "~/services/Connect";
import BlogPost from "./components/Blog";
import { skip } from "rxjs";

export function meta({}: Route.MetaArgs) {

}

export default function Blog() {
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(10);
    const [blogPosts, setBlogPosts] = useState(null);
    const [state, setState] = useState();

    useEffect(() =>{
        const subscription = getPosts()
            .pipe(skip(1))
            .subscribe((data) => {
                setCount(data.count);
                setBlogPosts(data.posts);
            });
        return () => {
            subscription.unsubscribe();
        }
    },[])

    function handleClick(){

    }

    return (
        <section className="postList">
            {!blogPosts && 
                <Suspense fallback={<div>Loading...</div>}>
                    <div>Loading...</div>
                </Suspense>
            }
            {blogPosts && blogPosts.map((post) => (
                <BlogPost key={post.id} name={post.name} pip={post.pip} about={post.about}/>
            ))}
            {count > increment && 
            }
        </section>       
    )
}