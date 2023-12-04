import React from 'react'

// Components
import Message from './Message'

const FormSubmit = (props) => {
  return (
    <>
      {!props.loading && <input type="submit" value={props.btnValue} />}
      {props.loading && (
        <input type="submit" value="Aguarde..." disabled />
      )}
      {props.error && <Message msg={props.error} type="error" />}
    </>
  )
}

export default FormSubmit
