import axios from "axios";
import React, { useEffect, useState } from "react";
import { getApiData } from "../../services/ApiServices";
import { RouteGetAllDepartment, User } from "../../services/Constants";


export default function AddEmployee({dept}){
  let initialState ={

      email:"",
      deptName:""
  };
  
  const [userDetail,setUserDetail] = useState(initialState)
  const [department,setDepartments] =useState([]);
  useEffect(()=>{
    if(dept==null)
       loadDepartments();
    else{
      console.log({dept})
      setUserDetail({...userDetail,deptName:dept});
    }
  },[])
    function handleChange(e){
           setUserDetail({...userDetail,[e.target.name]:e.target.value});
    }



      const loadDepartments =async()=>{
          
    let route =User+RouteGetAllDepartment;
    console.log({route})

    let departments = await getApiData(route);
    if(departments!=null)
       setDepartments(departments);
       setUserDetail({...userDetail,deptName:departments[0]});



  }

   async function handleSubmit(){
    // let password = (Math.random() + 1).toString(36).substring(7)+(Math.random()+1).toString(36).substring(7);
    let password ="qwerty";
    console.log({userDetail});
  
    let isLead =true;
    if(dept!=null) isLead = false;
    console.log({password})
    console.log({userDetail})
        let response = await axios.post("http://localhost:4000/admin/addEmployee",{...userDetail,password,isLead});
         console.log({response});
        if(response.data.isValid==true){
          alert(response.data.userId);
          localStorage.setItem("token",response.data.token)
           setUserDetail({...initialState,deptName:department[0]});
        }
        else{
          alert("some error occured please try again later")
        }
        
    }
   

return (
  <div className='App App-header'>
    <div className='container ' style={{ width: '50%' }}>
      <h1 className='text-secondary'>Register</h1>
    
        <input
        type='email'
        placeholder='emailId'
        name='email'
        value={userDetail.email}
        className='form-control m-1'
        onChange={handleChange}
      />
         <select className="form-control m-1" value={userDetail.deptName} hidden={dept!=null}  onChange={(e)=>setUserDetail({...userDetail,deptName:e.target.value})}>
              {department.map((value,index)=> <option  key={index+"dept"} value={value}>{value}</option>)}
      </select>
      
      
      <input
        type='submit'
        className='btn btn-success form-control'
        onClick={handleSubmit}
      
      />
      Select department:
   
    </div>
  </div>
);

}

