import React, { useState } from 'react';
import axios from 'axios';
import * as Yup from "yup"
import { Formik, Form, Field } from 'formik';

import H1 from '../../components/Title'
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Image, Formulario, Forms } from './styles'
import { useHistory } from 'react-router-dom';

import Background from '../../assets/burger 1.svg'

function App() {
  const [order, setOrder] = useState([])
  const history = useHistory()

  const validationSchema = Yup.object().shape({
    Pedido: Yup.string()
      .min(5, "Mínimo 5 caracteres")
      .required("Pedido é obrigatório"),
    NomeCliente: Yup.string()
      .required("Nome é obrigatório")
  })

  async function addNewOrder(values) {

    const { data: newOrder } = await axios.post("http://localhost:3002/order",
      {
        order: values.Pedido,
        clientName: values.NomeCliente
      })

    setOrder([
      ...order,
      newOrder
    ])

    history.push("/register")

  }

  return (
    <Container> 
        <Image src={Background} />

      <Formulario>
        <H1 titleColor={true}>Faça seu pedido!</H1>
        <Forms>
          <Formik
            onSubmit={addNewOrder}
            validationSchema={validationSchema}
            initialValues={{
              Pedido: '',
              NomeCliente: ''
            }}

          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  required
                  name="Pedido"
                  placeholder='1 Coca-cola, 1 X-burger'
                  as={Input}
                />

                <Field
                  required
                  name="NomeCliente"
                  label="Nome do cliente"
                  placeholder='Insira seu nome'
                  as={Input}
                />
                <Button type="submit" disabled={isSubmitting}>
                  Novo Pedido
                </Button>
              </Form>

            )}

          </Formik>
        </Forms>


        {/*         <Button onClick={addNewOrder}>Novo Pedido</Button>
 */}

        {/*  { <Forms>
          <div>
            <Label>Pedido</Label>
            <Input ref={inputOrder} placeholder='1 Coca-cola, 1 X-burger'></Input>
          </div>
          <div>
            <Label>Nome do cliente</Label>
            <Input ref={inputName} placeholder='Insira seu nome'></Input>
          </div>
        </Forms> } */}

      </Formulario>

    </Container>
  );
}

export default App;
