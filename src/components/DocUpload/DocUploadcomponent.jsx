import React, { useState } from "react";
import ipfs from "../../services/ipfsService";

function DocUploadComponent(){
    let initialState ={
        fileName:"",
        fileBuffer:"",
       
    }
    const [file,setFile] =useState(initialState);
    const[files,setFiles] =useState([]);
    const fileChange=(e)=>{
        console.log(e.target.value)
        let temp =e.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(temp);
        reader.onloadend=()=>{
            setFile({...file,fileBuffer:Buffer(reader.result)})
           
        }
    }
   const submit =(e)=>{
      e.preventDefault();
      console.log({file})
      ipfs.files.add(file.fileBuffer,(err,result)=>{
          if(err){
              console.log(err);
          }
          else{
              console.log(result)
             setFiles([...files,{fileName:file.fileName,fileUrl:'https://ipfs.io/ipfs/'+result[0].hash}])
             setFile({...initialState})
           
          }
      })
   }

    return(
        <>
        <div className="m-5 container-fluid w-50">

         <input type="text" placeholder="documentName" value={file.fileName} className="form-control m-2" onChange={(e)=>setFile({...file,fileName:e.target.value})} />  
        <input type="file"  className="form-control m-2"  onChange={fileChange} />
        <input type="submit"  className="form-control btn btn-info m-2" value="submit" onClick={submit} />
        </div>
        <div className="container-fluid">
            <h3 className="btn btn-info">My documents</h3>
            <div className="row">
                {files.map((value,index)=>
                <div className="col-md-3 bg-light m-1">
                    <h5>{value.fileName}</h5>
                    <iframe src={value.fileUrl}  />
                </div>)}
            </div>
        </div>
        </>
    )
}
export default DocUploadComponent; 