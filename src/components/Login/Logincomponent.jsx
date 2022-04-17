import React, { useState } from "react"
import getGeneratedKey from "../../services/keyServices";

function Logincomponent(){
    const initialState = {
        name:"",
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
             const result = await getGeneratedKey(detail.password);
             console.log({result});
        var c = document.createElement('a');
        c.download = 'user-text.json';


        var t = new Blob([JSON.stringify(detail)], {
  type: 'application/json',
});
c.href = window.URL.createObjectURL(t);
c.click();
    }

   return(
     <div className='App App-header'>
      <div className="container " style={{width:"50%"}}>
          <h1 className="text-info">Login</h1>
          <input type="text" placeholder="loginId" name="name" className="form-control m-1" onChange={handleChange} />
          <input type="password" placeholder="password" name="password" className="form-control m-1" onChange={handleChange} />
          <input type="submit" className="btn btn-info form-control" onClick={submit} />

      </div>
      </div>
   )

}


export default Logincomponent;