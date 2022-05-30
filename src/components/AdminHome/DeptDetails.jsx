import axios from "axios";
import { useEffect, useState } from "react"
import { RouteAdminAddDepartment, RouteAdminGetDeptDetails, RouteAdminModifyPriority } from "../../services/Constants";

export default function DeptDetails(){
    let initialState ={
        dept:'',
        priority:0,
    }
    let initialDept ={
      deptName:"",
      priority:1
    }
    const [loading,setLoading] = useState(false);
    const [addTab,setAddTab] =useState(false);
    const [dept,setDept] = useState(null);
    const [data,setData] = useState(initialState);
    const [newDept,setNewDept] =useState(initialDept)
    useEffect(()=>{
          getDepartmentDetails();
    },[])

    async function modifyPriority(){
      setLoading(true);
      if(data.priority==0 || data.priority==''){
               alert(" some error occured");
      }
      else{
           axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
          let response = await axios.post(RouteAdminModifyPriority,data);
          if(response.data==true){
            alert("updation successfull");
                     setData({dept:dept.dept[0],priority:dept.priority[dept.dept[0]]})
                        getDepartmentDetails();
          }
          else{
            alert("internal server error");
         

          }

      }
      setLoading(false);
    }

   async function getDepartmentDetails(){
        
         axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
         let data = await axios.get(RouteAdminGetDeptDetails);
         setDept(data.data);
         setData({dept:data.data.dept[0],priority:data.data.priority[data.data.dept[0]]})
         console.log({data})

    }

    async function addDept(){
      setLoading(true);
            axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
            let data = await axios.post(RouteAdminAddDepartment,newDept);
            console.log(data.data);
            if(data.data==true){
              setNewDept(initialDept);
              getDepartmentDetails();
              setAddTab(false);
            }
            setLoading(false);
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
    if(addTab){
      return(
         <div className="container m-10">
            <button type="button" className="btn btn-warning m-2" onClick={()=>setAddTab(!addTab)}>{addTab?"See department":"Add department"}</button>
<table class="table"></table>
        <input type="text" placeholder="department name" name="deptName" onChange={(e)=>setNewDept({...newDept,deptName:e.target.value})}  className="form-control m-3" />
        <input type="number" name="priority" placeholder="priority" onChange={(e)=>setNewDept({...newDept,priority:e.target.value})} className="form-control m-3" />
        <button className="btn btn-info" onClick={addDept}>Add new Department</button>
      </div>
      )
     
    }

    return(
      <>
      <button type="button" className="btn btn-warning m-2" onClick={()=>setAddTab(!addTab)}>{addTab?"See department":"Add department"}</button>
<table class="table">
    
  <thead>

    <tr>
      <th scope="col">#</th>
      <th scope="col">department Name</th>
      <th scope="col">priority</th>
    </tr>
  </thead>
  <tbody>
      
  {dept && dept.dept.map((value,index)=> <tr>
      <th scope="row">{index+1}</th>
     
      <td>{value}</td>
      <td>{dept.priority[value]}</td>
    </tr>)}
    <tr>

      <th scope="row">edit here</th>
      <td>
          
       <select onChange={(e)=>setData({dept:e.target.value,priority:dept.priority[e.target.value]})} value={data.dept}>
            {dept && dept.dept.map((value,index)=><option value={value}>{value}</option>)}
       </select>
       </td>
       <td>
           <input type="number" onChange={(e)=>setData({...data,priority:e.target.value})} value={data.priority} />
           <button onClick={modifyPriority}>save</button>
       </td>
       
      </tr>

    
   
    
     
  </tbody>
</table>
</>
    )
}