import React from "react";


export default function RegisterComponent(){

    function handleChange(){

    }

return (
  <div className='App App-header'>
    <div className='container ' style={{ width: '50%' }}>
      <h1 className='text-secondary'>Register</h1>
      <input
        type='text'
        placeholder='emailId'
        name='name'
        className='form-control m-1'
        onChange={handleChange}
      />
      <input
        type='password'
        placeholder='password'
        name='password'
        className='form-control m-1'
        onChange={handleChange}
      />
         <input
        type='password'
        placeholder='confirm password'
        name='confirmpassword'
        className='form-control m-1'
        onChange={handleChange}
      />
      
      <input
        type='submit'
        className='btn btn-success form-control'
      
      />
    </div>
  </div>
);

}