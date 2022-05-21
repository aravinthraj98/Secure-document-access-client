import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { LocalHost, RouteAddDocuments, RouteAdminMyProcess } from "../../services/Constants";


export default function ViewProcess(){
    const [process,setProcess] = useState([]);
    const [myPriority, setPriority] = useState(0);
    const navigate = useNavigate();
   useEffect(()=>{
       getAllProcess();
   },[])

   async function getAllProcess(){
       console.log("dd")
       axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
       let data = await axios.get(RouteAdminMyProcess);
       console.log({data:data.data})
       if(data.data!=''){
           setProcess(data.data.method);
           setPriority(data.data.myPriority);
       }
   
       alert("data fetched");
   }

   function getProcess(processId){
       alert("dd")
       const route = "verifyProcess/"+processId
         navigate(route)
         alert("nnnn")

   }
    return(
        <div className="container-fluid">
            <div className="row">
                   {process.map((value,map)=>value[0]!="" &&<div className="col-md-4
                    mt-2 h-25"> 
                    <div className="card">
                        <div className="card-header">
                           <b>Process No <br /></b>
                        <i>{value[0]}</i>
                        </div>
                      <div><b>About process</b><br/><i>{value[1]}</i> </div>
                       {value[3]== myPriority ? <a className="btn btn-info" href={"/verifyProcess/"+value[0]}>Click to View the process</a>: <p className="text-danger">Currently no access</p>}
                       </div>
                   </div>)}
            </div>
        </div>
    )
}