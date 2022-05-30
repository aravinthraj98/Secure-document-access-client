import axios from "axios";
import { useEffect, useState } from "react"
import { RouteAdminGetProcessed } from "../../services/Constants";


export default function ViewProcessed(){
    const [processed,setProcessed] = useState([]);



    useEffect(()=>{
            getAllProcessed();
    },[])

   async function getAllProcessed(){
    
             axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
             let data = await axios.get(RouteAdminGetProcessed);
             console.log({data});
             setProcessed(data.data);
    }
    function getTime(sec){
        console.log(sec);
        let time = new Date(Number(sec)).toLocaleString()

        console.log(time)
        return time;
    }

    return(
        <div className="container-fluid">
            <div className="row">
                {processed.map((value,index)=>
                <div className="col-md-4">
                    <p>Process Id: {value[1]}</p>
                     <button class="btn btn-primary" type="button" data-toggle="collapse" data-target={"#collapseExample"+index} aria-expanded="false" aria-controls="collapseExample">
     click to view the process
  </button>
  <div class="collapse" id={"collapseExample"+index}>
  <div class="card card-body">
   <table className="table">
       <tbody>
           <tr>
               <td >DepartMent Name:</td>
               <td>{value[0][0]}</td>
           </tr>
            <tr>
               <td>Process opened time</td>
               <td>{getTime(value[0][1])}</td>
           </tr>
           <tr>
               <td>Process closed time</td>
               <td>{getTime(value[0][2])}</td>
           </tr>
           <tr>
               <td>status</td>
               <td>{value[0][3]===true?"approved":"rejected"}</td>
           </tr>
           <tr>
               <td>comments</td>
               <td>{value[0][4]}</td>
           </tr>
            <tr>
               <td>At which address</td>
               <td style={{maxWidth:"50px"}}>{value[0][5]}</td>
           </tr>
       </tbody>
   </table>
  </div>
</div>
                </div>
                )}
                
            </div>
        </div>
    )
}