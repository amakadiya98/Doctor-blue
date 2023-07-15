
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Points from './pages/Points'
import Patient from './pages/Patient'
import DoctorList from './pages/DoctorList';
import DoctorDetails from './pages/DoctorDetails'
import DoctorAllSlot from './pages/DoctorAllSlot'
import PatientList from './pages/PatientList'
import UpcomingAppointment from './pages/UpcomingAppointment'
import PatientDetails from './pages/PatientDetails'
import History from './pages/History'
import AllPatient from './pages/AllPatient'
import Excersice from './pages/Excersice'
import ExcersiceList from './pages/ExcersiceList'
import PersonalInformation from './pages/PersonalInformation'
import OperationalInformation from './pages/OperationalInformation'
import ContactInformation from './pages/ContactInformation'
import DoctorDetailsForm from './pages/DoctorDetailsForm'
import MyAppointment from './pages/MyAppointment'
import Settings from './pages/Settings'
import PatientContactDetails from './pages/PatientContactDetails'
import Chat from './pages/Chat'
import AppointSetting from './pages/AppointSetting'
import PatientContactInformation from './pages/PatientContactInformation'
import Foot from './pages/Foot'
import ApplicationSettingCalendar from './pages/ApplicationSettingCalendar'
import './assets/css/responisve.css'
import HealthProfile from './pages/HealthProfile';
import Community from './pages/Community'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<HealthProfile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/patient' element={<Patient />} />
        <Route path='/point' element={<Points />} />
        <Route path='/doctorList' element={<DoctorList />} />
        <Route path='/doctorDetails' element={<DoctorDetails/>} />
        <Route path='/doctorAllSlot' element={<DoctorAllSlot/>} />
        <Route path='/patientList' element={<PatientList/>}/>
        <Route path='/upcomingAppointment' element={<UpcomingAppointment/>}/>
        <Route path='/patientDetails' element={<PatientDetails/>} />
        <Route path='/history' element={<History/>}/>
        <Route path='/allPatient' element={<AllPatient/>}/>
        <Route path='/excersice' element={<Excersice/>}/>
        <Route path='/excersiceList' element={<ExcersiceList />}/>
        <Route path='/personalInformation' element={<PersonalInformation/>}/>
        <Route path='/operationalInformation' element={<OperationalInformation/>}/>
        <Route path='/contactInformation' element={<ContactInformation/>}/>
        <Route path='/doctorDetailsForm' element={<DoctorDetailsForm/>}/>
        <Route path='/myAppointment' element={<MyAppointment/>}/>
        <Route path='/settings' element={<Settings />}/>
        <Route path='/patientContactDetails' element={<PatientContactDetails />}/>
        <Route path='/chat' element={<Chat />}/>
        <Route path='/appointSetting' element={<AppointSetting />}/>
        <Route path='/patientContactInformation' element={<PatientContactInformation />}/>
        <Route path='/foot' element={<Foot />} />
        <Route path='/applicationSettingCalendar' element={<ApplicationSettingCalendar />} />
        <Route path='/community' element={<Community />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
