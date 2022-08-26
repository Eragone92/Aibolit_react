
import './App.css';
import Contacts from './components/contacts/contacrs';//import component contacts
import Footer from './components/footer/footer';//import component footer
import Header from './components/Header/header';//import component header
import MainOne from './components/main/mainOne';//import component main one
import MobileVersion from './components/mobileVesion/mobileVersion';//import component mobile version
import CompanyHistory from './components/ourHistory/companyHistory';//import component company history
import Services from './components/services/services';//import component services
import Animals from './components/Why/animals';//import component animals
function App() {
  return (
    // create parent div wrapper for wrapping our components
   <div className='wrapper'>
    {/* add component header */}
    <Header/>
    {/* add component main one */}
    <MainOne/>
    {/* add component services */}
    <Services/>
    {/* add component company history */}
    <CompanyHistory/>
    {/* add component animals */}
    <Animals/>
    {/* add component mobile version */}
    <MobileVersion/>
    {/* add component contacts */}
    <Contacts/>
    {/* add component footer */}
    <Footer/>
   </div>// close parent tag wrapper
  );
}

export default App; //exportcomponent app
