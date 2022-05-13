import React from "react";
import { Breadcrumb, Button, Card, Col, Container, Row, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {

    const {addItem, removeItem} = useContext(CartContext);
    const navigate = useNavigate()
    const goToCart = () => {
        navigate(`/Cart/`)
    }
    
    const volver = () => {
        navigate("/", { replace: false });
      };



const [itemsQty, setItemsQty] = useState(1);
const [agregarCarrito, setAgregarCarrito] = useState(false);
const [cambiarBotones, setCambiarBotones] = useState(false);
const [eliminarCarrito, setEliminarCarrito] = useState(false);
const onAdd = () => {
  setCambiarBotones(true);
};

const mostrarCarrito = () => {
  addItem({ qty: itemsQty, ...item });
  setAgregarCarrito(true);
};



  return (
    <div>
        <Container>
            <Row>
                <Col lg={12}>
                    <Card className="mb-10">
                        <Card.Header>
                            <nav className="header-navigation">
                            <Button variant="success" onClick={volver}>Volver Atras</Button>

                            <Breadcrumb>
                                <Breadcrumb.Item>Switch</Breadcrumb.Item>
                                <Breadcrumb.Item>Juegos</Breadcrumb.Item>
                                <Breadcrumb.Item active>{item.title}</Breadcrumb.Item>
                            </Breadcrumb>
                            </nav>
                        </Card.Header>
                        <Card.Body className="store-body">
                            <Row>
                                <Col xs={7} className="product-info">
                        <Carousel variant="dark">
  <Carousel.Item interval={2000}>
    <img style={{marginLeft: "230px", width :"300px", height:"450px"}}
      
      src={item.pictureUrl}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
  <img style={{width :"700px", height:"450px"}}
      
      src={item.pictureUrl2}
      alt="Second  slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img style={{width :"700px", height:"450px"}}
      
      src={item.pictureUrl3}
      alt="Third  slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img style={{width :"700px", height:"450px"}}
      
      src={item.pictureUrl4}
      alt="Four slide"
    />
  </Carousel.Item>
</Carousel>
                                    <Col className="product-seller-recommended">
                                        <Row className="product-description mb-5" style={{textAlign: "left"}}>
                                            <h5 className="mt-3 mb-4">Características</h5>
                                            <ul>
                                                {item.details}
                                            </ul>
                                            <ul >
                                                {item.details2}
                                                
                                            </ul>
                                            <ul >
                                                {item.details3}
                                                
                                            </ul>
                                            <ul >
                                                {item.details4}
                                                
                                            </ul>
                                            <ul >
                                                {item.details5}
                                                
                                            </ul> <hr />
                                            <h2 className="mb-4">Descripción</h2>
                                            {item.detailss}
                                        </Row>
                                    </Col>
                                </Col>
                                <Col className="product-payment-details">
                                    <p className="last-sold text-muted"><small>{itemsQty} vendidos</small></p>
                                    <h4 className="product-title mb-2">{item.title}</h4>
                                    <h2 className="product-price display-4">$ {item.price}</h2>
                                    <p className="text-success"><i className="fa fa-credit-card"></i> Hasta 12 cuotas sin tarjeta</p>
                                    <label>Cantidad</label>
                                    <ItemCount stock={item.stock} itemsQty={itemsQty} setItemsQty={setItemsQty} onAdd={onAdd} /> 
                                    {cambiarBotones && ( 
                                    <> 
                                    <div>
                                     <Button variant="primary" onClick={() => 
                                            mostrarCarrito()}>
                                      Agregar al carrito
                                     </Button>
                                    {agregarCarrito && (
                                    <Button onClick={goToCart} variant="danger">
                                        Finalizar compra
                                    
                                    </Button>
                                    )}
                                   </div>
                                     </>
                                       )}
                                   <div>
                                   <Button variant="secondary" onClick={volver}>Volver</Button>
                                    </div>       

                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default ItemDetail;