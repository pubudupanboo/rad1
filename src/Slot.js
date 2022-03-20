const Slot = () => {
    return ( 

        <div className="container-lg my-5">
            <h1>Slot</h1>
            <div className="row">
            <div class="col">
                <div className="p-2 text-black">Date</div>
            </div>
            <div class="col">
                <div className="p-2 text-black"><input type="text" name="date" id="date" placeholder="03/05/2022"/></div>
            </div>
            </div>
            <div className="row">
            <div class="col">
                <div className="p-2 text-black">Start Time</div>
            </div>
           
            <div class="col">
                <div className="p-2 text-black"><input data-provide="datepicker" placeholder="09:30 AM"/></div>
            </div>
            </div>
            <div className="row">
            <div class="col">
                <div className="p-2 text-black">End Time</div>
            </div>
            <div class="col">
                <div className="p-2 text-black"> <input type="text" placeholder="10:30 AM"/> </div>
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
 
export default Slot;