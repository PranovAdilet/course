import React from 'react';
import Home from './pages/Home/Home'
import './styles/style.scss'
import {Route, Routes} from "react-router-dom";
import Groups from "./pages/Groups/Groups";
import Layout from "./Layout/Layout";
import GroupsCreate from "./pages/Groups/GroupsCreate";
import Login from "./pages/Login/Login";
import RemindPassword from "./pages/RemindPassword/RemindPassword";
import CreateUsers from "./pages/CreateUser/CreateUsers";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

import User from "./pages/Users/User";


import FulfilledRemind from "./pages/RemindPassword/FulfilledRemind";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='user' element={<User/>}/>

                <Route path='groups' element={<Groups/>}/>
                <Route path='groups/create' element={<GroupsCreate/>}/>
            </Route>
            <Route path='login' element={<Login/>}/>
            <Route path='resetpassword' element={<ResetPassword/>}/>
            <Route path='remindpassword' element={<RemindPassword/>}/>

            <Route path='user/create' element={<CreateUsers/>}/>

            <Route path='fulfilledremind' element={<FulfilledRemind/>}/>

        </Routes>

    </div>
  );
}

export default App;
