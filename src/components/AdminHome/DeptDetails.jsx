import axios from "axios";
import { useEffect, useState } from "react"
import { RouteAdminGetDeptDetails } from "../../services/Constants";

export default function DeptDetails(){
    let initialState ={
        dept:'',
        priority:0,
    }
    const [dept,setDept] = useState(null);
    const [data,setData] = useState(initialState);
    useEffect(()=>{
          getDepartmentDetails();
    },[])

   async function getDepartmentDetails(){
        
         axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
         let data = await axios.get(RouteAdminGetDeptDetails);
         setDept(data.data);
         setData({dept:data.data.dept[0],priority:data.data.priority[data.data.dept[0]]})
         console.log({data})

    }

    return(
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
           <button onClick={()=>alert("saved")}>save</button>
       </td>
       
      </tr>

    
   
    
     
  </tbody>
</table>
    )
}