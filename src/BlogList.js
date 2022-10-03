const BlogList = ({ blogs, title, handleDelete }) => {
    return ( 

        <div className="bloglist">
        <h2>{title }</h2>
            {blogs.map ((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h1>{ blog.title }</h1>
                <p>Written by {blog.author }</p>
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
            </div>
            ))}
        </div>
     );
}
 
export default BlogList;