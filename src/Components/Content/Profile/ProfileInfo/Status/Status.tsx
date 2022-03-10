import React from "react";
import s from "./status.module.css"

type status = {
    status: any
    editMode: boolean
}

export class Status extends React.Component<any, any> {

    statusRef: any = React.createRef()
    state: status = {

        status: this.props.status,
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
        this.props.updateStatus(this.state.status);
    }
    onChangeInput = (e: any) => {

        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {

        return <div className={s.status}>
            {this.state.editMode ? <div>
                <input onChange={this.onChangeInput} ref={this.statusRef} className={s.input}
                       value={this.state.status}
                       autoFocus={true}
                       onBlur={this.deactivatedEditMode}/>
            </div> : <div className={s.textStatus} onClick={this.activatedEditMode}>{`${this.props.status}`}</div>}
        </div>
    }
}
