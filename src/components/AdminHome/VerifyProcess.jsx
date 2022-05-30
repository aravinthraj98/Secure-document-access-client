import axios from "axios";
import { useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { LocalHost, RouteAdminUpdateProcess, RouteAdminVerifyProcess } from "../../services/Constants";
import ModalComponent from "../ServicesComponent/ModalComponent";


export default function VerifyProcess(){
    

    const { id }= useParams();
    
  const [processData,setProcessData] = useState([]);
  const [modalData,setModalData] =useState(null);
  const [loading,setLoading] = useState(false);
  let openedTime = Date.now();
    useEffect(()=>{
        console.log(id)
              getDocument(id);
              
    },[]);
    async function submit(e){
        setLoading(true);
        console.log(e.target.value)
        let status ={
            openedTime,
            closedTime:Date.now(),
            approvalDept:'',
            approvedStatus:e.target.value,
            description:"not applicable",
            
        }
        console.log({status})
        
        let data ={
            status,
            currentPriority:1,
            processId:id


        }
          axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
        let datas = await axios.post(RouteAdminUpdateProcess,data);
        alert("RESPONSE SAVED SUCCESSFULLY");
        window.location.href ="http://localhost:3000/"
        console.log({datas})
        setLoading(false);
    }

    async function getDocument(id){

        axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
       let data = await axios.get(RouteAdminVerifyProcess,{
           params:{
               id
           }
       });
       if(data.data!='No access'){
           console.log(data);
           setProcessData(data.data.src);
        
        //    setProcess(data);
       }
       else{
           alert("unauthorized access")
       }
 
    }
    function setData(value){
        setModalData(value);
        setTimeout(()=>{
            setModalData(null);
        },3000)
    }
    if(processData.length==0){
        return(
            <>
            no documents to be shown
          </>
        )
    }

    if(loading){
           return(
      <div className='container-fluid' style={{width:'100%',height:'100%',marginTop:'20%',marginLeft:'45%'}}>

     
    <div class="spinner-border text-primary" role="status">
  <span class="sr-only">Adding new process</span>
</div>
 </div>
    )
    }

    return(
        <div className="container-fluid">
                <ModalComponent data={modalData} />
               <div className="container" style={{display:"flex",flexDirection:"row",justifyContent:"space-around",margin:10}}>
                 <button className="btn btn-danger" value={false} onClick={submit}>
                     Rejected
                 </button>
                      <button className="btn btn-success" value={true} onClick={submit}>
                     Approved
                 </button>
             </div>
            <div className="container-fluid m-2 h-80">
                <div className="row">
                        {processData.map((value,index)=>

                        <div className="col-md-3">
                                    <div className="row">
                            <div className="col-md-8 bg-light">{value[1]}</div>
                           <button className="col-md-4 btn btn-info" onClick={()=>setData(value[0])}>view</button>
                           </div>

                        </div>)}
                </div>
                </div> 
          
        </div>
    )

}