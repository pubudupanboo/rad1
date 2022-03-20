

const Navbar = () => {
    return ( 
        // <nav className="navbar">
        <nav class="navbar navbar-dark bg-primary">



        <h1 class="text-white display-6">Parking Management System</h1>
        <div className="links">
        <a href="/Home" class="btn btn-warning">Home</a>
        <a href="/NewStructure" class="btn btn-warning">New Structure</a>
        <a href="/Login" class="btn btn-warning">Login</a>
        <a href="/Slot" class="btn btn-warning">Slot</a>
        <a href="/SlotMain" class="btn btn-warning">SlotMain</a>
        <a href="/SlotDisableRule" class="btn btn-warning">SlotDisableRule</a>
        </div>
        </nav>


     );
}
 
export default Navbar;