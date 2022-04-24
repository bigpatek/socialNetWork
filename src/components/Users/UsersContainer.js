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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        setUsersCount: (totalCount) => {
            dispatch(setUsersCountAC(totalCount));
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}*/

export default connect(mapStateToProps, {
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    changePage,
    followThunk,
    unfollowThunk
})(UsersContainer);