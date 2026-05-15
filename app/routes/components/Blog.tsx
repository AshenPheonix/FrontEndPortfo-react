type blogProps = {
    title: string;
    pip: string;
}

export default function BlogPost({ title, pip }: blogProps) {
    return (
        <div className="blog w-50 ml-5 mt-5 p-5">
            <h2 className="blog-title">{title}</h2>
            <p className="blog-pip">{pip}</p>
        </div>
    );
}