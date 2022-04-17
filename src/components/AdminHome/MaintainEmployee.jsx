
import React from "react";

export default function MaintainEmployee(){

  return(
      <>
      <div className="container-fluid w-50 m-1">
           <input type="text" className="form-control m-1" placeholder="employeeName" />
           <input type="text" className="form-control m-1" placeholder="email" />
           <input type="submit" value={"add Employee"} className="btn btn-info m-1" />
      </div>
      <table class="table m-2">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">email</th>
      <th scope="col">edit/delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><button className="btn btn-warning m-1">edit</button><br />
      <button className="btn btn-danger m-1">delete</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
  <td><button className="btn btn-warning m-1">edit</button><br />
      <button className="btn btn-danger m-1">delete</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
     <td><button className="btn btn-warning m-1">edit</button><br />
      <button className="btn btn-danger m-1">delete</button></td>
    </tr>
  </tbody>
</table>
      </>
  )
}