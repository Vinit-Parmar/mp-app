// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import AboutUs from './components/AboutUs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");

    }
  }
//     const toggleMode1 =()=>{
//       if(mode==='light'){
//         setMode("dark");
//         document.body.style.backgroundColor = '#263A29';
//         showAlert("Dark Mode has been enabled","success");
//       }
//       else{
//         setMode("light");
//         document.body.style.backgroundColor = 'white';
//         showAlert("Light Mode has been enabled","success");
  
//       }
//   }
//   const toggleMode2 =()=>{
//     if(mode==='light'){
//       setMode("dark");
//       document.body.style.backgroundColor = '#630606';
//       showAlert("Dark Mode has been enabled","success");
//     }
//     else{
//       setMode("light");
//       document.body.style.backgroundColor = 'white';
//       showAlert("Light Mode has been enabled","success");

//     }
// }
  return (
    <>
    <Router>
    <Navbar title ="TextPlay" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <AboutUs mode={mode}/>
          </Route>
          <Route exact path="/mp-app">
          <TextForm showAlert={showAlert} heading="Enter the Text to analyze" mode={mode}></TextForm>
          </Route>
        </Switch>   
      </div>
       </Router>
    </>
    
  );
}

export default App;
