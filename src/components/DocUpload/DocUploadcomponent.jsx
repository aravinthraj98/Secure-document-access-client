import React, { useEffect, useState } from 'react';
import ipfs from '../../services/ipfsService';
import {getApiData} from "../../services/ApiServices"
import { RouteAddDocuments, RouteGetAllDepartment, User } from '../../services/Constants';
import axios from 'axios';
import ServicesComponent from '../ServicesComponent/ServicesComponent';
import ModalComponent from '../ServicesComponent/ModalComponent';

function DocUploadComponent() {
  let initialState = {
    fileValue: '',
    docName: '',
    fileBuffer: '',
    description:'',
    fullAddress:''
   
  
  };
  const [selectedDepartment,setSelectedDepartment] = useState([])

  
  const [file, setFile] = useState(initialState);
  const [files, setFiles] = useState([]);
  const [departments,setDepartments]= useState([]);
  const [modalData,setModalData] = useState(null)

  useEffect(()=>{
          loadDepartments();

  },[])

  const loadDepartments =async()=>{
    let route =User+RouteGetAllDepartment;
    console.log({route})

    let departments = await getApiData(route);
    if(departments!=null)
       setDepartments(departments);



  }
  const fileChange = (e) => {
    console.log(e.target.value);
    let temp = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(temp);
    reader.onloadend = () => {
      setFile({ ...file, fileBuffer: Buffer(reader.result) });
    };
  };
  const addDocuments = (e) => {
    e.preventDefault();
    console.log({ file });
    ipfs.files.add(file.fileBuffer, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        setFiles([
          ...files,
          {
            docName: file.docName,
            url: 'https://ipfs.io/ipfs/' + result[0].hash,
          }
        ]);
        setFile({ ...initialState });
        document.getElementById('file').value = '';
      }
    });
  };
  const handleCheck =(e)=>{
    console.log(e.target.checked);
    let all =[...selectedDepartment];
    if(e.target.checked==false){
        
    all.splice(all.indexOf  (e.target.value),1);
    setSelectedDepartment(all);
    }
     else{
       setSelectedDepartment([...selectedDepartment,e.target.value])
     }
    
  }
  const submit =async()=>{
    let data ={
      docSrc:[...files],
      description:file.description,
      fullAddress:file.fullAddress,
      deptList:selectedDepartment


    }
    console.log({data});
    let route = User+RouteAddDocuments;
    axios.defaults.headers.common["Authorization"]= localStorage.getItem("token");
    console.log({token:localStorage.getItem("token")});
    const response = await axios.post(route,data);
    if(response.data == true || response.data == 'true'){
      alert("process added successfully");
      setFiles([]);
      
    }
    console.log({response});

  }
 
  

  return (
    <>
          <ModalComponent data={modalData} />
      <div className=' container-fluid w-100'>
        <form id={"formDoc"}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className='row m-5'>
            <div className='col-md-4'>Document Name:</div>
            <div className='col-md-8'>
              <input
                type='text'
                placeholder='documentName'
                value={file.docName}
                className='form-control  w-50'
                onChange={(e) => setFile({ ...file, docName: e.target.value })}
              />
            </div>
          </div>
    <div className="row m-5">
        <div className="col-md-4">
            Upload document
        </div>
        <div className="col-md-8">
             <input
            type='file'
            id='file'
            className='form-control w-50'
            onChange={fileChange}
          />
        </div>
    </div>
        <div className="row justify-center">
            <div className="col-md-4"><input
            type='submit'
            className='form-control btn btn-info  w-auto'
            value='Add document'
            onClick={addDocuments}
          /></div>
          <div className="col-md-8">
                <h3 className='btn text-info'>My documents</h3>
              <div className="row">
                    {files.map((value, index) => (
              <div className='col-md-2 bg-light ' style={{backgroundColor:"white",border:"1px solid",borderColor:"whitesmoke"}}>
                <div  style={{display:"flex",justifyContent:"space-between"}}> <div>{value.docName}</div>
                <div onClick={()=>setModalData(value.url)} style={{color:"lightblue",fontWeight:"bold",margin:2,cursor:"pointer"}}>view</div> </div>
                 
                 
              </div>
            ))}

              </div>
              </div>

        </div>

        <div className ="row m-3">
          {departments.map((value,index)=> <div className="col-md-2 text-info font-weight-bold border-box"><input type="checkbox"  value={value}   onClick={handleCheck} className="bg-info" />{value}</div>)}
        </div>
        <div className="row">
          <div className="col-md-6">
            Full Address:<br /><textarea onChange={(e)=>setFile({...file,fullAddress:e.target.value})} rows={3} className="form-control" />
          </div>
            <div className="col-md-6">
            Enter description about your request:<textarea onChange={(e)=>setFile({...file,description:e.target.value})} rows={3} className="form-control" />
          </div>
        </div>
          <input
            type='reset'
            className='form-control btn btn-success m-10  w-auto'
            value='Add New process'
            onClick={submit}
          />
        </form>
      

     
      </div>
    </>
  );
}
export default DocUploadComponent;
