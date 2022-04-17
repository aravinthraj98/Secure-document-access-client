import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import DashBoardComponent from '../components/AdminHome/DashBoardComponents';
import MaintainEmployee from '../components/AdminHome/MaintainEmployee';
import DocUploadComponent from '../components/DocUpload/DocUploadcomponent';
import Logincomponent from '../components/Login/Logincomponent';
import RegisterComponent from '../components/Register/RegisterComponent';

export default function AppRouting() {
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
          <Route path='/' element={<Logincomponent />} />
          <Route path='/Register' element={<RegisterComponent />} />
          <Route path='/docUpload' element={<DocUploadComponent />} />

          <Route path='/dashboard' element={<DashBoardComponent />} />
          <Route path='/manageEmployee' element={<MaintainEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
