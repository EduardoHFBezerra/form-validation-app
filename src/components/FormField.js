import './FormField.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function FormField(props) {
  const [focused, setFocused] = useState(false);
  const { label, field, errorMessage, onChange, options, ...fieldProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <Form.Group className='mb-3'>
        <Form.Label className='col-form-label'>{label}</Form.Label>
        {(() => {
          switch (field) {
            case 'input':
              return (
                <Form.Control
                  {...fieldProps}
                  onChange={onChange}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                />
              );
            case 'select':
              return (
                <Form.Select
                  {...fieldProps}
                  onChange={onChange}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                  defaultValue=''
                >
                  <option value='' disabled>Selecione...</option>
                  {options.map((option) => (
                    <option 
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
              );
            case 'textarea':
              return (
                <Form.Control
                  {...fieldProps}
                  as='textarea'
                  onChange={onChange}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                ></Form.Control>
              );
            default:
              return (
                <>
                {options.map((option) => (
                <Form.Check
                  key={option.label}
                  {...fieldProps}
                  onChange={onChange}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                  label={option.label}
                  id={`option-${option.label}`}
                />
                ))}
                </>
              );
          }
        })()}
        <Form.Text className='error text-danger'>{errorMessage}</Form.Text>
      </Form.Group>
    </>
  );
}
