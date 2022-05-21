import axios from "axios";
import { useEffect } from "react"
import { RouteAdminGetProcessed } from "../../services/Constants";


export default function ViewProcessed(){



    useEffect(()=>{
            getAllProcessed();
    },[])

   async function getAllProcessed(){
    
             axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
             let data = await axios.get(RouteAdminGetProcessed);
             console.log({data});
    }

    return(
        <>
       
        </>
    )
}