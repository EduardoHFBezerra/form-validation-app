import './FormField.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function FormField(props) {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, ...fieldProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <Form.Label className='col-form-label'>
        {label}
      </Form.Label>
      <Form.Control
        {...fieldProps}
        onChange={onChange}
        onBlur={handleFocus} 
        focused={focused.toString()}
      />
      <span className='error text-danger'>{errorMessage}</span>
    </>
  )
}
