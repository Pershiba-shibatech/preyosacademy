import React from 'react'
import { Form } from 'react-bootstrap';

const LoginInputs = ({type,placeholder,classStyle,onchangeFunction,value}) => {
  return (
    <>
      <Form.Control
        type={type}
        placeholder={placeholder}
        className={classStyle}
        value={value}
        autoComplete="off"
        onChange={(e) => onchangeFunction(e)}
      />
    </>
  );
}

export default LoginInputs