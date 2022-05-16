import React, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import AddEmployee from '../components/AdminHome/AddEmployee';
import DashBoardComponent from '../components/AdminHome/DashBoardComponents';
import DeptDetails from '../components/AdminHome/DeptDetails';
import MaintainEmployee from '../components/AdminHome/MaintainEmployee';
import VerifyProcess from '../components/AdminHome/VerifyProcess';
import ViewProcess from '../components/AdminHome/ViewProcess';
import ChangePassword from '../components/commonComponents/ChangePassword';
import DocUploadComponent from '../components/DocUpload/DocUploadcomponent';
import Logincomponent from '../components/Login/Logincomponent';
import PDFDownloader from '../components/ProcessComponents/PDFDownloader';
import PDFViewer from '../components/ProcessComponents/PDFViewer';
import ViewProcessStatus from '../components/ProcessComponents/ViewProcessStatus';
import ViewUserProcess from '../components/ProcessComponents/ViewUserProcess';
import RegisterComponent from '../components/Register/RegisterComponent';

export default function AppRouting() {
  let initialState = {
    loggedIn: false,
    isAdmin: false,
    isOwner: false,
    isLead: false,
  };
  const [header, setHeader] = useState('');
  const [isRoute, setRoute] = useState(initialState);
  useEffect(() => {
    console.log('ddd');
    if (localStorage.getItem('loggedIn') != undefined) {
      console.log(JSON.parse(localStorage.getItem('loggedIn')));
      setRoute(JSON.parse(localStorage.getItem('loggedIn')));
      setHeader(` ` + localStorage.getItem('header'));
    }
  }, []);

  function logout() {
    setRoute(initialState);
    localStorage.removeItem('loggedIn');
    window.location.href = 'http://localhost:3000/';
  }
  function setLogin(route) {
    console.log({ route });
    // if (route.isOwner) {
    //   window.location.href = 'http://localhost:3000/deptDetails';
    // } else if (route.isAdmin == true) {
    //   window.location.href = 'http://localhost:3000/myProcess';
    // } else if (route.loggedIn) {
    //   window.location.href = 'http://localhost:3000/userProcess    ';
    // }
    setHeader(localStorage.getItem('header'));
    setRoute(route);
  }
  return (
    <>
      <nav class='navbar navbar-expand-lg navbar-dark bg-info sticky-top'>
        <a class='navbar-brand' href='#'>
          {header}
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
            {isRoute.loggedIn == false && (
              <>
                <li class='nav-item active'>
                  <a class='nav-link' href='/'>
                    login <span class='sr-only'>(current)</span>
                  </a>
                </li>

                <li class='nav-item'>
                  <a class='nav-link' href='register'>
                    Register
                  </a>
                </li>
              </>
            )}
            {isRoute.loggedIn && !isRoute.isAdmin && (
              <>
                <li class='nav-item'>
                  <a class='nav-link ' href='/'>
                    docUpload
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link ' href='userProcess'>
                    my process
                  </a>
                </li>
              </>
            )}
            {isRoute.loggedIn && isRoute.isAdmin && !isRoute.isOwner && (
              <>
                <li class='nav-item'>
                  <a class='nav-link' href='verifyDocuments'>
                    verifyDocuments
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link ' href='/'>
                    my process
                  </a>
                </li>
                {isRoute.isLead && (
                  <li class='nav-item'>
                    <a class='nav-link ' href='addEmployee'>
                      addEmployee
                    </a>
                  </li>
                )}
              </>
            )}

            {isRoute.loggedIn && isRoute.isOwner && (
              <>
                <li class='nav-item'>
                  <a class='nav-link ' href='/'>
                    see departments
                  </a>
                </li>

                <li class='nav-item'>
                  <a class='nav-link ' href='addEmployee'>
                    addEmployee
                  </a>
                </li>
              </>
            )}
            <li class='nav-item'>
              <button className='btn btn-danger' onClick={logout}>
                logout
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path='/changePassword' element={<ChangePassword />} />
          {isRoute.loggedIn == false && (
            <>
              <Route
                path='/'
                element={<Logincomponent setLogin={setLogin} />}
              />
              <Route path='/Register' element={<RegisterComponent />} />
            </>
          )}

          {isRoute.loggedIn == true && !isRoute.isAdmin && (
            <>
              <Route path='/' element={<DocUploadComponent />} />
              <Route path='/userProcess' element={<ViewUserProcess />} />
              <Route
                path='/processStatus/:id'
                element={<ViewProcessStatus />}
              />
            </>
          )}

          {isRoute.isOwner == true && (
            <>
              <Route path='/dashboard' element={<DashBoardComponent />} />
              <Route path='/manageEmployee' element={<MaintainEmployee />} />
              <Route path='/addEmployee' element={<AddEmployee />} />
              <Route path='/' element={<DeptDetails />} />
            </>
          )}
          {isRoute.isAdmin == true && !isRoute.isOwner && (
            <>
              <Route path='/' element={<ViewProcess />} />
              <Route path='/verifyProcess/:id' element={<VerifyProcess />} />
              {isRoute.isLead && (
                <Route
                  path='/addEmployee'
                  element={<AddEmployee dept={header} />}
                />
              )}
            </>
          )}
          <Route path='pdf' element={<PDFDownloader />} />
          {/* <Route path='pdf' element={<PDFViewer value={[1, 2, 3, 4, 5]} />} /> */}

          <Route
            path='*'
            element={<h1 className='m-25'> 404-page not found</h1>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
