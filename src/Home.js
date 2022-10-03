import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => { //eslint-disable-next-line
    const [blogs, setBlogs] = useState([
        {title: "Welcome to my home page", body: "lorem ipsium tempor...", author: "Oluseyi", id: 1},
        {title: "Welcome to my party", body: "lorem ipsium tempor...", author: "Jedidiah", id: 2},
        {title: "Welcome to my  blog", body: "lorem ipsium tempor...", author: "Odyllia", id: 3},
    ]);

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);

    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter ((blog) => blog.author === 'Odyllia')} title="Odyllia's Blogs" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;