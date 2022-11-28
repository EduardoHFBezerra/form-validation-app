import React from 'react';
import FormField from './FormField';
import { useState } from 'react';

export default function FormValidate() {
  const [values, setValues] = useState({
    username: '',
    gender: '',
    person: '',
    description: ''
  });

  const fields = [
    {
      field: 'control',
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
      field: 'control',
      id: 'person',
      name: 'person',
      type: 'radio',
      options: [
        {id: 1, label: 'Pessoa Física'},
        {id: 2, label: 'Pessoa Jurídica'}
      ],
      errorMessage: 'O tipo de pessoa é obrigatório!',
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
      <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <FormField
              key={field.id}
              {...field}
              value={values[field.name]}
              onChange={onChange}
            />
          ))}

        <div className='d-grid gap-2'>
          <button
            type='submit'
            className='btn btn-primary border-0 p-3 rounded-5 mt-3'
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
