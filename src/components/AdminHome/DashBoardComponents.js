import React from 'react';

export default function DashBoardComponent() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-4'>
          Number of approval Pending:5
          <br></br>
          Number of approved/verified:25
        </div>

        <div className='col-md-4'>
          Number of employees:30
          <br></br>
          Department wise employees count:<b>will be dynamic</b>
        </div>
      </div>
    </div>
  );
}
