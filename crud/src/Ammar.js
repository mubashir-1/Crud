import React from 'react';

class Func extends React.Component{
    constructor(props){
        super();
        this.state={
            Table:[
                {bhai:"mubashir", abba:"nazir",beta:"daddu"},
                {bhai:"mubashir", abba:"nazir",beta:"daddu"},
                {bhai:"mubashir", abba:"nazir",beta:"daddu"}
            ]
        }
    }

    all(rab){
      return(
        rab.map(x=>{
            <tr>
                <td>{x.bhai}</td>
                <td>{x.abba}</td>
                <td>{x.beta}</td>
            </tr>
    
            })
      )  
    }

    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td>bhai </td>
                        <td>abba</td>
                        <td>beta</td>
                        
                    </tr>
                    this.all({this.state.Table})
                </table>
            </div>
        )
    }
}
export default Func;