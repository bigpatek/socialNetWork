import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setLookJob, setUserProfile, updateStatus} from "../../redux/profileReducer";
import {useParams, useLocation, useNavigate, Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (userId === undefined) {
            userId = 23379 ;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    render(){
        return (
            <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => {
    return{
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
    connect(mapStateToProps, {setUserProfile, setLookJob, getProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer)

/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer);*/

