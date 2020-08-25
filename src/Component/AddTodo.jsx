import React, {useState } from 'react';
import {Container,Row,Col} from "reactstrap";
import {InputGroup,Button} from "@blueprintjs/core";

const ADDTODO = (props) => {
    const [todo, settodo] = useState("")

    const addTODO = () => {
        props.addItem(todo)
        settodo("")
    }
    return (
        <>
        <Container style={{padding:"15px"}}>
        <Row form>
          <Col xs={{offset:3,size:6}}>
    
            <InputGroup
            onChange={(e) => settodo(e.target.value)}
            value={todo}
            placeholder="Add Todo...."
            />
    
          </Col>
          <Col xs={{size:1}}>
            <Button
            disabled={todo === ""}
            onClick={addTODO}
            intent="primary"
            >Add Item</Button>
             </Col>
        </Row>
        </Container>
        </>
    )
}
export default ADDTODO;