import React from "react";
import './App.css';
import './components/Header/Header.module.css';
import './components/Nav/Nav.module.css';
import './components/Profile/Profile.module.css';
import Nav from "./components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) return <Preloader />
        return (
            /*<BrowserRouter>*/
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav state={this.props.store.getState().sideBar}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={'/profile'} element={<ProfileContainer/>}/>
                        <Route path={'/profile/:userId'}
                               element={<ProfileContainer/>}/>
                        <Route path={'/dialogs/*'}
                               element={<DialogsContainer/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'/users'} element={<UsersContainer/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                    </Routes>
                </div>
            </div>
            /*</BrowserRouter>*/
        );
    }
}

let mapStateToProps = (state) => ({
    initialized : state.app.initialized,
});


export default connect(mapStateToProps, {initializeApp})(App);
