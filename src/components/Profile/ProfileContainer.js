import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setLookJob, setUserProfile, updateStatus, savePhoto} from "../../redux/profileReducer";
import {useParams, useLocation, useNavigate, Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    refreshProfile() {
        let userId = this.props.router.params.userId;
        if (userId === undefined) {
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login");
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
       this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.router.params.userId != prevProps.router.params.userId) {
            this.refreshProfile();
        }
    }

    render(){
        return (
            <Profile {...this.props} owner = {!!this.props.router.params.userId} profile = {this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        authorizedUserId : state.auth.userId,
        profile: state.profilePage.profile,
        isLook : state.profilePage.isLookingForAJob,
        status : state.profilePage.status
    }
}
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
};


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {setUserProfile, setLookJob, getProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
)(ProfileContainer)



