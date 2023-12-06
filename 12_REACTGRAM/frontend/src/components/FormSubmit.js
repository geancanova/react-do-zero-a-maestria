import React from "react";

// Components
import Message from "./Message";

const FormSubmit = ({
  loading,
  error,
  message,
  btnValue,
  cancelBtnText,
  cancelBtnHandler,
  cancelBtn = false,
}) => {
  return (
    <>
      {!loading && <input type="submit" value={btnValue} />}
      {loading && <input type="submit" value="Aguarde..." disabled />}
      {cancelBtn && (
        <button className="cancel-btn" onClick={cancelBtnHandler}>
          {cancelBtnText}
        </button>
      )}
      {error && <Message msg={error} type="error" />}
      {message && <Message msg={message} type="success" />}
    </>
  );
};

export default FormSubmit;
