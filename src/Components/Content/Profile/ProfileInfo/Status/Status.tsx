import React from "react";
import s from "./status.module.css"

type status = {
    editMode: boolean
}

export class Status extends React.Component<any, any> {

    state: status = {
        editMode: false
    }
    activatedEditMode = () => {
        this.setState({
            editMode: true
        })

    }
    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        })

    }

    render() {
        return <div className={s.status}>
            {this.state.editMode ? <div>
                <input className={s.input} value={`status: ${this.props.status}`} autoFocus={true} onBlur={this.deactivatedEditMode}/>
            </div> : <div className={s.textStatus} onClick={this.activatedEditMode}>{`${this.props.status}`}</div>}
        </div>
    }
}
