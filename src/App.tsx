import React from 'react';
import Home from './pages/Home/Home'
import './styles/style.scss'
import {Route, Routes} from "react-router-dom";
import Groups from "./pages/Groups/Groups";
import Layout from "./Layout/Layout";
import GroupsCreate from "./pages/Groups/GroupsCreate";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='groups' element={<Groups/>}/>
                <Route path='groups/create' element={<GroupsCreate/>}/>
            </Route>
            <Route path='login' element={<Login/>}/>
        </Routes>

    </div>
  );
}

export default App;
