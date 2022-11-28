import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormField from './FormField';
import { useState } from 'react';

export default function FormValidate() {
  const [values, setValues] = useState({});

  const fields = [
    {
      field: 'input',
      id: 'username',
      name: 'username',
      type: 'text',
      placeholder: 'Nome de usuário',
      errorMessage: 'O usuário deve ter entre 3-16 caracteres e não pode conter caracteres especiais!',
      label: 'Usuário',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true
    },
    {
      field: 'select',
      id: 'gender',
      name: 'gender',
      errorMessage: 'O gênero é obrigatório!',
      label: 'Gênero',
      options: [
        {label: 'Masculino', value: 'male'},
        {label: 'Feminino', value: 'female'}
      ],
      required: true
    },
    {
      field: 'checkbox',
      id: 'person',
      name: 'person',
      type: 'radio',
      options: [
        {label: 'Física'},
        {label: 'Jurídica'}
      ],
      errorMessage: 'O tipo de pessoa é obrigatório!',
      label: 'Pessoa',
      required: true
    },
    {
      field: 'textarea',
      id: 'description',
      name: 'description',
      placeholder: 'Descrição',
      errorMessage: 'A descrição é obrigatória!',
      label: 'Descrição',
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
          {fields.map((field) => (
            <FormField
              key={field.id}
              {...field}
              value={values[field.name]}
              onChange={onChange}
            />
          ))}

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