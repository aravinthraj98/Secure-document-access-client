import axios from "axios";
import React, { useEffect, useState } from "react";


export default function RegisterComponent(){
  let initialState ={
      email:"",
      password:"",
      confirmPassword:""
  };
  
  const [userDetail,setUserDetail] = useState(initialState)
    function handleChange(e){
           setUserDetail({...userDetail,[e.target.name]:e.target.value});
    }

   async function handleSubmit(){
        if(userDetail.password!=userDetail.confirmPassword){
          alert("password and confirm password must be same");
          return;
        }
        let response = await axios.post("http://localhost:4000/user/register",{...userDetail});
         console.log({response});
        if(response.data.isValid==true){
          alert(response.data.userId);
          localStorage.setItem("token",response.data.token);
          localStorage.setItem('loggedIn',JSON.stringify({loggedIn:true,isAdmin:false,isOwner:false}))
          localStorage.setItem('header',response.data.userId);
           setUserDetail({...initialState});
        }
        else{
          alert("some error occured please try again later")
        }
        
    }
   

return (
  <div className='App App-header'>
    <div className='container ' style={{ width: '50%' }}>
      <h1 className='text-secondary'>Register</h1>
    =
        <input
        type='email'
        placeholder='emailId'
        name='email'
        value={userDetail.email}
        className='form-control m-1'
        onChange={handleChange}
      />
      <input
        type='password'
        placeholder='password'
        name='password'
        value={userDetail.password}
        className='form-control m-1'
        onChange={handleChange}
      />
         <input
        type='password'
        placeholder='confirm password'
        name='confirmPassword'
        value={userDetail.confirmPassword}
        className='form-control m-1'
        onChange={handleChange}
      />
      
      <input
        type='submit'
        className='btn btn-success form-control'
        onClick={handleSubmit}
      
      />
    </div>
  </div>
);

}