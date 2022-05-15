import axios from "axios";
import { useEffect } from "react"
import { RouteUserProcess } from "../../services/Constants";



export default function ViewUserProcess(){

    
 
    useEffect(()=>{
            getMyProcess();
    },[])
   async function getMyProcess(){
       
         axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
         let response = await axios.get(RouteUserProcess);
         console.log(response)

   }
    return(
<></>
    )
}