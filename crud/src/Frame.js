import React from 'react';

class Frame extends React.Component {
    constructor(props) {
        super();

        this.state = {
            Table: [
                { Name: "arslan", id: 1, class: 1 },
                { Name: "mubashir", id: 2, class: 2 },
                { Name: "arslan", id: 3, class: 3 },
                { Name: "mubashir", id: 2, class: 2 },
                { Name: "arslan", id: 3, class: 3 }
            ],

        };
    };
    renderName(Tab) {
        return (Tab.map(item =>
            <tr>
                <th>{item.Name}</th>
                <th>{item.id}</th>
                <th>{item.class}</th>

            </tr>

        ))
    }

    render() {


        return (
            <div>
                <table width="100%" border="1" >
                    <tr>
                        <th>Names</th>
                        <th>Id </th>
                        <th>class</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {this.renderName(this.state.Table)}

                </table>
            </div>
        )
    }
}
export default Frame;