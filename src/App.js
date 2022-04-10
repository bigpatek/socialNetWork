import React from "react";
import './App.css';
import './components/Header/Header.module.css';
import './components/Nav/Nav.module.css';
import './components/Profile/Profile.module.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";




const App = (props) => {
    return (
        /*<BrowserRouter>*/
            <div className="app-wrapper">
                <Header/>
                <Nav state={props.store.getState().sideBar}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={'/profile'}
                               element={<Profile />}/>
                        <Route path={'/dialogs/*'}
                               element={<DialogsContainer />}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'/users'} element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        /*</BrowserRouter>*/
    );
}


export default App;
