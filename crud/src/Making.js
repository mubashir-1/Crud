import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEdit } from '@fortawesome/free-solid-svg-icons';
//import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class Making extends React.Component{

    constructor(props){
        super();
        this.state={

            Table:[
                {NAME : "mubashir",CLASS : 5,SECTION:"C",RESULT:"A"},
                {NAME : "mubashir",CLASS : 5,SECTION:"C",RESULT:"A"},
                {NAME : "mubashir",CLASS : 5,SECTION:"C",RESULT:"A"},
                {NAME : "mubashir",CLASS : 5,SECTION:"C",RESULT:"A"}
            ]
        }
        
    }
    al(y){
        var result = y.map(x=>
            <tr>
                <td>{x.NAME}</td>
                <td>{x.CLASS}</td>
                <td>{x.SECTION}</td>
                <td>{x.RESULT}</td>
                <td style={{textAlign:"center"}} ><FontAwesomeIcon icon={faPencilAlt}/> </td>
                <td style={{textAlign:"center"}}><FontAwesomeIcon icon={faTrash}/></td>
            </tr>
        )
        return result
    }
        
 
 

    render(){
        return(
            <div>
                <table width="100%" border="2">
                <tr>
                    <td>NAME</td>
                    <td>CLASS</td>
                    <td>SECTION</td>
                    <td>RESULT</td>
                </tr>
               
                {this.al(this.state.Table)}
                </table>
            </div>
        )
    }
}
export default Making;