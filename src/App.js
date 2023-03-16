// import './App.css';
import {Routes, Route } from "react-router-dom"
import { Create } from './components/pages/Create';
import { CreateEmail } from './components/pages/CreateEmail';
import { Signin } from './components/pages/Signin';
import { SigninEmail } from './components/pages/SigninEmail';

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
