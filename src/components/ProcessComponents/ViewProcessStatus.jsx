import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RouteUserProcess, RouteUserProcessStatus } from "../../services/Constants";

import PDFViewer from "./PDFViewer";



export default function ViewProcessStatus(){
    const { id }= useParams();
    
    
  const [processData,setProcessData] = useState([]);
  const[pdf,setPdf] = useState(false);
  const[status,setStatus] = useState([])
    useEffect(()=>{
        console.log(id)
              getDocument(id);
              
    },[]);
    // async function submit(){
    //     let status ={
    //         openedTime:"2",
    //         closedTime:"4",
    //         approvalDept:'NHAI',
    //         approvedStatus:false,
    //         description:"not applicatble",
            
    //     }
    //     let data ={
    //         status,
    //         currentPriority:1,
    //         processId:id


    //     }
    //       axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
    //     let datas = await axios.post(RouteAdminUpdateProcess,data);
    //     console.log({datas})
    // }

    async function getDocument(id){

       axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
       let data = await axios.get(RouteUserProcessStatus,{
           params:{
               id
           }
       });
       if(data.data!='No access'){
           console.log({data});
           setProcessData(data.data.src);
           setStatus(data.data.status)
          //    setProcess(data);
       }
 
    }
    async function viewPdf(value){
        setPdf(true);
     

    }
   
      
    

    return(
        <div className="container-fluid">
            <div className="container-fluid m-2 h-80">
                <div className="row">
                        {processData.map((value,index)=>

                        <div className="col-md-3">
                                    <div className="row">
                            <div className="col-md-8 bg-light">{value[1]}</div>
                           <button className="col-md-4 btn btn-info">view</button>
                           </div>

                        </div>)}
                </div>
                </div> 
             <div className="container-fluid">
                 <h1>Status</h1>
                   <div className="row">
                {status.map((value,index)=> <div className="col-md-3">
                            <div className="row">
                            <div className="col-md-8 bg-light">Dept:{value[0]} status</div>
                            <PDFViewer value={value} />

                           </div>
                </div>)}
                </div>
               
             </div>
        </div>
    )

}