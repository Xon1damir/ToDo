import React from "react";
import Items from './tableitems';
import Table from './table';
import Sort from './sort';

class ToDoApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tasks:[{
                id:1,
                task:"Go'sht olish",
                done:false,
                time:"15-minut"
            },{
                id:2,
                task:"Ruchka olish",
                done:false,
                time:"5-minut"
            },{
                id:3,
                task:"Dars qilish",
                done:false,
                time:"4-soat"
            }],
            value:'',
            timing:'',
            sort: false
          
        }
        this.handleChange = this.handleChange.bind(this);
        this.changeTiming = this.changeTiming.bind(this)
        this.add = this.add.bind(this)
        this.delete = this.delete.bind(this)
        this.changeState = this.changeState.bind(this)
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    changeTiming(event){
        this.setState({timing: event.target.value})
    }
    delete(a_id){ 
        let con  = window.confirm("Do you want to remove this line?" )
        if(con === true){
            let filteredTasks = this.state.tasks.filter((object_tasks, h) => {
                return object_tasks.id !== (a_id)
            });
            this.setState({
                tasks: filteredTasks,
            });
        }else{;
            return
        }
    }
    add(){
        let input1 = this.state.timing
        let input = this.state.value
        let text = this.state.tasks
        if( input === ''){
            alert("Enter your Work name ")
            return
        }else if( input1 === ''){
            alert("Enter your timing")
            return
        }
        let lest_id = 1
        if(text.length == 0){
            lest_id=1
        }else{
            lest_id=this.state.tasks[this.state.tasks.length-1].id+1
        }
        text.push({
            id:lest_id,
            task:this.state.value,
            done:false,
            time:this.state.timing
        })
        this.setState({
            tasks: text,
            value:'',
            timing:''
        })   
    }   
    changeSortState(){
        this.setState({
            sort:true
        })
    }
    render(){
        let rows = [];
        for(let i = 0; i < this.state.tasks.length; i++) {
            let a_id = this.state.tasks[i].id
            rows.push(
                <tr>
                    <td>{this.state.tasks[i].id }</td>
                    <td>{this.state.tasks[i].task}</td>
                    <td>{this.state.tasks[i].time}</td>
                    <td>
                        <button className="btn btn-outline-danger" onClick={(e) => this.delete(a_id,e)}>Delete</button>
                    </td>
                </tr>
            );
        }
        return(
            <React.Fragment>
                {rows}
                <Sort sort={this.state.sort} changeSortState={this.changeSortState} />
                <div className="app w-50 mx-auto table-responsive-sm  table-responsive-md table-responsive-lg  table-responsive-xl   ">
                    <table className="table table-striped table-sm ">
                        <Table />
                        <tbody>
                        <Items tasks = {this.state.tasks} value = {this.state.value}  timing = {this.state.timing}  handleChange = {this.handleChange}  changeTiming = {this.changeTiming}  add = {this.add}/>      
                        </tbody>
                    </table>    
                </div>
            </React.Fragment>
        )    
    }     
}

export default ToDoApp;