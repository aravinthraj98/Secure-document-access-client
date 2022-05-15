const LocalHost = 'http://localhost:4000/';
const User = LocalHost + 'user/';
const Admin = LocalHost + 'admin/';
const RouteGetAllDepartment = 'getAllDepartment';
const RouteAddDocuments = 'addDocuments';
const RouteUserLogin = User + 'login';
const RouteVerifierLogin = Admin + 'login';
const RouteAdminMyProcess = Admin + 'myProcess';
const RouteAdminVerifyProcess = Admin + 'verifyProcess';
const RouteAdminUpdateProcess = Admin + 'updateProcess';
const RouteUserProcess = User + 'myProcess';
const RouteUserProcessStatus = User + 'viewProcessStatus';
const RouteAdminGetDeptDetails = Admin + 'getDepartmentDetails';

module.exports = {
  User,
  LocalHost,
  RouteGetAllDepartment,
  RouteAddDocuments,
  RouteUserLogin,
  RouteVerifierLogin,
  RouteAdminMyProcess,
  RouteAdminVerifyProcess,
  RouteAdminUpdateProcess,
  RouteUserProcess,
  RouteUserProcessStatus,
  RouteAdminGetDeptDetails,
};
