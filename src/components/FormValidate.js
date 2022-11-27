import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormField from './FormField';
import { useState } from 'react';

export default function FormValidate() {
  const [values, setValues] = useState({
    username: ''
  });

  const fields = [
    {
      id: 'username',
      name: 'username',
      type: 'text',
      placeholder: 'Usuário',
      errorMessage: 'O usuário deve ter entre 3-16 caracteres e não pode conter caracteres especiais!',
      label: 'Usuário',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true
    },
    {
      id: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'Nome',
      errorMessage: 'O nome é obrigatório!',
      label: 'Nome',
      required: true
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className='form-validate my-5 m-auto'>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={12}>
          {fields.map((field) => (
            <FormField
              key={field.id}
              {...field}
              value={values[field.name]}
              onChange={onChange}
            />
          ))}
          </Col>
        </Row>

        <div className='d-grid gap-2'>
          <Button
            variant='primary'
            type='submit'
            className='border-0 p-3 rounded-5 mt-3'
          >
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  )
}