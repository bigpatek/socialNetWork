import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setLookJob, setUserProfile} from "../../redux/profileReducer";
import {useParams, useLocation, useNavigate, Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (userId === '') {
            userId = 2;
        }
        this.props.getProfile(userId);
    }
    render(){
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile,
        isLook : state.profilePage.isLookingForAJob,
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


compose(
    connect(mapStateToProps, {setUserProfile, setLookJob, getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


export default connect(mapStateToProps, {setUserProfile, setLookJob, getProfile})(withRouter(AuthRedirectComponent));