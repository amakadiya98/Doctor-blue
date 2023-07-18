
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Points from './pages/Points'
import Patient from './pages/Patient'
import AppointmentList from './pages/Appointment';
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
import BookAppointment from './pages/BookAppointment'
import Settings from './pages/Settings'
import PatientContactDetails from './pages/PatientContactDetails'
import Chat from './pages/Chat'
import AppointSetting from './pages/AppointSetting'
import PatientContactInformation from './pages/PatientContactInformation'
import Foot from './pages/Foot'
import ApplicationSettingCalendar from './pages/ApplicationSettingCalendar'
import './assets/css/responisve.css'
import HealthProfile from './pages/HealthProfile';
import Community from './pages/Community';
import SplashScreen from './pages/SplashScreen';
import WorkoutScreen from './pages/WorkoutScreen';
import CommunityCardDetails from './pages/CommunityCardDetails';
import Difficult from './pages/Difficult';
import AppointmentToHospital from './pages/BookAppointment/AppointmentToHospital';
import ProfileDoctor from './pages/ProfileDoctor';
import ProfileApointment from './pages/ProfileApointment';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<HealthProfile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/exercises' element={<Excersice/>}/>
        <Route path='/excersiceList' element={<ExcersiceList />}/>
        <Route path='/patient' element={<Patient />} />
        <Route path='/splash' element={<SplashScreen />} />
        <Route path='/workout' element={<WorkoutScreen />} />
        <Route path='/difficult' element={<Difficult />}/>
        <Route path='/community' element={<Community />}/>
        <Route path='/communityDetails' element={<CommunityCardDetails />} />
        <Route path='/point' element={<Points />} />
        <Route path='/appointment' element={<AppointmentList />} />
        <Route path='/bookAppointment' element={<BookAppointment/>}/>
        <Route path='/appointmentHospital' element={<AppointmentToHospital/>}/>
        <Route path='/doctorDetails' element={<DoctorDetails/>} />
        <Route path='/profileDoctor' element={<ProfileDoctor />} />
        <Route path='/profileApointment' element={<ProfileApointment/>}/>
        <Route path='/doctorAllSlot' element={<DoctorAllSlot/>} />
        <Route path='/patientList' element={<PatientList/>}/>
        <Route path='/upcomingAppointment' element={<UpcomingAppointment/>}/>
        <Route path='/patientDetails' element={<PatientDetails/>} />
        <Route path='/history' element={<History/>}/>
        <Route path='/allPatient' element={<AllPatient/>}/>
        <Route path='/personalInformation' element={<PersonalInformation/>}/>
        <Route path='/operationalInformation' element={<OperationalInformation/>}/>
        <Route path='/contactInformation' element={<ContactInformation/>}/>
        <Route path='/doctorDetailsForm' element={<DoctorDetailsForm/>}/>
        <Route path='/settings' element={<Settings />}/>
        <Route path='/patientContactDetails' element={<PatientContactDetails />}/>
        <Route path='/chat' element={<Chat />}/>
        <Route path='/appointSetting' element={<AppointSetting />}/>
        <Route path='/patientContactInformation' element={<PatientContactInformation />}/>
        <Route path='/foot' element={<Foot />} />
        <Route path='/applicationSettingCalendar' element={<ApplicationSettingCalendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
