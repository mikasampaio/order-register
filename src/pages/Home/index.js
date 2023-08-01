import React, { useState, useRef } from 'react';
import axios from 'axios';
import * as Yup from "yup"
import { Formik } from 'formik';

import H1 from '../../components/Title'
import Button from '../../components/Button';

import { Container, ContainerImage, Image, Formulario, Forms, Label, Input } from './styles'
import { useHistory } from 'react-router-dom';

import Background from '../../assets/burger 1.svg'

function App() {
  const [order, setOrder] = useState([])
  const inputOrder = useRef()
  const inputName = useRef()
  const history = useHistory()


  async function addNewOrder() {

    const { data: newOrder } = await axios.post("http://localhost:3002/order",
      {
        order: inputOrder.current.value,
        clientName: inputName.current.value
      })

    setOrder([
      ...order,
      newOrder
    ])

    history.push("/register")

  }

  return (
    <Container>
      <ContainerImage>
        <Image src={Background} />
      </ContainerImage>

      <Formulario>
        <H1>Faça seu pedido!</H1>

        <Forms>
          <div>
            <Label>Pedido</Label>
            <Input ref={inputOrder} placeholder='1 Coca-cola, 1 X-burger'></Input>
          </div>
          <div>
            <Label>Nome do cliente</Label>
            <Input ref={inputName} placeholder='Insira seu nome'></Input>
          </div>
          <Button onClick={addNewOrder}>Novo Pedido</Button>
        </Forms>

      </Formulario>

    </Container>
  );
}

export default App;
