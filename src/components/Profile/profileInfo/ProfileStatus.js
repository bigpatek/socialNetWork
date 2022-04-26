import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode : false
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
    }



    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.onActivateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <textarea autoFocus={true} onBlur={this.onDeactivateEditMode} value={this.props.status}></textarea>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;