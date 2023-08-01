import React, { useState, useEffect } from 'react';

import H1 from '../../components/Title'
import Button from '../../components/Button';

import { Container, Image, Order, DivText } from './styles'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Background from '../../assets/burger (1) 1.svg'
import Trash from '../../assets/18297 4.svg'

function ListOrders() {
  const [order, setOrder] = useState([])
  const history = useHistory()

  useEffect(() => {
    async function newOrders() {
      const { data: newOrder } = await axios.get("http://localhost:3002/order")

      setOrder(newOrder)
    }

    newOrders()
     
  }, [])

  async function deleteOrder(userId) {
    await axios.delete(`http://localhost:3002/order/${userId}`)

    const newOrder = order.filter(user => user.id !== userId)

    setOrder(newOrder)

  }

  const returnOrder = () => {
    history.push("/")
  }

  return (
    <Container>
      <Image src={Background} />
      <H1>Pedidos</H1>

      <ul>
        {order.map(user => (
          <Order key={user.id}>
            <DivText>
              <p>{user.order}</p>
              <h2>{user.clientName}</h2>
            </DivText>
            <button  onClick={() => deleteOrder(user.id)}> <img src={Trash} alt='Trash' /> </button>

          </Order>)
        )}

      </ul>
     
        <Button isColor={true} onClick={returnOrder}>Voltar</Button>

    </Container>
  );
}

export default ListOrders;
