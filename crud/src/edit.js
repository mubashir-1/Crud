import React from 'react'

export default class Edit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Name: '',
            School: '',
            Class: ''
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({ Name: event.target.value })
        
    }

    handleSubmit() {

    }
    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input type="text" id="name" defaultValue="Name" onChange={this.handleChange}></input>
                    <br /><br />
                    <input type="text" defaultValue="School"></input>
                    <br /><br />
                    <input type="text" defaultValue="Class"></input>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
