import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import About from './Pages/About';
import Service from './Pages/Service';
import Portfolio from './Pages/Portfolio';
import ContactForm from './Pages/ContactForm';


function App() {
  return (
    <div >
     
    <Header/>
 
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/service' element={<Service/>}/> */}
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contactform' element={<ContactForm/>}/>

      </Routes>

    </div>
  );
}

export default App;
