import React, {createRef} from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode : false,
        status : this.props.status,
    }

    onActivateEditMode = () => {
        this.setState({
            editMode : true
        })
    }

    onDeactivateEditMode = () => {
        this.setState({
            editMode : false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status : e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status : this.props.status
            })
        }
    }


    render() {
        console.log('render')
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.onActivateEditMode}>{this.props.status || 'Пока что нет статуса...'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <textarea onChange={this.onStatusChange} autoFocus={true} onBlur={this.onDeactivateEditMode} value={this.state.status}></textarea>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;