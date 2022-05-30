import { useEffect, useState, useSyncExternalStore } from "react"


export default function ModalComponent({data}){
    const [dataURL,setDataURL] =useState(null)
    const[loading,setLoading] =useState(false);

useEffect(()=>{
      if(data!=null){
         
          setDataURL(data);
          console.log({data});
      
           document.getElementById("myModel").click();
      }
      return()=>
        setDataURL("");
},[data])


    return(
        <>

     <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" id="myModel" style={{display:"none"}}>
  Launch demo modal
</button>


<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">View document</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style={{height:"70vh",width:" 100%"}}>
           <embed src={dataURL} style={{height:"100%",width:"100%"}} />
      
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
   </>
    )
}