import React, { useState } from 'react';
import {Container,Row,Col,ListGroup, ListGroupItem,} from "reactstrap";
import {Button,Alert,InputGroup} from "@blueprintjs/core";

const LISTTODO = (props) => {
    const [isedit,setisEdit] = useState(false)
    const [edit ,setEdit] = useState("")
    const [index,setIndex] = useState("")
    return (
      
        <>
        <Container style={{padding:"15px"}}>
        <Row form>
          <Col xs={{size:12}}>
            <ListGroup>
            {props.list.length > 0 ? props.list.map((res,key)=>{
                return (
                <ListGroupItem 
                
                className="justify-content-between"
                 key={key}>
                     <p
                     onClick={() => {setisEdit(true);
                    setEdit(res);
                    setIndex(key)}}
                    >{res}
                     <sapn>
                    <Button
                style={{float:'right'}}
                minimal
                small
                onClick={(e) => {e.stopPropagation();props.Delete(key)}}
                intent="danger"
                icon="trash"
                ></Button>
                </sapn></p>
         
                </ListGroupItem>
                )
            }) : null }
            </ListGroup>
           
    
          </Col>
          <Alert
            cancelButtonText="Cancel"
            confirmButtonText="Edit"
            icon="edit"
            intent="primary"
            isOpen={isedit}
            onCancel={() => {setisEdit(false);setEdit("")}}
            onConfirm={() => {props.Update(edit,index);setisEdit(false)}}
            >
                <p>
                       Enter Value to update your list item
                    </p>
                <InputGroup
                onChange={(e) => setEdit(e.target.value)}
                value={edit}
                placeholder="Edit Todo...."
                />
    
        </Alert>
        </Row>
        </Container>
        </>
    )
}
export default LISTTODO;