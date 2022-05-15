import React, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import AddEmployee from '../components/AdminHome/AddEmployee';
import DashBoardComponent from '../components/AdminHome/DashBoardComponents';
import MaintainEmployee from '../components/AdminHome/MaintainEmployee';
import VerifyProcess from '../components/AdminHome/VerifyProcess';
import ViewProcess from '../components/AdminHome/ViewProcess';
import DocUploadComponent from '../components/DocUpload/DocUploadcomponent';
import Logincomponent from '../components/Login/Logincomponent';
import ViewProcessStatus from '../components/ProcessComponents/ViewProcessStatus';
import ViewUserProcess from '../components/ProcessComponents/ViewUserProcess';
import RegisterComponent from '../components/Register/RegisterComponent';

export default function AppRouting() {
  let initialState = {
    loggedIn: false,
    isAdmin: false,
    isOwner: false,
  };

  const [isRoute, setRoute] = useState(initialState);
  useEffect(() => {
    console.log('ddd');
    if (localStorage.getItem('loggedIn') != undefined) {
      console.log(JSON.parse(localStorage.getItem('loggedIn')));
      setRoute(JSON.parse(localStorage.getItem('loggedIn')));
    }
  }, []);

  function setLogin(route) {
    console.log({ route });
    setRoute(route);
  }
  return (
    <>
      <nav class='navbar navbar-expand-lg navbar-dark bg-info sticky-top'>
        <a class='navbar-brand' href='#'>
          Navbar
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav'>
            <li class='nav-item active'>
              <a class='nav-link' href='#'>
                Home <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='register'>
                Register
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='verifyDocuments'>
                verifyDocuments
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link ' href='docUpload'>
                docUpload
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link ' href='dashboard'>
                dashboard
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link ' href='manageEmployee'>
                manageEmployee
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Logincomponent setLogin={setLogin} />} />
          <Route path='/Register' element={<RegisterComponent />} />
        </Routes>
      </BrowserRouter>
      {isRoute.loggedIn == true && (
        <BrowserRouter>
          <Routes>
            <Route path='/docUpload' element={<DocUploadComponent />} />
            <Route path='/userProcess' element={<ViewUserProcess />} />
            <Route path='/processStatus/:id' element={<ViewProcessStatus />} />
          </Routes>
        </BrowserRouter>
      )}

      {isRoute.isOwner == true && (
        <BrowserRouter>
          <Routes>
            <Route path='/dashboard' element={<DashBoardComponent />} />
            <Route path='/manageEmployee' element={<MaintainEmployee />} />
            <Route path='/addEmployee' element={<AddEmployee />} />
          </Routes>
        </BrowserRouter>
      )}
      {isRoute.isAdmin == true && (
        <BrowserRouter>
          <Routes>
            <Route path='/myProcess' element={<ViewProcess />} />
            <Route path='/verifyProcess/:id' element={<VerifyProcess />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
