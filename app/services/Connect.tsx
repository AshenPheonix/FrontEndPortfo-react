import axios from "axios";

const server = import.meta.env.VITE_SERVER_URL;

let lastpost = 0;

export async function getPosts(lastPost=0){
    if(lastPost == 0){
        const response =  await axios.get(`${server}/blog`);
        const data = response.data;
        lastpost = data.count;
        return data;
    }
    if (lastpost >0) {
        const response =  await axios.get(`${server}/blog?offset=${lastPost+1}`);
        const data = response.data;
        lastpost = data.count+lastPost;
        return data;
    }
}
export async function getPost(id:number){
    const response =  await axios.get(`${server}/blog/${id}`);
    const data = response.data;
    return data;
}