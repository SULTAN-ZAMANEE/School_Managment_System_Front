import Home from './pages/public/HomePage';
import { Routes ,Route } from 'react-router-dom';
import PageNotFound from './components/common/Error/NotFound'
import Login from './pages/public/LoginPage';
import ContectUs from './pages/public/ContectUs';
import Header from './components/Header/NavbarComponent';
import Footer from './components/common/Layout/Footer';
import AdminDashboard from './pages/admin/moe/AdminDashboard';
import SchoolDashboard from './pages/school/SchoolDashboard';
import ParentDashboard from './pages/parent/ParentDashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import UnitDashboard from './pages/admin/unit/UnitDashboard';
import LocalityDashboard from './pages/admin/locality/LocalityDashboard';
import StateDashboard from './pages/admin/state/StateDashbord';
import BackupRestore from './pages/admin/BackupRestore';
import SchoolPrincipalDashboard from './pages/admin/schoolmaster/SchoolmasterDashboard';
import StudentDashboard from './pages/student/StudentDashboard';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-us" element={<ContectUs />} />
        <Route path='/adminDashboard' element={<AdminDashboard/>}/>
        <Route path='/unitDashboard' element={<UnitDashboard/>}/>
        <Route path='/localityDashboard' element={<LocalityDashboard/>}/>
        <Route path='/stateDashboard' element={<StateDashboard/>}/>
        <Route path='/parent' element={<ParentDashboard/>}/>
        <Route path='/student' element={<StudentDashboard/>}/>
        <Route path='/teacher' element={<TeacherDashboard/>}/>
        <Route path='/backup' element={<BackupRestore />} />
        <Route path='/pageNotFound' element={<PageNotFound />} />
        <Route path='/School' element={<SchoolDashboard />} />
        <Route path='/Schoolmaster' element={<SchoolPrincipalDashboard />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
