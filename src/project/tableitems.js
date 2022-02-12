import React from "react";
class Items extends React.Component{
    constructor(props){
        super(props)
    }   
    render(){
        return(
                <tr>
                    <td>$</td>
                    <td>
                        <input onChange={this.props.handleChange} value={this.props.value} placeholder="Enter your work name "></input>
                    </td>
                    <td><input  onChange={this.props.changeTiming} value={this.props.timing} placeholder="Enter your time "></input></td>
                    <td>
                        <button className="btn btn-outline-success" onClick={this.props.add}>ADD</button>
                    </td>
                </tr>    
        )    
    }     
} 
export default Items;






