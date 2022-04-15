import React from "react";
import {connect} from "react-redux";
import {
    follow,
    isFetching,
    setCurrentPage, setIsFetching,
    setUsers,
    setUsersCount,
    unfollow
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (page) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users usersCount={this.props.usersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow} users={this.props.users}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersCount, setIsFetching })(UsersContainer);