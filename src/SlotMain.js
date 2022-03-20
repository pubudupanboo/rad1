const SlotMain = () => {
    return ( 

      
      <div className="container-lg my-5">
          <h1 class="display-4" >Slot Main Page</h1>
          <div className="row">
          <div class="col-3">
              <div className="p-3">Slot</div>
          </div>
         
          <div class="col-9">
              <div className="p-3"><input type="text" placeholder="A0001"/></div>
          </div>
          </div>
          <div className="row">
          <div class="col-3">
              <div className="p-3">Enabled</div>
          </div>
         
          <div class="col-9">
              <div className="p-3"><input type="checkbox" name="" id="" /></div>
          </div>
          </div>
         
          <div className="row">
          <div class="input-group p-3">
            <span class="input-group-text">Default Opening Time</span>
            <input type="text" aria-label="First name" class="form-control" placeholder="07:00 AM"/>
             <input type="text" aria-label="Last name" class="form-control" placeholder="10:00 PM"/>
            </div>
          </div>

          <div class="d-grid gap-2 d-md-block text-end">
            <button class="btn btn-primary text-center px-5" type="button">Save</button>

            </div>


      </div>



     );
}
 
export default SlotMain;