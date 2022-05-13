import {Link} from 'react-router-dom';
import React  from "react";
import {useState} from 'react';
import { Card } from 'react-bootstrap';
import { Button, Collapse } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Item = ({ item }) => {  
    const navigate = useNavigate()
    const {key, title,price} = item
    const [open, setOpen] = useState(false);


const goToProduct = () => {
        navigate(`/product/${key}`)
}

      
    return (
    <div>
        <Card border="secondary" style={{ width: '250px', color:"white",backgroundColor:"" }} key={item.id}>
        <Link to={`/product/${key}`}><Card.Img style={{marginTop:"10px", paddingRight:"10px", paddingLeft:"10px"}} variant="top" src={item.pictureUrl}/></Link>
  <Card.Body>
  <Card.Title style={{fontSize:"20px", color:"black", textAlign:"center"}}>{item.title}</Card.Title>
  <Button style={{marginLeft: "22px"}} variant="danger"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        >
        Detalles
      </Button>
      
        <Collapse in={open} dimension="width">
          <div id="example-fade-text">
            <Card body style={{width: '220px', height:"200px", color:"black"}}>
            <li>{item.details2}</li>
            <li>{item.details3}</li>
            <li>{item.details4}</li>
            <li>{item.details5}</li>


            </Card>
          </div>
        </Collapse>
      
  <Button style={{marginLeft: "5px"}} variant="success" onClick={() => goToProduct()}>Comprar</Button>

    </Card.Body>
</Card>
</div>
    )
}

export default Item;
