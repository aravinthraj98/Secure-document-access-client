import axios from "axios";
import React, { useState } from "react"
import { RouteUserLogin, RouteVerifierLogin } from "../../services/Constants";
import getGeneratedKey from "../../services/keyServices";

function Logincomponent({setLogin}){
    const initialState = {
        userId:"",
        password:"",
        phoneNumber:"",
        email:"",
        publicKey:"",
    }
    const [detail,setDetail] = useState(initialState);

    const handleChange=(e)=>{
         setDetail({...detail,[e.target.name]:e.target.value});
    }
    const submit =async()=>{
        let route = RouteVerifierLogin;
           if(detail.userId.split('A')[0]=='U'){
                  route =RouteUserLogin;
           }
           const response = await axios.post(route,detail);
           if(response.data.isValid){
               alert("login sucessfull");
               console.log(response.data)
           
               localStorage.setItem("token",response.data.token);
               let logData ={
                 loggedIn: true,
                 isAdmin: false,
                 isOwner: false,
  }
               if(response.data.isAdmin){
                             
                             
                              logData.isAdmin = true;
                              logData.isOwner = response.data.role=='owner'
                              console.log(logData)
                              localStorage.setItem('loggedIn',JSON.stringify(logData))
                              setLogin(logData);
               }
               else{
                      localStorage.setItem('loggedIn',JSON.stringify({loggedIn:true,isAdmin:false,isOwner:false}))
                        setLogin(logData);

               }
           }
           else{
               alert(response.data.msg);
           }
    }

   return(
     <div className='App App-header'>
      <div className="container " style={{width:"50%"}}>
          <h1 className="text-info">Login</h1>
          <input type="text" placeholder="loginId" value={detail.userId}  name="userId" className="form-control m-1" onChange={handleChange} />
          <input type="password" placeholder="password" value={detail.password} name="password" className="form-control m-1" onChange={handleChange} />
          <input type="submit" className="btn btn-info form-control" onClick={submit} />

      </div>
      </div>
   )

}


export default Logincomponent;