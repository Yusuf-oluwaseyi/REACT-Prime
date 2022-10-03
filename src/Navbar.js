const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h2>PrimeWatch</h2>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#0c3a9e",
                    borderRadius: "8px",
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;