import axios from "axios";
import { useState } from "react"
import { RouteAdminChangePassword } from "../../services/Constants";


export default function ChangePassword(){
    let initialState = {
        password:"",
        newPassword:"",
        confirmPassword:"",
    }
    const [passwords,setPasswords] = useState(initialState);

    async function changePass(){
          axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
          if(passwords.newPassword.length==0 && passwords.newPassword!=passwords.confirmPassword){
              alert("passwords and confirm password should be same");
              return;
          }
        let response = await  axios.post(RouteAdminChangePassword,passwords);
        if(response.data==true){
            alert("password changed successfull");
            setPasswords({...initialState})
        }
        else{
            alert("some error occured")
        }
    }

    return(
        <div className="container w-70 m-10">
        <input type ="password" onChange={(e)=>setPasswords({...passwords,password:e.target.value})} className="form-control m-3"  placeholder="current password" value={passwords.password} />
        <input type ="password" onChange={(e)=>setPasswords({...passwords,newPassword:e.target.value})} className="form-control m-3" placeholder="new password" value={passwords.newPassword} />
        <input type="password" onChange={(e)=>setPasswords({...passwords,confirmPassword:e.target.value})} className="form-control m-3" placeholder="confirm password" value={passwords.confirmPassword} />
        <button className="btn btn-info m-3" onClick={changePass}>Change password</button>
        </div>
        
    )
}