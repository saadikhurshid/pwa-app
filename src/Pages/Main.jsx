import React from 'react';
import ADDTODO from '../Component/AddTodo';
import LISTTODO from '../Component/List';
import {Row} from "reactstrap";



class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

    addItems = (e) => {
        let newlist = this.state.list
        this.setState({list:newlist.concat([e])})
    }

    onDelete = (e) => {
        let newlist = this.state.list
        // we can use splice or fiilter method as well
        delete newlist[e]
        this.setState({list:newlist})
    }

    onUpdate = (e,index) => {
        let newlist = this.state.list
        newlist[index] = e 
        this.setState({list:newlist})
    }

    render(){
        return (
            <>
                <Row style={{background:"#ccc",padding:"5px"}}>
                <h3 style={{marginLeft:"15px"}}>TO DO LIST</h3>
                </Row>
                <ADDTODO
                addItem={(e) => this.addItems(e)}
                />
                <LISTTODO
                Update= {(e,index) => this.onUpdate(e,index)}
                 Delete={(e) => this.onDelete(e)}
                 list={this.state.list}/>
            </>
        )
    }

}
export default Main;

