const NewStructure = () => {
    return ( 

        <div className="container-lg my-5">
            <h1>New Structure</h1>
            <div className="row">
            <div class="col">
                <div className="p-2 text-black">Order</div>
            </div>
            <div class="col">
                <div className="p-2 text-black"><input type="text" /></div>
            </div>
            </div>
            <div className="row">
            <div class="col">
                <div className="p-2 text-black">Hours</div>
            </div>
            <div class="col">
                <div className="p-2 text-black"><input type="text" /></div>
            </div>
            </div>
            <div className="row">
            <div class="col">
                <div className="p-2 text-black">Rate</div>
            </div>
            <div class="col">
                <div className="p-2 text-black"> <input type="text" /> </div>
            </div>
            </div>
            <div className="row">
            <div class="col">
                <div className="p-2 text-black"></div>
            </div>
            <div class="col">
                <div className="p-2 d-grid gap-2 d-md-block text-black"><button type="button" class="btn px-5 btn-primary">Save</button></div>
            </div>
            </div>
           
            

        </div>



     );
}
 
export default NewStructure;