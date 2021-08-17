import React from "react";

function Modal({ children }) {
  return (
    <>
      <section className="modal modal--wrapper">
        <div className="modal__content">{children}</div>
      </section>
    </>
  );
}

export default Modal;
