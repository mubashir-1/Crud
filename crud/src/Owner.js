import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Edit from './edit';



class Owner extends React.Component {

    constructor(props) {
        super();
        this.state = {
            Table: [

                { NAME: "MUBASHIR", SCHOOL: "LFS", CLASS: "5", SECTION: "A" },
                { NAME: "SHAHBAZ", SCHOOL: "BSS", CLASS: "10", SECTION: "C" },
                { NAME: "YASIR", SCHOOL: "FPS", CLASS: "7", SECTION: "A" },
                { NAME: "SHAFFAN", SCHOOL: "SMS", CLASS: "2", SECTION: "C" },
                { NAME: "SHAHZAD", SCHOOL: "DMC", CLASS: "10", SECTION: "C" },
                { NAME: "ALI", SCHOOL: "FPS", CLASS: "7", SECTION: "A" },
                { NAME: "ALEX", SCHOOL: "SMS", CLASS: "2", SECTION: "C" },
                { NAME: "SHAHZAD", SCHOOL: "DMC", CLASS: "10", SECTION: "C" },
                { NAME: "ARSALAN", SCHOOL: "FPS", CLASS: "7", SECTION: "A" },
                { NAME: "JOHN", SCHOOL: "SMS", CLASS: "2", SECTION: "C" },
                { NAME: "ABBAS", SCHOOL: "DMC", CLASS: "10", SECTION: "C" },
                { NAME: "ASIM", SCHOOL: "FPS", CLASS: "7", SECTION: "A" },
                { NAME: "QADIR", SCHOOL: "SMS", CLASS: "2", SECTION: "C" },
                { NAME: "OSAMA", SCHOOL: "DMC", CLASS: "10", SECTION: "C" },
            ],
            isVisible: false
        }
        this.edit = this.edit.bind(this)
    }

    edit() {
        this.setState({ isVisible: true })
    }
    all(mub) {
        return (
            mub.map(x =>
                <tr>
                    <td style={{ textAlign: "center", backgroundColor: "grey" }} >{x.NAME}</td>
                    <td style={{ textAlign: "center" }} >{x.SCHOOL}</td>
                    <td style={{ textAlign: "center", backgroundColor: "grey" }}>{x.CLASS}</td>
                    <td style={{ textAlign: "center" }}>{x.SECTION}</td>
                    <td style={{ textAlign: "center", backgroundColor: "grey" }} onClick={this.edit}><FontAwesomeIcon icon={faEdit} /></td>
                    <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={faTrashAlt} /></td>
                </tr>
            )
        )
    }

    render() {

        return (
            <div>
                <table width="100%" border="4">
                    <tr style={{ backgroundColor: "grey" }}>
                        <th style={{ textAlign: "center" }} >NAME</th>
                        <th style={{ textAlign: "center" }}>SCHOOL</th>
                        <th style={{ textAlign: "center" }}>CLASS</th>
                        <th style={{ textAlign: "center" }}>SECTION</th>
                        <th style={{ textAlign: "center" }}>EDIT</th>
                        <th style={{ textAlign: "center" }}>DELETE</th>

                    </tr>

                    {this.all(this.state.Table)}
                </table>
                { this.state.isVisible && <Edit /> }
            </div>

        )
    }

} export default Owner;