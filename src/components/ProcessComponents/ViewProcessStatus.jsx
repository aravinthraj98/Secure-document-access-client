import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RouteUserProcess, RouteUserProcessStatus } from "../../services/Constants";
import ModalComponent from "../ServicesComponent/ModalComponent";
import PDFDownloader from "./PDFDownloader";

import PDFViewer from "./PDFViewer";



export default function ViewProcessStatus(){
    const { id }= useParams();
    
    
  const [processData,setProcessData] = useState([]);
  const[pdf,setPdf] = useState(false);
  const[status,setStatus] = useState([])
  const [modalData,setModalData] = useState(null);
  const [approvalDept,setApprovalDept] =  useState([]);
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
           setApprovalDept(data.data.approvalDept)
          //    setProcess(data);
       }
 
    }
    async function viewPdf(value){
        setPdf(true);
     

    }
   
      
    

    return(
        <div className="container-fluid">
                <ModalComponent data={modalData} />
            <div className="container-fluid m-2 h-80">
                <div className="row">
                        {processData.map((value,index)=>

                        <div className="col-md-3">
                                    <div className="row">
                            <div className="col-md-8 bg-light">{value[1]}</div>
                           <button className="col-md-4 btn btn-info" onClick={()=>setModalData(value[0])}>view</button>
                           </div>

                        </div>)}
                </div>
                <table className="table m-5 mr-5 w-75">
                 
                       <tr>
                           <td>Department</td>
                       <td>department priority</td>
                       </tr>
                      

           
                   {approvalDept.map((value,index)=> value[1]!=0?<tr>
                       <td>{value[0]}</td>
                       <td>{value[1]}</td>
                   </tr>:<></>)}
                </table>
                </div> 
             <div className="container-fluid">
                 <h1>Status</h1>
                   <div className="row">
                {status.map((value,index)=> <div className="col-md-3">
                            <div className="row">
                            <div className="col-md-8 bg-light">Dept:{value[0]}</div>
                            <PDFDownloader value={value} />

                           </div>
                </div>)}
                </div>
               
             </div>
        </div>
    )

}