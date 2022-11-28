import './FormField.css';
import React from 'react';
import { useState } from 'react';

export default function FormField(props) {
  const [focused, setFocused] = useState(false);
  const { field, label, errorMessage, onChange, options, ...fieldProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      {(() => {
        switch (field) {
          case 'control':
            return (
              <>
                {
                fieldProps.type === 'radio' ||
                fieldProps.type === 'checkbox' ? (
                  <>
                    {options.map((option) => (
                      <div key={option.id} className='mb-3 form-check'>
                        <input
                          {...fieldProps}
                          onChange={onChange}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          label={option.label}
                          id={`option-${option.id}`}
                          className='form-check-input'
                        />
                        <label
                          className='form-check-label'
                          htmlFor={`option-${option.id}`}
                        >
                          {option.label}
                        </label>
                        <small className='error text-danger'>
                          {errorMessage}
                        </small>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className='mb-3'>
                    <label htmlFor={fieldProps.id} className='form-label'>
                      {label}
                    </label>
                    <input
                      {...fieldProps}
                      onChange={onChange}
                      onBlur={handleFocus}
                      focused={focused.toString()}
                      className='form-control'
                    />
                    <small className='error text-danger'>{errorMessage}</small>
                  </div>
                )}
              </>
            );
          case 'select':
            return (
              <div className='mb-3'>
                <label htmlFor={fieldProps.id} className='form-label'>
                  {label}
                </label>
                <select
                  {...fieldProps}
                  onChange={onChange}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                  className='form-select'
                >
                  <option value='' disabled>
                    Selecione...
                  </option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <small className='error text-danger'>{errorMessage}</small>
              </div>
            );
          case 'textarea':
            return (
              <div className='mb-3'>
                <label htmlFor={fieldProps.id} className='form-label'>
                  {label}
                </label>
                <textarea
                  {...fieldProps}
                  onChange={onChange}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                  className='form-control'
                ></textarea>
                <small className='error text-danger'>{errorMessage}</small>
              </div>
            );
          default:
            return <></>;
        }
      })()}
    </>
  );
}
