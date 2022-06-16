import React from "react";
import {connect} from "react-redux";
import {
    getUsers,
    setCurrentPage, toggleFollowingProgress,
    followThunk,
    unfollowThunk, changePage
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {
    getUsersSelector,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getUsersCount
} from "../../redux/users-selectors";
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.changePage(page, this.props.pageSize);
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users usersCount={this.props.usersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
                   followThunk = {this.props.followThunk} unfollowThunk = {this.props.unfollowThunk}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        usersCount: getUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default connect(mapStateToProps, {
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    changePage,
    followThunk,
    unfollowThunk
})(UsersContainer);