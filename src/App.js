import React, { useState, useRef } from 'react';
import { Container, Image, H1, Formulario, Label, Input, Button, Order, DivText } from './styles'
import axios from 'axios';

import Background from './assets/burger 1.svg'
import Trash from './assets/18297 4.svg'

function App() {
  const [order, setOrder] = useState([])
  const inputOrder = useRef()
  const inputName = useRef()

  async function addNewOrder() {
      const data = await axios.post("http://localhost:3002", {
      name: inputName.current.value,
      order: inputOrder.current.value
      
    })
      console.log(data)
   /*  setOrder([
      ...order,
      {
        id: Math.random(),
        name: inputName.current.value,
        order: inputOrder.current.value
      }
    ]) */




  }

  function deleteOrder(userId) {
    const newOrder = order.filter(user => user.id !== userId)

    setOrder(newOrder)
  }



  return (
    <Container>
      <Image src={Background} />
      <H1>Faça seu pedido!</H1>
      <Formulario>
        <Label>Pedido</Label>
        <Input ref={inputOrder} placeholder='1 Coca-cola, 1 X-burger'></Input>

        <Label>Nome do cliente</Label>
        <Input ref={inputName} placeholder='Insira seu nome'></Input>

        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </Formulario>

      <ul>
        {order.map(user => (
          <Order key={user.id}>
            <DivText>
              <p>{user.order}</p>
              <h2>{user.name}</h2>
            </DivText>
            <button onClick={() => deleteOrder(user.id)}> <img src={Trash} /> </button>


          </Order>)
        )}

      </ul>

    </Container>
  );
}

export default App;
