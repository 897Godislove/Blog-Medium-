// import './App.css';
import {Routes, Route } from "react-router-dom"
import { Create } from './components/Create';
import { CreateEmail } from './components/CreateEmail';
import { Signin } from './components/Signin';
import { SigninEmail } from './components/SigninEmail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Signin/> }/>
        <Route path='create' element={ <Create/> }/>
        <Route path='signinemail' element={ <SigninEmail/> }/>
        <Route path='createemail' element={ <CreateEmail/> }/>
      </Routes>
    </div>
  );
}

export default App;
