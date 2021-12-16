import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './container/Home';
import Department from './container/Department';
import Doctor from './container/Doctor';
import About from './container/About';
import Contact from './container/Contact';
import Appointment from './container/Appointment';
import Login from './container/Login';
import Medicine from './container/Medicine';
import Adddoctor from './container/Adddoctor';
import Addmedicine from './container/Addmedicine';
import Patient from './container/Patient';
import Addpatient from './container/Addpatient';
import Addappointment from './container/Addappointment';
import AppointmentList from './container/AppointmentList';
import { Provider } from 'react-redux';
import Count from './container/Count';
import { configureStore } from './redux/Store';


const store = configureStore()
function App() {
  return (
    <div>
      <Provider store={store}>
      <Header/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/department"component={Department}/>
      <Route path="/doctor"component={Doctor}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/appointment" component={Appointment}/>
      <Route path="/login" component={Login}/>
      <Route path="/medicine" component={Medicine}/>
      <Route path="/adddoctor" component={Adddoctor}/>
      <Route path="/addmedicine" component={Addmedicine}/>
      <Route path="/patient" component={Patient}/>
      <Route path="/addpatient" component={Addpatient}/>
      <Route path="/addappointment" component={Addappointment}/>
      <Route path="/appointmentlist" component={AppointmentList}/>
      <Route path="/count" component={Count}/>
      </Switch>
      <Footer/>
      </Provider>
    </div>
  );
}

export default App;
