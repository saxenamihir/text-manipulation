import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {Routes,Route} from 'react-router-dom' //importing react router  write import BrowseRouter for this


import Alert from './components/Alert';

function App() {
  const[mode, setMode] = useState('light');// Whether dark mode is enabled or not
  const[alert, setAlert] =useState(null);

  const showAlert = (message,type)=>{
     setAlert({
       msg: message,
       type: type
     })
     setTimeout(()=>{
      setAlert(null);
     },1500);
  }
 
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }


  const toggleMode= (cls)=>{
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(4 15 74)';
      showAlert("Dark mode has been enabled","success");
      // document.title='TextUtile-Dark Mode';  
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      // document.title='TextUtile-Light Mode';
    }

  }
  return (
  <>
   {/* <Navbar title="TextUtils"  aboutText="About Us"/> */}
   <Navbar title="Typofun" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   
   <Routes>
    <Route exact path="/about" element={<About mode={mode}/>}></Route>
    <Route exact path="/home" element={<Textform showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove Extra Spaces" mode={mode}/>}></Route>
   </Routes>

   {/* <About/> */}
   </div>
   
   </>
  );
}

export default App;
