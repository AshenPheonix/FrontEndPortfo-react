type blogProps = {
    name: string;
    pip: string;
    about: string;
}

export default function BlogPost({ name, pip, about }: blogProps) {
    return (
        <div className="blog">
            <h2 className="blog-title">{name}</h2>
            <p className="blog-pip">{pip}</p>
            <p className="blog-about">{about}</p>
        </div>
    );
}