import {CartState} from "../Context/Context";
import { useState,useEffect } from "react";
import {ListGroup,Button,Col,Row,Form, Image} from "react-bootstrap";
import Rating from "./Rating";
import{AiFillDelete} from "react-icons/ai";

const Cart=()=>
{
const {state:{cart},dispatch,}=CartState();
const[total,setTotal]=useState();
useEffect(()=>
{
setTotal(cart.reduce((acc,curr)=> acc + Number(curr.price) * curr.qty,0))
},[cart]);
return(<div class="home">
<div class="productContainer">
<ListGroup>
{
cart.map((prod)=>(
 <ListGroup.Item key={prod.id}>  
    <Row>
        <Col md={2}>
            <Image src={prod.image} fluid rounded/>
        </Col> 
        <Col md={2}>
            <span>{prod.name}</span>
        </Col>
        <Col md={2}>
            <span>INR {prod.price}</span>
        </Col>
        <Col md={2}>
            <Rating rating={prod.ratings}/>
        </Col>
    <Col md={2}>
        <Form.Control as="select" value={prod.qty}
        onChange={(e)=>
        dispatch({
            type:"CHANGE_CART_QTY",
            payload:{id:prod.id,
            qty:e.target.value,},
        })}>
            {[...Array(prod.inStock).keys()].map((x)=>(
            <option key={x + 1}>{x + 1}</option>
            ))}
        </Form.Control>
    </Col>
<Col md={2}>
    <Button type="button"
        variant="light"
        onClick={()=>
        dispatch({
        type: "REMOVE_FROM_CART",
        payload:prod,
        })}
    >   
        <AiFillDelete fontsize="20px"/>
    </Button>
</Col>
</Row>
</ListGroup.Item>
))}
</ListGroup>
</div>
    <div class="filters summary">
        <span class="title">Subtotal({cart.length})items</span>
        <span style={{fontWeight:700, fontsize:20}}>Total : INR {total}</span>
        <Button type="button" disabled={cart.length===0}>Proceed to checkout
        </Button>
    </div>
</div>
)
}
export default Cart;
