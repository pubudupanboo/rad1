

const Navbar = () => {
    return ( 
        <nav className="navbar">

        <h1 class="text-primary">Parking Management System</h1>
        <div className="links">
        <a href="/Home" class="btn btn-info">Home</a>
        <a href="/NewStructure" class="btn btn-success">New Structure</a>
        <a href="/Login" class="btn btn-danger">Login</a>
        </div>
        </nav>


     );
}
 
export default Navbar;