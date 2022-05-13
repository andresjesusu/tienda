import { Button, Card, Col, Container, Row } from "react-bootstrap";
import React, { useContext } from "react";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../firebase.js";
import { useState } from 'react';
import { CheckCircle } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeItem, totalCart } = useContext(CartContext);
  const [ success, setSuccess ] = useState(false);
  const [orderId, setOrderId] = useState({
    name: "",
    lastname: "",
    address: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate()
  
  const volver = () => {
    navigate("/", { replace: false });
  };

  const checkout = () => {
    console.log(items);
    if (items.length === 0) {
      alert("no tienes items en el carrito");
      return;
    }
    const itemsToBuy = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        qty: item.qty,
      };
    });

    const buyer = {
      name: "Andres Urriola",
      phone: "666/666",
      email: "email@mail.com",
      fecha: new Date
    };

    const order = { buyers: buyer, items: itemsToBuy, total: {totalCart} };

    addDoc( collection (db, "orders"), order)
        .then(doc => {
          setOrderId(doc.id)
          setSuccess(true)
          console.log("el id de mi orden creada es ", doc.id);
        })
        .catch(err => {
          console.log("algo malo paso", err);
        })
  
  };

  return (
    <div className="cart_section text-xs-left" style={{position: "relative"}}>

    <Container>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <Card className="panel panel-info">
            <Card.Header>
              <Card.Title className="panel-title">
                <Row>
                  <Col xs={6}>
                    <h5>
                      <span className="glyphicon glyphicon-shopping-cart"></span>
                      Finaliza tu Compra
                    </h5>
                  </Col>
                  <Col xs={6}></Col>
                </Row>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              {items.length >= 1 ? (
                items.map((item, index) => {
                  return (
                    <div key={index}>
                      <Row>
                      <Col xs={2}>
                              <Button style={{marginTop:"30px", height:"40px", marginLeft:"40px"}} xs={2}variant="primary"
                                onClick={() => removeItem(item.id)}
                              >x
                              </Button>
                            </Col>
                        <Col xs={2}>
                          <img
                            style={{ height: "150px" }}
                            src={item.pictureUrl}
                          />
                        </Col>
                        <Col xs={4}>
                          <h4 className="product-name">
                            <strong>{item.title}</strong>
                          </h4>
                         
                            <small  style={{fontSize:"12px"}}>{item.detailss}</small>
                          
                        </Col>
                        <Col xs={4}>
                          <h4 className="product-name">
                            <strong>Detalles</strong>
                          </h4>
                         <h5>
                            <small  style={{fontSize:"12px"}}>{item.details2}</small>
                          </h5>
                          <h5>
                            <small  style={{fontSize:"12px"}}>{item.details3}</small>
                          </h5>
                          <h5>
                            <small  style={{fontSize:"12px"}}>{item.details4}</small>
                          </h5>
                          <h5>
                            <small  style={{fontSize:"12px"}}>{item.details5}</small>
                          </h5>
                        </Col>
                        <Col xs={6}>
                          <Row>
                            <Col xs={6} className="text-right">
                              <h6>
                                <strong>${item.price} x unidad</strong>
                              </h6>
                            </Col>
                            <Col xs={4}>
                              <input
                                type="text"
                                className="form-control input-sm"
                                value={item.qty}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <hr />
                    </div>
                  );
                })
              ) : (
                <div className="">
                  <p>No hay items</p>
                  <Link to="/">
                    <Button>Continuar comprando</Button>
                  </Link>
                </div>
              )}
            </Card.Body>
            <Card.Footer>
              <Row className="text-center">
                <Col xs={9}>
                  <h4 className="text-right">
                    Total <strong>$ {totalCart}</strong>
                  </h4>
                </Col>
                <Col xs={3}>
                  <Button variant="success" onClick={checkout}>Terminar Compra</Button>
                  <Button variant="secondary" onClick={volver}>Seguir Compra</Button>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
    {success ? 
      <div style={{ 
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100v%",
          background: "rgb(76 175 80 / 90%)",
          textAlign: "center",
          color: "white",
          marginTop: "14%",
      }}>
          <CheckCircle style={{ fontSize: 78}} />
          <h1>Tu compra se ha realizado con exito</h1>
          <p>Esta es tu orden de compra{orderId}</p>
          <Button as={Link} to="/">Seguir comprando</Button>
      </div>
  :
      null
  }
  </div>
  );
};
export default Cart;