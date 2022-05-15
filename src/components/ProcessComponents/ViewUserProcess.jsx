import axios from "axios";
import { useEffect, useState } from "react"
import { RouteUserProcess } from "../../services/Constants";



export default function ViewUserProcess(){
    const[process,setProcess] = useState([]);

    
 
    useEffect(()=>{
            getMyProcess();
    },[])
   async function getMyProcess(){
       
         axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
         let response = await axios.get(RouteUserProcess);
         if(response){
             setProcess(response.data);
            console.log(response)
         }
         

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
                       <a href={"/processStatus/"+value[0]}>Click to View the process</a>
                       </div>
                   </div>)}
            </div>
        </div>
    )
}